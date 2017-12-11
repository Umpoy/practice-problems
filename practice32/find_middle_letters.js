const find_middle_letters = string => {
    if (string.length % 2 == 0) {
        return string.charAt((string.length / 2) - 1) + string.charAt(string.length / 2)
    } else {
        return string.charAt(Math.round(string.length / 2))
    }
}

console.log(find_middle_letters('dish'));
console.log(find_middle_letters('cat'));
console.log(find_middle_letters('wambo'));
console.log(find_middle_letters('tacocat'));
console.log(find_middle_letters('watercat'));