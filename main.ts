sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(2)
})
let pizza: Sprite = null
scene.setBackgroundColor(2)
let ducky = sprites.create(assets.image`Ducky`, SpriteKind.Player)
controller.moveSprite(ducky)
pizza = sprites.create(assets.image`pizza`, SpriteKind.Food)
