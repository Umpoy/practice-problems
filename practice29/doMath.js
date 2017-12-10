function doMath(x, y, z) {
    if (z == 'X' || z == '*') {
        z = 'x'
    }
    switch (z) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case 'x':
            return x * y;
        case '/':
            return x / y
    }
    return
}

console.log('test1: ', doMath(10, 1, '+'))
console.log('test2: ', doMath(10, 1, '-'))
console.log('test3: ', doMath(10, 1, 'x'))
console.log('test4: ', doMath(10, 1, 'X'))
console.log('test5: ', doMath(10, 1, '/'))
