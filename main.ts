// 120 bpm means 120 quarter beats
let masterTempo = 120
let lastTime = 0
// sub division of step lengths (0->quarter beat, 1->eighth, 2->sixteenth)
let subDiv = 0
// time step for every beat
let stepLengthms = (60000 / masterTempo) >> subDiv


let seq = [false, false, false, false]
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
