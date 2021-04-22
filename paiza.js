// *********************** PAIZA ONLY ************************
var lines = [];

let frameCount = 0;
let pinCount = 0;
let throwCount = 0;

function Frame(scoreBoard = []) {
  this.scoreBoard = scoreBoard;
}

Frame.prototype.strike = function () {
  if (this.scoreBoard[0] === pinCount) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.spare = function () {
  if (this.scoreBoard.length < 2) return false;
  let sum = this.scoreBoard[0] + (this.scoreBoard[1] || 0);
  if (sum === pinCount) {
    return true;
  } else {
    return false;
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

const line = (line) => {
  const splits = line.split(" ").map((item) => Number(item) || item);
  if (lines.length === 0) {
    frameCount = splits[0];
    pinCount = splits[1];
    throwCount = splits[2];
    lines.push(line);
  } else {
    const throwArr = splits.map((value) => (value === "G" ? 0 : value));
    const gameBoard = frameDivision(throwArr).reduce((acc, curr) => {
      return [...(acc || []), new Frame(curr)];
    }, []);
    console.log(gameBoard);
  }
};

const close = () => {
  console.log(cases);
};

window.onload = () => {
  line("10 10 18");
  line("3 4 G 1 8 2 6 2 10 2 7 G 10 10 10 9 1 3");
  close();
};
