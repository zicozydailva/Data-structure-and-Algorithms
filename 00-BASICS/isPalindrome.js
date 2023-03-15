const isPalindrome = str => {
    let revStr = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    revStr = str.split("").reverse().join("")
    return revStr == str
}

console.log(isPalindrome("madam"))
console.log(isPalindrome("boss"))