input.onButtonPressed(Button.A, function () {
    music.setVolume(255)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.ForeverInBackground)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.playMelody("- F A E C A F G ", 214)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
    basic.clearScreen()
    basic.showString("NORTH")
    basic.showArrow(ArrowNames.South)
    basic.clearScreen()
    basic.showString("SOUTH")
    basic.showArrow(ArrowNames.East)
    basic.clearScreen()
    basic.showString("EAST")
    basic.showArrow(ArrowNames.West)
    basic.clearScreen()
    basic.showString("WEST")
})
input.onButtonPressed(Button.B, function () {
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(131, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        # . . . #
        . # # # .
        . . . . .
        . # . # .
        . . . . .
        `)
})
basic.clearScreen()
