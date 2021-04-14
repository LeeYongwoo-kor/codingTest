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
  let pocketPage = Math.floor(cardNumber / (binderPocket * 2));
  if (cardNumber % binderPocket === 0) {
    pocketPage += -1;
  }
  let pocketNumberArr = Array.from(
    { length: binderPocket * 2 },
    (_, index) => index + 1 + pocketPage * binderPocket * 2
  ).reverse();
  let pocketObj = pocketNumberArr.reduce(
    (acc, curr, index) => ({
      ...acc,
      [index + 1 + pocketPage * binderPocket * 2]: curr,
    }),
    {}
  );
  return pocketObj[cardNumber];
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
