let board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

var isValidSudoku = function (board) {
  let rows = Array.from({ length: 9 }, () => new Set());
  let columns = Array.from({ length: 9 }, () => new Set());
  let squares = Array.from({ length: 9 }, () => new Set());

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      }

      let val = board[r][c];
      let index = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if (rows[r].has(val) || columns[c].has(val) || squares[index].has(val)) {
        return false;
      }

      rows[r].add(val);
      columns[c].add(val);
      squares[index].add(val);
    }
  }

  return true;
};
