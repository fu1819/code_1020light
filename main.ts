let X = 0
let Y = 0
basic.forever(function () {
    X = 4
    Y = 0
    while (X <= 4 && Y <= 4) {
        led.plot(X, Y)
        if (X == 0 && Y == 4) {
            led.plot(X, Y)
        } else if (false) {
        	
        } else {
        	
        }
    }
})
