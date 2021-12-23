const gameBoard = [
  ["O", "", "X"],
  ["O", "X", "X"],
  ["X", "", ""],
];


function checkWinner(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] ) { 
      console.log('LINE WINNER!!');
    } else if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] ) {
        console.log('COLUMN WINNER!!');
    } 
    if (board[i][0] == board[i][1] && board[i][1] == board[i][2] && board[i][0] ) { 
      console.log('LINE WINNER!!');
    } else if (board[0][i] == board[1][i] && board[1][i] == board[2][i] && board[0][i] ) {
        console.log('COLUMN WINNER!!');
    } 
  }
    if (board[0][0] == board[1][1] && board[2][2] == board[1][1] && board[0][0] ) { 
        console.log('DIAGONAL WINNER!!');
    } else if (board[0][2] == board[1][1] && board[2][0] == board[1][1] && board[2][0] ) {
        console.log('DIAGONAL WINNER!!');
    } 
}

checkWinner(gameBoard);
