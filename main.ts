info.onCountdownEnd(function () {
    game.showLongText("Good Job", DialogLayout.Bottom)
    sprites.destroy(pizza)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let pizza: Sprite = null
info.startCountdown(25)
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f e e f f f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f d e e e e e e d f f . . 
    . . f d d e e e e e e d d f . . 
    . . f f f f f f f f f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f 4 e 4 1 f d d f 1 4 e 4 f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f 1 1 1 1 1 1 f 4 e . . 
    . . 4 d f 1 1 1 1 1 1 f d 4 . . 
    . . 4 4 f 1 1 1 1 1 1 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    .......fffffffffff.......
    ......ffcccccccccff......
    ....ffccfffffffffccff....
    ...ffcfffffffffffffcff...
    ..ffcfffcccccccccfffcff..
    ..fcfffcfffffffffcfffcf..
    .fcfffcfffffffffffcfffcf.
    ffcffcfffcccccccfffcffcff
    fcffcfffcfffffffcfffcffcf
    fcffcffcfffffffffcffcffcf
    fcffcffcffcccccffcffcffcf
    fcffcffcffcdddcffcffcffcf
    fcffcffcffcd.dcffcffcffcf
    fcffcffcffcdddcffcffcffcf
    fcffcffcffcccccffcffcffcf
    fcffcffcfffffffffcffcffcf
    fcffcfffcfffffffcfffcffcf
    ffcffcfffcccccccfffcffcff
    .fcfffcfffffffffffcfffcf.
    ..fcfffcfffffffffcfffcf..
    ..ffcfffcccccccccfffcff..
    ...ffcfffffffffffffcff...
    ....ffccfffffffffccff....
    ......ffcccccccccff......
    .......fffffffffff.......
    `, SpriteKind.Food)
mySprite.setStayInScreen(true)
music.play(music.stringPlayable("B A C5 - G B F - ", 340), music.PlaybackMode.LoopingInBackground)
