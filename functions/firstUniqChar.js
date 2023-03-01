var firstUniqChar = function(s) {
    for(let i = 0; i<s.length; i++) {
        const str = s.slice(0, i) + s.slice(i+1)
        if(str.indexOf(s[i]) < 0) return i
    }
    return -1 
};

console.log(firstUniqChar('leet'))