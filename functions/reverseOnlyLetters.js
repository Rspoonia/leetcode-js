var reverseOnlyLetters = function(s) {
    let start = 0, end = s.length -1 , arr = s.split('')
    const isValidChar = (char) => /[a-zA-Z]/.test(char)
    while(start < end) { 
        if(!isValidChar(arr[start])) start++
        else if(!isValidChar(arr[end])) end--
        else {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }
    return arr.join('')
};
console.log(reverseOnlyLetters('ab-cd-') )

//'\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b'