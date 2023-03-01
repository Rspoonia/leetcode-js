var findAnagrams = function (s, p) {
//   const pObj = {};
//   const pLen = p.length,
//     sLength = s.length, res = []
//   for (let i = 0; i < pLen; i++) {
//     if (pObj[p[i]]) pObj[p[i]]++;
//     else pObj[p[i]] = 1;
//   }
//   const isValidAnagram = (str) => {
//     const tempObj = {...pObj}
//     for(let i = 0; i < str.length; i++) {
//         if(!tempObj[str[i]]) return false
//         else tempObj[str[i]]--
//     }
//     // for check all values zero
//     for(let word in tempObj) {
//         if(tempObj[word]>0) return false
//     }
//     return true
//   };
//   for (let i = 0; i < sLength; i++) {
//     isValidAnagram(s.substring(i, i+pLen)) ? res.push(i) : ''
//   }
//   return res
const hashMap = new Map()
let res = []
for(let i = 0; i<p.length; i++) {
    if(hashMap.has(p[i])) hashMap.set(p[i], hashMap.get(p[i]) + 1)
    else hashMap.set(p[i], 1)
}
let start = 0, end = 0
while(end < s.length) {
    if(hashMap.get(s[end]) > 0) {
        hashMap.set(s[end], hashMap.get(s[end])-1)
        end++
        if(end-start == p.length) res.push(start)
    }else if(start === end) {
        start++
        end++
    } else {
        hashMap.set(s[start], hashMap.get(s[start]) + 1)
        start++
    }
}
return res
};
let p = "abc", s = "cbaebabacd"
console.log(findAnagrams(s,p));