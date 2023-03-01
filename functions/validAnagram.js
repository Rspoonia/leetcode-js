/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) return false
    const obj = {}
    for(let i = 0; i < s.length; i++) {
        if(obj[s[i]]) obj[s[i]] ++
        else obj[s[i]] = 1
        if(obj[t[i]]) obj[t[i]] --
        else obj[t[i]] = -1
    }
    for(let temp in obj) {
        if(obj[temp] !== 0) return false
    }
    return true
};

console.log(isAnagram("anagram", "nagaram"))