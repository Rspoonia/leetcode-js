var isValidSudoku = function(board) { 
    let set  = new Set()
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
         const val = board[i][j]
         if(val !== ".") {
            const row = `${val} at row ${i}`
            const column = `${val} at column ${j}`
            const box = `${val} at box ${Math.floor(i/3)}, ${Math.floor(j/3)}`
            if(set.has(row) || set.has(column) || set.has(box)) return false
            else {
                set.add(row)
                set.add(column)
                set.add(box)
            }
         }
        }
    }
    return true
};

const arr  = [[".",".","4",".",".",".","6","3","."],[".",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".","9","."],[".",".",".","5","6",".",".",".","."],["4",".","3",".",".",".",".",".","1"],[".",".",".","7",".",".",".",".","."],[".",".",".","5",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]
console.log(isValidSudoku(arr))