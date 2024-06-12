let seq = []
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    # # # # #
    `
   , 0)
    control.waitMicros(100000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.clearScreen()
    basic.pause(1000)
    
})
