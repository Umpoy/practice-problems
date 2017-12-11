const cocococombomath = (a, b, c, d, e) => {
    if (a == null || b == null || c == null || d == null || e == null) {
        return 'not enough paramters passed'
    }
    return ((((a * b) + c) / d) - e)
}

console.log(cocococombomath(3, 2, 6, 3, 5))