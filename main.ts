basic.forever(function () {
    if (input.lightLevel() > 200) {
        music.play(music.stringPlayable("- - - - - - - - ", 120), music.PlaybackMode.UntilDone)
    }
    if (input.lightLevel() < 50) {
        music.play(music.stringPlayable("- - - - - - - - ", 60), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("calor ")
    } else {
        basic.showString("frio")
    }
})
