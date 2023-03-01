var myAtoi = function(s) {
    const res = parseInt(s)
     return res ? res : 0
};

const s = "words and 987"

console.log(myAtoi(s))