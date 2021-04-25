process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let frameCount = 0;
let pinCount = 0;
let throwCount = 0;

function Frame(scoreBoard = [], score = 0) {
  this.scoreBoard = scoreBoard;
  this.score = score;
}

Frame.prototype.strike = function () {
  if (this.scoreBoard[0] === pinCount) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.spare = function () {
  if (this.scoreBoard.length >= 3) {
    // Last Frame
    if (this.scoreBoard[1] === pinCount) {
      return true;
    } else {
      return false;
    }
  } else {
    if (this.scoreBoard[0] === pinCount) {
      return false;
    }
    let sum = this.scoreBoard[0] + (this.scoreBoard[1] || 0);
    if (sum === pinCount) {
      return true;
    } else {
      return false;
    }
  }
};

const frameDivision = (arr) => {
  let tmp = [];
  let arrCopy = arr.slice();
  let len = arr.length;
  let count = frameCount;

  for (let i = 0; i < len; i++) {
    if (count === 1) {
      tmp.push(arr);
      break;
    }
    if (arrCopy[i] === pinCount) {
      tmp.push(arr.splice(0, 1));
      count--;
    } else {
      tmp.push(arr.splice(0, 2));
      count--;
      i++;
    }
  }

  return tmp;
};

reader.on("line", (line) => {
  const splits = line.split(" ").map((item) => Number(item) || item);
  if (lines.length === 0) {
    frameCount = splits[0];
    pinCount = splits[1];
    throwCount = splits[2];
    lines.push(line);
  } else {
    if (throwCount !== splits.length) return;
    const throwArr = splits.map((value) => (value === "G" ? 0 : value));
    const gameBoard = frameDivision(throwArr).reduce((acc, curr) => {
      return [...(acc || []), new Frame(curr)];
    }, []);

    gameBoard.forEach((game, idx, board) => {
      let score = game.scoreBoard.reduce((a, b) => a + b);
      if (idx === frameCount - 1) {
        // Last Frame
        let bonusgame = game.scoreBoard[game.scoreBoard.length - 1];
        if (game.strike() && game.spare()) {
          score = game.scoreBoard[0] + game.scoreBoard[1] * 2 + bonusgame * 3;
        } else if (game.strike()) {
          score = game.scoreBoard[0] + game.scoreBoard[1] * 2 + bonusgame * 2;
        } else if (game.spare()) {
          score += bonusgame;
        }
      } else {
        if (game.strike()) {
          if (board[idx + 1].strike()) {
            score +=
              pinCount +
              (board[idx + 2].scoreBoard[0] || board[idx + 1].scoreBoard[1]);
          } else {
            score +=
              board[idx + 1].scoreBoard[0] + board[idx + 1].scoreBoard[1];
          }
        } else if (game.spare()) {
          score += board[idx + 1].scoreBoard[0];
        }
      }
      game.score = score;
    });

    let total = 0;
    for (let board of gameBoard) {
      total += board.score;
    }

    lines.push(total);
  }
});
reader.on("close", () => {
  console.log(lines[1]);
});
