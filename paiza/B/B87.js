process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let row = 0;
let column = 0;
let numOfChar = 0;
const block = [];

const line = (line) => {
  const splits = line.split(" ").map((item) => Number(item));

  if (lines.length === 0) {
    row = splits[0];
    column = splits[1];
    numOfChar = splits[2];
    lines.push(splits[0]);
  } else {
    block.push(line);
  }
};

const close = () => {
  const board = block.reduce((acc, num) => {
    const digits = num.split("");
    return [...acc, digits];
  }, []);

  let maxNum = 0;

  const sumRow = (i, j) => {
    let sum = "";
    if (j + numOfChar > row) return 0;
    for (let k = 0; k < numOfChar; k++) {
      sum += board[i][j + k];
    }
    return Number(sum);
  };

  const sumColumn = (i, j) => {
    let sum = "";
    if (i + numOfChar > column) return 0;
    for (let k = 0; k < numOfChar; k++) {
      sum += board[i + k][j];
    }
    return Number(sum);
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (maxNum < sumRow(i, j)) {
        maxNum = sumRow(i, j);
      }
      if (maxNum < sumColumn(i, j)) {
        maxNum = sumColumn(i, j);
      }
    }
  }

  console.log(maxNum);
};

window.onload = () => {
  // line("3 3 2");
  // line("156");
  // line("827");
  // line("349");
  line("8 8 5");
  line("64927318");
  line("55235123");
  line("56341393");
  line("62241332");
  line("84723132");
  line("16791453");
  line("29145122");
  line("91356254");
  close();
};
