var generateParenthesis = function(n) {
    let res = []
    const generate = (s, open, close) => {
        if(open === n && close === n) {
            res.push(s)
            return
        }
        if(open < n) generate(s+"(", open+1, close)
        if(close < open) generate(s+")", open, close+1)
    }
    generate("", 0, 0 )
    return res
};

console.log(generateParenthesis(3))