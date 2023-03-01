var strStr = function(haystack, needle) {
    let index = -1
    for(let i = 0; i< haystack.length; i++) {
        if(haystack[i] === needle[0]) {
           if (haystack.substring(i, needle.length+i) === needle) return i
        }
    }
     return index
 };

 console.log(strStr("sadbutsad", "sad"))