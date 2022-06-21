const reverse = ((num) => {
    binary = (num).toString(2);
    binary_each = binary.split('')
    binary_reverse = ''
    for(let i = 0; i < binary_each.length; i++) {
        if(binary_each[i] == 1) {
            binary_reverse += "0"
        } else {
            binary_reverse += "1"
        }
    }
    return parseInt(binary_reverse, 2);
})

console.log(reverse(5));
console.log(reverse(12)); 