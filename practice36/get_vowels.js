const get_vowels = string => {
    let vowels = ''
    for (var i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u') {
            vowels += string[i]
        }
    }
    return vowels
}

console.log(get_vowels("four score and seven years ago"))