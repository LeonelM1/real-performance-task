namespace SpriteKind {
    export const chest = SpriteKind.create()
    export const Map = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    shootingDirection = 3
    playerSprite.setImage(assets.image`up`)
    animation.runImageAnimation(
    playerSprite,
    assets.animation`up loop`,
    200,
    true
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (playerSprite.overlapsWith(chest)) {
        chest.setImage(img`
            . b b b b b b b b b b b b b b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b b b b b b b d d b b b b b b b 
            . b b b b b b c c b b b b b b . 
            b c c c c c b c c b c c c c c b 
            b c c c c c c b b c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b c c c c c c c c c c c c c c b 
            b b b b b b b b b b b b b b b b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)
        info.changeScoreBy(20)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (shootingDirection == 1) {
        fireballSprite = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, playerSprite, 100, 0)
    } else if (shootingDirection == 2) {
        fireballSprite = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, playerSprite, -100, 0)
    } else if (shootingDirection == 3) {
        fireballSprite = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, playerSprite, 0, -100)
    } else if (shootingDirection == 4) {
        fireballSprite = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . 2 1 1 1 1 2 . . . . . 
            . . . . . . 3 1 1 3 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, playerSprite, 0, 100)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    shootingDirection = 2
    playerSprite.setImage(assets.image`left`)
    animation.runImageAnimation(
    playerSprite,
    assets.animation`left loop`,
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    chest = sprites.create(sprites.dungeon.chestOpen, SpriteKind.Player)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    shootingDirection = 1
    playerSprite.setImage(assets.image`right`)
    animation.runImageAnimation(
    playerSprite,
    assets.animation`right loop`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    shootingDirection = 4
    playerSprite.setImage(assets.image`down`)
    animation.runImageAnimation(
    playerSprite,
    assets.animation`down loop`,
    200,
    true
    )
})
info.onLifeZero(function () {
    sprites.destroy(playerSprite)
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    game.reset()
})
function buildRoom (numChests: number) {
    for (let index = 0; index < numChests; index++) {
        r = randint(4, 11)
        c = randint(4, 11)
        tiles.placeOnTile(chest, tiles.getTileLocation(c, r))
        rand = randint(0, 3)
        Direction = "up"
        if (rand == 0) {
            r += -1
            Direction = "up"
        } else if (rand == 1) {
            c += 1
            Direction = "right"
        } else if (rand == 2) {
            r += 1
            Direction = "down"
        } else {
            c += -1
            Direction = "left"
        }
        while (!(tiles.tileAtLocationIsWall(tiles.getTileLocation(c, r)) && !(tiles.tileAtLocationEquals(tiles.getTileLocation(c, r), img`
            . . b b b b b b b b b b b b . . 
            . b e 4 4 4 4 4 4 4 4 4 4 e b . 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
            b e e 4 4 4 4 4 4 4 4 4 4 e e b 
            b e e e e e e e e e e e e e e b 
            b e e e e e e e e e e e e e e b 
            b b b b b b b d d b b b b b b b 
            c b b b b b b c c b b b b b b c 
            c c c c c c b c c b c c c c c c 
            b e e e e e c b b c e e e e e b 
            b e e e e e e e e e e e e e e b 
            b c e e e e e e e e e e e e c b 
            b b b b b b b b b b b b b b b b 
            . b b . . . . . . . . . . b b . 
            `)))) {
            tiles.setTileAt(tiles.getTileLocation(c, r), sprites.dungeon.floorLight0)
            tiles.setWallAt(tiles.getTileLocation(c, r), true)
            rand = randint(0, 3)
            if (rand == 0 && !(Direction == "down")) {
                r += -1
                Direction = "up"
            } else if (rand == 1 && !(Direction == "left")) {
                c += 1
                Direction = "right"
            } else if (rand == 2 && !(Direction == "up")) {
                r += 1
                Direction = "down"
            } else {
                c += -1
                Direction = "left"
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.disintegrate, 1000)
    info.changeScoreBy(1)
})
let EnemySprite: Sprite = null
let Direction = ""
let rand = 0
let c = 0
let r = 0
let fireballSprite: Sprite = null
let shootingDirection = 0
let playerSprite: Sprite = null
let chest: Sprite = null
chest = sprites.create(img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, SpriteKind.chest)
playerSprite = sprites.create(assets.image`down`, SpriteKind.Player)
let EnemyImages = [
img`
    . . . f f f f f f f f f f . . . 
    . . f b b b b b a a a a a f . . 
    . f b b b b b b a a a a a a f . 
    f a b f f f f f f f f f f a a f 
    f a f f 5 f f f f f f 5 f f a f 
    f a f f f f f f f f f f f f a f 
    f c c f f f f f f f f f f c c f 
    f a c c c c c c c c c c c a a f 
    f a a a a a a a a a a a a a a f 
    . f a b b b b b b b b b b a f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    f a a b b 5 b b c b 5 b b a a f 
    f a a b b b b b c b 5 b b a a f 
    f a a b b b b b c b b b b a a f 
    . f f f f f f f f f f f f f f . 
    . . e e . . . . . . . . e e . . 
    `,
img`
    . . . . . . . . . . . . . . 
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 b f f d f 
    . f 2 2 2 2 2 2 d b b d b f 
    . f d d d d d d d f f f f . 
    . . f d b d f d f . . . . . 
    . . . f f f f f f . . . . . 
    `,
img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fdd111111ddf......
    ......fbdd1111dddf......
    ......fcdbfddfbdbf......
    .......fbcf11fcbfff.....
    .......ffb1111bcfbcf....
    ........fcdb1bdfbbbf....
    .......ffffffffffcf.....
    .....fcb1bcfffff........
    .....f1b1b1ffff.........
    ......ffbff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    `,
img`
    . . . . c c c c c c . . . . . . 
    . . . c 6 7 7 7 7 6 c . . . . . 
    . . c 7 7 7 7 7 7 7 7 c . . . . 
    . c 6 7 7 7 7 7 7 7 7 6 c . . . 
    . c 7 c 6 6 6 6 c 7 7 7 c . . . 
    . f 7 6 f 6 6 f 6 7 7 7 f . . . 
    . f 7 7 7 7 7 7 7 7 7 7 f . . . 
    . . f 7 7 7 7 6 c 7 7 6 f c . . 
    . . . f c c c c 7 7 6 f 7 7 c . 
    . . c 7 2 7 7 7 6 c f 7 7 7 7 c 
    . c 7 7 2 7 7 c f c 6 7 7 6 c c 
    c 1 1 1 1 7 6 f c c 6 6 6 c . . 
    f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
    f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
    . f 6 1 1 1 1 1 1 6 6 6 f . . . 
    . . c c c c c c c c c f . . . . 
    `
]
let mapLists = [tilemap`level1`, tilemap`level6`, tilemap`level5`]
let SpawnLocation = tiles.getTilesByType(sprites.dungeon.darkGroundCenter)
playerSprite.setStayInScreen(true)
controller.moveSprite(playerSprite, 100, 100)
scene.cameraFollowSprite(playerSprite)
tiles.setCurrentTilemap(mapLists._pickRandom())
info.setScore(0)
info.setLife(3)
tiles.placeOnTile(playerSprite, tiles.getTileLocation(randint(1, 15), randint(1, 15)))
buildRoom(3)
game.onUpdateInterval(1000, function () {
    if (sprites.allOfKind(SpriteKind.Enemy).length < 10) {
        EnemySprite = sprites.create(EnemyImages._pickRandom(), SpriteKind.Enemy)
        EnemySprite.follow(playerSprite, 25)
        tiles.placeOnTile(EnemySprite, tiles.getTileLocation(randint(1, 15), randint(1, 15)))
    }
})
