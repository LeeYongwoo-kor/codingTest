process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let date = 0;
let init = 0;
let limit = 0;
let cases = 0;
let dietFailArr = [];

reader.on("line", (line) => {
  const splits = line.split(" ").map((item) => Number(item));
  if (lines.length === 0) {
    date = splits[0];
    init = splits[1];
    limit = splits[2];
    lines.push(line);
  } else {
    if (dietFailArr.length <= date) {
      dietFailArr.push([splits[0] * -1, splits[1]]);
    }
  }
});
reader.on("close", () => {
  for (let i = 0; i < Math.pow(2, date) - 1; i++) {
    let currentWeight = init;
    const casesArr = Array.from(i.toString(2).padStart(date, 0)).map((item) =>
      Number(item)
    );
    for (let j = 0; j < date; j++) {
      currentWeight += dietFailArr[j][casesArr[j]];
      if (currentWeight > limit) break;
      if (j === date - 1) cases++;
    }
  }
  console.log(cases);
});
