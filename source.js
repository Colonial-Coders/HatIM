// keep in mind microbit does some shit to the code when u switch back and forth, so if shit confuses you, don't blame me.

input.onButtonPressed(Button.A, function () {
    if (started == false) {
        started = true
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
    } else {
        currentmsg = "" + currentmsg + "A"
    }
})
input.onButtonPressed(Button.AB, function () {
    if (started == true) {
        if (currentmsg == "") {
            radio.sendString(translated)
            translated = ""
            basic.showIcon(IconNames.Yes)
            music.play(music.stringPlayable("C - F - C5 - - - ", 1000), music.PlaybackMode.UntilDone)
            started = false
            basic.pause(2000)
            basic.clearScreen()
        } else {
            translated = "" + translated + alphabet[morse.indexOf(currentmsg)]
            basic.showString("" + (alphabet[morse.indexOf(currentmsg)]))
            music.play(music.stringPlayable("C5 - - - - - - - ", 1000), music.PlaybackMode.UntilDone)
            currentmsg = ""
        }
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # . . . #
        # # # # #
        `)
    music.play(music.stringPlayable("F - C - G A C5 - ", 1000), music.PlaybackMode.UntilDone)
    basic.showString(" " + receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (started == true) {
        currentmsg = "" + currentmsg + "B"
    }
})
let translated = ""
let currentmsg = ""
let started = false
let alphabet: string[] = []
let morse: string[] = []
radio.setGroup(1)
morse = [
"AB",
"BAAA",
"BABA",
"BAA",
"A",
"AABA",
"BBA",
"AAAA",
"AA",
"ABBB",
"BAB",
"ABAA",
"BB",
"BA",
"BBB",
"ABBA",
"BBAB",
"ABA",
"AAA",
"B",
"AAB",
"AAAB",
"ABB",
"BAAB",
"BABB",
"BBAA"
]
alphabet = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
music.play(music.stringPlayable("C D E F G A B C5 ", 400), music.PlaybackMode.UntilDone)
basic.showString("HatIM v0.1")
basic.forever(function () {
	
})
