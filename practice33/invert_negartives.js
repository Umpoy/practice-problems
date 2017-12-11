const invert_negatives = number => {
    if (typeof number == 'string') {
        return false
    } else {
        if (number < 0) {
            return number
        } else {
            var hold = number * 2
            return number - hold
        }
    }
}

console.log(invert_negatives(-5))
console.log(invert_negatives(4000))
console.log(invert_negatives('puppies')
)