class Game {
  constructor(reader, completionCallback) {
    this.reader = reader;
    this.completionCallback = completionCallback;
  }




}


class Board {
  constructor() {
    this.board = new Array(3);
    for (var i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(3);
    }
  }

  won(){
    return this.diagsWon() || this.colsWon() || this.rowsWon();
  }

  diagsWon() {
    return this.match(this.board[0][0], this.board[1][1],this.board[2][2]) ||
      this.match(this.board[0][2], this.board[1][1],this.board[2][0]);
  }

  colsWon(){
    for (var i = 0; i < this.board.length; i++) {
      if (this.match(this.board[0][i], this.board[1][i],this.board[2][i])){
        return true;
      }
    }
    return false;
  }

  rowsWon(){
    for (var i = 0; i < this.board.length; i++) {
      if (this.match(this.board[i][0], this.board[i][1],this.board[i][2])){
        return true;
      }
    }
    return false;
  }

  match(a, b, c){
    return a === b && b === c &&
      a !== undefined;
  }

  fillSpace(row, col, sym) {
    if (this.isValid(row,col)){
      this.board[row][col] = sym;
    }
  }

  isValid(row, col) {
    return this.board[row][col] === undefined &&
      row >= 0 && row < this.board.length &&
      col >= 0 && col < this.board.length;
  }

  toString(){
    let toPrint = "";
    for (var i = 0; i < this.board.length; i++) {
      for(var j = 0; j< this.board.length;j++) {
        toPrint += (this.board[i][j]) ?  this.board[i][j] : "_";
      }
      toPrint += "\n";
    }
    return toPrint;
  }
}

let b = new Board();
