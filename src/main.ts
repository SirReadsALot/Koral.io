import * as PIXI from "pixi.js"

var koral = new PIXI.Application({
  width: 1000,
  height: 1000
})

document.body.appendChild(koral.view)

koral.loader
  .add([
    "assets/creatures/spritesheet.png"
  ])
  .load(setup);

function setup() {
  let clownfish = new PIXI.Sprite(
    koral.loader.resources["assets/creatures/spritesheet.png"].texture
  );

  koral.stage.addChild(clownfish)

}
