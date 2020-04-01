sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    scene.cameraShake(4, 500)
    pizza.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
let pizza: Sprite = null
scene.setBackgroundColor(6)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . 3 3 3 3 3 3 3 . . . .
    . . . 3 3 3 . . . . . 3 3 3 . .
    . . 3 3 . . . . . . . . . 3 3 .
    . . 3 . . . . . . . . . . . 3 3
    . . 3 . . f f f . . f f f . . 3
    . . 3 . . f 2 f . . f 2 f . . 3
    . 3 . . . . . . f . . . . . . 3
    . 3 . . . . . f . . . . . . . 3
    . 3 . . . . . f f f . . . . . 3
    . . 3 . . . . . . . . . . . . 3
    . . 3 3 . f f f f f f f f f . 3
    . . . . 3 3 3 2 2 . . . . . 3 3
    . . . . . . 3 2 2 3 3 3 3 3 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . .
    . . . . . . b 4 4 4 b . . . . .
    . . . . . . b b 4 4 4 b . . . .
    . . . . . b 4 b b b 4 4 b . . .
    . . . . b d 5 5 5 4 b 4 4 b . .
    . . . . b 3 2 3 5 5 4 e 4 4 b .
    . . . b d 2 2 2 5 7 5 4 e 4 4 e
    . . . b 5 3 2 3 5 5 5 5 e e e e
    . . b d 7 5 5 5 3 2 3 5 5 e e e
    . . b 5 5 5 5 5 2 2 2 5 5 d e e
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4
    . b 2 2 2 5 5 5 5 5 5 d d e 4 .
    b d 3 2 d 5 5 5 d d d 4 4 . . .
    b 5 5 5 5 d d 4 4 4 4 . . . . .
    4 d d d 4 4 4 . . . . . . . . .
    4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
info.startCountdown(10)
