const random_range = (x, y) => {
    if (y == null) {
        return x[Math.floor(Math.random() * x.length)]
    } else {
        if (x > y) {
            var hold = x;
            x = y;
            y = hold;
        }
        return Math.ceil(Math.random() * (y - x) + x)
    }
}

console.log(random_range(100, 105))
console.log(random_range(100, 105))
console.log(random_range(100, 105))
console.log(random_range(100, 105))
console.log(random_range(100, 105))
console.log(random_range(100, 105))
console.log(random_range(100, 105))
console.log('break')
console.log(random_range(1, 100))
console.log(random_range(['a', 'b', 'c', 'd', 'e']))