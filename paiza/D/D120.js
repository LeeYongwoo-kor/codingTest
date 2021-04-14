// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  line = 100 + line * 10;
  lines.push(line);
});
reader.on("close", () => {
  console.log(lines[0]);
});
