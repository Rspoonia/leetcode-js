var letterCombinations = function(digits) {
    const letters = {1: '', 2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl', 6: 'mno', 7:'pqrs',8: 'tuv', 9:'wxyz', 0: '' }
    let length = digits.length, res = []
    if(!length) return res
    const bfs = (position, str) => {
        if(position === length) res.push(str)
        else {
            let ltr = letters[digits[position]]
            for(let i = 0; i < ltr.length; i++) bfs(position+1, str+ltr[i])
        }
    }
    bfs(0, "")
    return res
};

letterCombinations("24")