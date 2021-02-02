/////// Webgl class for the draw distorsion with the mouse ///////

import * as PIXI from "pixi.js"

export default class Webgl {

  // Math methods for the displacement filter
  map = (val, start1, end1, start2, end2) => {
    return start2 + ((val - start1) / (end1 - start1)) * (end2 - start2)
  }
  clamp = (val, min, max) => Math.min(Math.max(min, val), max)
  lerp = (source, dest, k = 0.05) => source + (dest - source) * k
  distance = (x1, y1, x2, y2) => Math.sqrt(Math.pow(x1 - x2, 2), Math.pow(y1 - y2, 2))

  createCanvas = options => {
    const {
      image = "meBlc.png",
      dispImage = "disp2.png",
      dispScale = 2.5,
      transparent = true
    } = options

    let { container, width, height } = options

    const containerRect = container.getBoundingClientRect()
    if (!width) width = containerRect.width
    if (!height) height = containerRect.height

    // Create a Pixi application
    const app = new PIXI.Application({
      width,
      height,
      transparent
    })
    container.appendChild(app.view)

    // Create a container for the application
    const fxContainer = new PIXI.Container()
    fxContainer.width = app.renderer.width
    fxContainer.height = app.renderer.height
    app.stage.addChild(fxContainer)

    app.stage.interactive = true

    // Loader for images (my draw and the displacement filter)
    const loader = new PIXI.Loader()
    if (image) {
      loader.add("img", image)
    }
    loader.add("disp", dispImage)
    loader.load((loader, resources) => {
      // for my draw
      if (image) {
        const imgSprite = new PIXI.Sprite(resources.img.texture)
        imgSprite.anchor.set(0.1, 0.6)
        imgSprite.x = app.renderer.width / 2
        imgSprite.y = app.renderer.height / 2
        imgSprite.scale.x = 0.45
        imgSprite.scale.y = 0.45
        fxContainer.addChild(imgSprite)
      }

      // for the displacement filter
      const dispSprite = new PIXI.Sprite(resources.disp.texture)
      dispSprite.anchor.set(0.5)
      dispSprite.x = app.renderer.width / 2
      dispSprite.y = app.renderer.height / 2
      dispSprite.scale.x = dispScale
      dispSprite.scale.y = dispScale
      app.stage.addChild(dispSprite)
      const dispFilter = new PIXI.filters.DisplacementFilter(dispSprite)
      dispFilter.scale.x = 0
      dispFilter.scale.y = 0
      app.stage.filters = [dispFilter]

      let pointerX = dispSprite.x
      let pointerY = dispSprite.y
      let pointerIn = false

      const update = () => {
        requestAnimationFrame(update)
        const dist = this.distance(dispSprite.x, dispSprite.y, pointerX, pointerY)
        dispSprite.x = this.lerp(dispSprite.x, pointerX, 0.1)
        dispSprite.y = this.lerp(dispSprite.y, pointerY, 0.1)
        const scale = pointerIn ? this.clamp(this.map(dist, 0, 200, 8, 10), 8, 10) : 0

        dispFilter.scale.x = this.lerp(dispFilter.scale.x, scale, 0.1)
        dispFilter.scale.y = this.lerp(dispFilter.scale.y, scale, 0.1)
      }

      // interaction with the draw
      app.stage.on("pointerover", () => {
        pointerIn = true
      })
      app.stage.on("pointermove", e => {
        const { x, y } = e.data.global
        if (x < 0 || y < 0) return
        pointerX = x
        pointerY = y
      })
      app.stage.on("pointerout", () => {
        pointerIn = false
      })

      update()
    })
  }
}
