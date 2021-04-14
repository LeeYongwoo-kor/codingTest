process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
reader.on("line", (line) => {
  const numberArr = line.replace(/-/g, "").split("");
  for (let number of numberArr) {
    number = Number(number);
    if (number === 0) {
      number = (number + 12) * 2;
    } else {
      number = (number + 2) * 2;
    }
    sum += number;
  }
  lines.push(sum);
});
reader.on("close", () => {
  console.log(lines[0]);
});
