const alternate_caps = string => {
    var new_string = ''
    for (var i = 0; i < string.length; i++) {
        if (i % 2 === 0) {
            new_string += string[i].toLowerCase()
        } else {
            new_string += string[i].toUpperCase()
        }
    }
    return new_string
}

console.log(alternate_caps('this is a test string to see if it alternates'))