// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
reader.on("line", (line) => {
  const arr = line.split("");
  arr.forEach((item) => {
    switch (item) {
      case "/":
        sum = sum + 1;
        break;
      case "<":
        sum = sum + 10;
        break;
      default:
        break;
    }
  });
  lines.push(sum);
});
reader.on("close", () => {
  console.log(lines[0]);
});
