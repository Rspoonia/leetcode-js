var solveSudoku = function (board) {
  if (!board || !board.length) return;
  Result(board);
  return board
};
const Result = (board) => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === ".") {
        for (let c = 1; c <= 9; c++) {
          if (isValid(board, i, j, c.toString())) {
            board[i][j] = c.toString();
            if (Result(board)) return true;
             else board[i][j] = "."
          }
        }
        return false;
      }
    }
  } 
  return true;
};

const isValid = (board, row, col, num) => {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === num || board[i][col] === num) return false;
  }
  // for check box
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === num) return false;
    }
  }
  return true;
};

const board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
console.log(solveSudoku(board))

// Nehaarora95210