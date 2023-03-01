var isPalindrome = function(s) {
    const isValid = str => str.toLowerCase() >='a' && str.toLowerCase() <= 'z' || parseInt(str) >=0 && parseInt(str)<=9
    let m = 0, n = s.length - 1
     while (m < n) {
        const a = isValid(s[m])
        const b = isValid(s[n]) 
        if(!a) m++
        else if(!b) n--
        else if(s[n].toLowerCase() !== s[m].toLowerCase()) return false
       else { 
        m++
        n--}

      }
      return true
};

console.log(isPalindrome("P0"));