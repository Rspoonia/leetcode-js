/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
 var checkValid = function(matrix) {
    const size = matrix.length
    for(let i = 0; i < size; i++) {
        const rowSet = new Set()
        const colSet = new Set()
        for(let j = 0; j < size; j++) {
            const row = matrix[i][j]
            const col = matrix[j][i]
            if(rowSet.has(row) || colSet.has(col)) return false
            rowSet.add(row)
            colSet.add(col)
        }
    }
    return true
};

const arr = [[1,2,3],[3,1,2],[2,3,1]]

console.log(checkValid(arr)) // true