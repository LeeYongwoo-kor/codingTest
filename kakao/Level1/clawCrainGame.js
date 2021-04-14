let basket = [];

function solution(board, moves) {
  let answer = 0;
  while (moves.length !== 0) {
    let target = moves.shift() - 1;
    for (let i = 0; i < board.length; i++) {
      if (board[i][target] !== 0) {
        basket.push(board[i][target]);
        board[i][target] = 0;
        break;
      }
    }
    if (basket.length > 1) {
      if (basket[basket.length - 1] === basket[basket.length - 2]) {
        basket.pop();
        basket.pop();
        answer += 2;
      }
    }
  }
  return answer;
}

const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));
