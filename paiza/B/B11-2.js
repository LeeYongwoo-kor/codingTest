process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const searchNumber = (binderPocket, cardNumber) => {
  let targetNumber = 0;
  let frontOrBack = Math.ceil(cardNumber / binderPocket);
  let position = cardNumber % binderPocket;
  if (position == 0) {
    position = binderPocket;
  }
  if (frontOrBack % 2 == 0) {
    targetNumber = cardNumber - (position * 2 - 1);
  } else {
    targetNumber = cardNumber + ((binderPocket + 1 - position) * 2 - 1);
  }
  return targetNumber;
};

reader.on("line", (line) => {
  const split = line.split(" ").map((item) => Number(item));
  let binderPocket = split[0];
  let cardNumber = split[1];
  lines.push(searchNumber(binderPocket, cardNumber));
});
reader.on("close", () => {
  console.log(lines[0]);
});
