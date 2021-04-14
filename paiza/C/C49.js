process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let elevator = 1;
let move = 0;
let totalMove = [];

const totalMoveSum = (totalMove) =>
  totalMove.reduce((acc, value) => acc + value);
reader.on("line", (line) => {
  line = Number(line);
  move = Math.abs(line - elevator);
  elevator = line;
  totalMove.push(move);
});

reader.on("close", () => {
  console.log(totalMoveSum(totalMove));
});
