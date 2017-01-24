function countdown(callback) {
    setTimeout(callback, 2000)
}

function createMultiplier(multiplierValue) {
    return function(num) {
        return multiplierValue * num
    }
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multiplierValue, value) {
    return createMultiplier.bind(null, multiplierValue)(value)
}

var doublerWithBind = multiplier(2,2)
var triplerWithBind = multiplier(3,2)
