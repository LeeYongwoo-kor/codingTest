process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let winningNumber = [];
let lotteryCount = 0;
let lotterySave = [];
let lottery = [];

const checkNumber = (winningNumber, lottery) => {
  for (let i = 0; i < lottery.length; i++) {
    let count = 0;
    for (let j = 0; j < 6; j++) {
      for (let k = 0; k < 6; k++) {
        if (lottery[i][k] == winningNumber[j]) {
          count++;
        }
      }
    }
    console.log(count);
  }
};

reader.on("line", (line) => {
  if (lines.length === 0) {
    winningNumber = line.split(" ");
    lines.push(winningNumber);
  } else if (lines.length === 1) {
    lotteryCount = Number(line);
    lines.push(lotteryCount);
  } else {
    if (lotteryCount <= lottery.length) {
      return;
    } else {
      lotterySave = line.split(" ");
      lottery.push(lotterySave);
    }
  }
});
reader.on("close", () => {
  checkNumber(winningNumber, lottery);
});
