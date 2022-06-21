
const isPalindrome = (str) => {
    original_word = str
    reverse_word = str.split("").reverse()
    message = ''
    
    if (original_word === reverse_word.join("")) {
        message = "It's already a palindrome";
    } else {
        if(checkMatchCharactor(original_word.split(''))) {
            message = "It can be a palindrome by changing only 1 character";
        } else {
            message = "It cannot be a palindrome";
        }
    }

    return message
}

const checkMatchCharactor = (original_word_split) => {
    count_charactor = 0;
    for(let i = 0; i < original_word_split.length/2; i++) {
        if(original_word_split[i] != original_word_split[original_word_split.length - i - 1]) {
            count_charactor ++;
        }
    }

    if (count_charactor > 1) {
        return false
    } else {
        return true
    }
}

console.log(isPalindrome('abccba'))
console.log(isPalindrome('abccaa'))
console.log(isPalindrome('abbcca'))
console.log(isPalindrome('oooow'))
console.log(isPalindrome('oooooow'))
console.log(isPalindrome('ooowooo'))