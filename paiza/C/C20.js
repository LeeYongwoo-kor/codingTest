process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
const leftover = (m, p) => (m - (m * p) / 100).toFixed(4);
reader.on("line", (line) => {
  const cal = line.split(" ");
  const leftoverFood = leftover(cal[0], cal[1]);
  lines.push(parseFloat(leftover(leftoverFood, cal[2])));
});
reader.on("close", () => {
  console.log(lines[0]);
});
