process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const direction = [-1, 1, 1, -1];
const move_types = ["L", "R", "U", "D"];

let width = 0,
  height = 0;

let x = 0,
  y = 0;

reader.on("line", (line) => {
  const splits = line.split(" ").map((item) => Number(item) || item);
  if (lines.length === 0) {
    width = splits[0];
    height = splits[1];

    lines.push(line);
  } else if (lines.length === 1) {
    x = splits[0];
    y = splits[1];
    lines.push(line);
  } else {
    let nx = x,
      ny = y;
    for (let i = 0; i < move_types.length; i++) {
      if (splits[0] === move_types[i]) {
        if (splits[0] === "L" || splits[0] === "R") {
          nx = x + splits[1] * direction[i];
        }
        if (splits[0] === "U" || splits[0] === "D") {
          ny = y + splits[1] * direction[i];
        }
      }
    }

    if (nx < 0) {
      x = (nx % width) + width;
    } else if (nx > width - 1) {
      x = nx % width;
    } else if (ny < 0) {
      y = (ny % height) + height;
    } else if (ny > height - 1) {
      y = ny % height;
    } else {
      x = nx;
      y = ny;
    }
  }
});
reader.on("close", () => {
  console.log(x, y);
});
