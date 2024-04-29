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
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
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
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
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
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
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
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . 2 5 5 5 5 2 . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
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
            tiles.setTileAt(tiles.getTileLocation(c, r), sprites.dungeon.floorDark2)
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
    sprites.destroy(otherSprite, effects.fire, 500)
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
    . . . . . . . . . . . . . . 
    . f f . . . . f f . . . . . 
    f b f f . . f f b f . . . . 
    f 3 b f f f f b 3 f . . . . 
    f b 3 f f f f 3 b f . . . . 
    f f f f f f f f f f . . . . 
    f f 5 f f f f 5 f f . . . . 
    f f f 5 f f 5 f f f . f . . 
    . f f f 3 3 f f 2 . . f . . 
    . . 2 2 2 2 2 2 f f f f . . 
    . . f f f f f f f . . . . . 
    . . . f . f . f . . . . . . 
    . . . . . . . . . . . . . . 
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
    . . . . f f f f f f . . . . . . 
    . . . f 4 2 2 2 2 4 f . . . . . 
    . . f 2 2 2 2 2 2 2 2 f . . . . 
    . f 4 2 2 2 2 2 2 2 2 4 f . . . 
    . f 2 f 4 4 4 4 f 2 2 2 f . . . 
    . f 2 4 f 4 4 f 4 2 2 2 f . . . 
    . f 2 2 2 2 2 2 2 2 2 2 f . . . 
    . . f 2 2 2 2 4 f 2 2 4 f f . . 
    . . . f f f f f 2 2 4 f 2 2 f . 
    . . f 2 2 2 2 2 4 f f 2 2 2 2 f 
    . f 2 2 2 2 2 f f f 4 2 2 4 f f 
    f 5 5 5 5 2 4 f f f 4 4 4 f . . 
    f 5 5 5 5 5 4 4 f 4 4 4 4 f . . 
    f 4 5 5 5 5 5 4 4 4 4 4 f f . . 
    . f 4 5 5 5 5 5 5 4 4 4 f . . . 
    . . f f f f f f f f f f . . . . 
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
tiles.placeOnTile(playerSprite, tiles.getTileLocation(randint(2, 14), randint(2, 14)))
buildRoom(3)
game.onUpdateInterval(1000, function () {
    if (sprites.allOfKind(SpriteKind.Enemy).length < 10) {
        EnemySprite = sprites.create(EnemyImages._pickRandom(), SpriteKind.Enemy)
        EnemySprite.follow(playerSprite, 25)
        tiles.placeOnTile(EnemySprite, tiles.getTileLocation(randint(1, 15), randint(1, 15)))
    }
})
