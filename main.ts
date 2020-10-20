let X = 0
let Y = 0
basic.forever(function () {
    X = 4
    while (X <= 4) {
        if (X % 2 == 0) {
            Y = 4
            while (Y <= 4) {
                led.plot(X, Y)
                basic.pause(500)
                Y += -1
                X += -1
            }
        }
    }
})
