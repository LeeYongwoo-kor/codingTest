process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let position = {};
let x_axis = 0;
let y_axis = 0;
let orderCount = 0;
let orderArr = [];

const move = (direction, distance, position) => {
  switch (direction) {
    case "U":
      position.y += distance;
      break;
    case "D":
      position.y -= distance;
      break;
    case "R":
      position.x += distance;
      break;
    case "L":
      position.x -= distance;
      break;
    default:
      return;
  }
  position.x = currentPosition(position.x, x_axis);
  position.y = currentPosition(position.y, y_axis);
  return position;
};

const currentPosition = (value, axis) => {
  if (value < 0) {
    value += axis;
  } else if (value >= axis) {
    value -= axis;
  }
  return value;
};

reader.on("line", (line) => {
  const split = line.split(" ");
  if (lines.length === 0) {
    x_axis = Number(split[0]);
    y_axis = Number(split[1]);
    orderCount = Number(split[2]);
    lines.push(split);
  } else if (lines.length === 1) {
    if (Number(split[0]) >= x_axis || Number(split[0]) < 0) {
      return;
    }
    if (Number(split[1]) >= y_axis || Number(split[1]) < 0) {
      return;
    }
    position.x = Number(split[0]);
    position.y = Number(split[1]);
    lines.push(split);
  } else {
    if (orderCount <= orderArr.length) {
      return;
    }
    position = move(split[0], Number(split[1]), position);
    orderArr.push(position);
  }
});
reader.on("close", () => {
  console.log(Object.values(position).join(" "));
});
