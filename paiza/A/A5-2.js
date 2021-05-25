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

let score = [];

reader.on("line", (line) => {
  const splits = line
    .split(" ")
    .map((item) => Number(item) || (item === "G" ? 0 : item));
  if (lines.length === 0) {
    frameCount = splits[0];
    pinCount = splits[1];
    throwCount = splits[2];
    lines.push(line);
  } else if (lines.length === 1) {
    score = splits;
    lines.push(score);
  }
});
reader.on("close", () => {
  let round = 0;
  let cnt = 0;
  const result = score.reduce((acc, curr, idx, scoreArr) => {
    cnt++;
    round += curr;
    if (round === pinCount) {
      round = 0;
      if (cnt === 1) {
        cnt = 0;
        return (acc +=
          curr + (scoreArr[idx + 1] || 0) + (scoreArr[idx + 2] || 0));
      } else {
        cnt = 0;
        return (acc += curr + scoreArr[idx + 1]);
      }
    } else {
      if (cnt === 2) {
        cnt = 0;
        round = 0;
      }
      return (acc += curr);
    }
  }, 0);
  console.log(result);
});
