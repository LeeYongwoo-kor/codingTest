process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let border = "";
reader.on("line", (line) => {
  const length = line.length + 2;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < length; j++) {
      if (i == 1) {
        border = "+" + line + "+";
      } else {
        border = border + "+";
      }
    }
    lines.push(border);
    border = "";
  }
});
reader.on("close", () => {
  for (let line of lines) {
    console.log(line);
  }
});
