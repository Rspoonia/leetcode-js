const zigzagConverse = (s, numRows) => {
    if(numRows === 1 || s.length < numRows) return s
    let arr = [], currentRow = 0, reverse = false, res = ''
    for(let i = 0; i<numRows; i++) {
        arr[i]  = []
    }
    for (let i = 0; i < s.length; i++) {
        arr[currentRow].push(s[i])
        if(reverse) currentRow--
        else currentRow++
        if(currentRow === 0 || currentRow === numRows-1) reverse = !reverse
    }
    arr.forEach(word => res += word.join(''))
    return res
}

const str = 'PAYPALISHIRING'
console.log(zigzagConverse(str, 3))