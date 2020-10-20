let Y = 0
let X = 0
basic.forever(function () {
    Y = 4
    while (Y <= 4) {
        if (Y / 2 == 0) {
            while (true) {
                led.plot(X, Y)
                basic.pause(500)
                Y += -1
                X += -1
            }
        }
    }
})
