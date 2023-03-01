var longestPalindrome = function(s) {
    const expandAroundCentre = (leftIndx, rightIndx) => {
        while (leftIndx >= 0 && rightIndx < s.length) {
            if(s[leftIndx] !== s[rightIndx]) break
            leftIndx--
            rightIndx++
        }
        return [leftIndx+1, rightIndx]
    }
    let currentLongest = [0, 1]
    for (let i = 1; i < s.length; i++) {
        const odd = expandAroundCentre(i-1, i)
        const even = expandAroundCentre(i-1, i+1)
        const longest = odd[1] - odd[0] < even[1] - even[0] ? even : odd
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest
    }
    return s.slice(currentLongest[0], currentLongest[1])
};

const s = "ababa"

console.log(longestPalindrome(s))