process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let counterArr = [];
let counter = 0;
let customer = 0;

const getRequiredTime = (counterArr, customer) => {
  let timeCount = 0;
  while (customer > 0) {
    timeCount++;
    for (let i = 0; i < counterArr.length; i++) {
      let timeup = timeCount % counterArr[i];
      if (timeup === 0) {
        customer -= 1;
        if (customer <= 0) {
          if (timeCount <= Math.max(...counterArr)) {
            timeCount = Math.max(...counterArr);
            break;
          } else {
            break;
          }
        }
      }
    }
  }
  return timeCount;
};

reader.on("line", (line) => {
  let splitWord = line.split(" ");
  if (lines.length === 0) {
    counter = Number(splitWord[0]);
    customer = Number(splitWord[1]);
    lines.push([counter, customer]);
  } else {
    if (counter < counterArr.length) {
      return;
    }
    counterArr.push(Number(line));
  }
});
reader.on("close", () => {
  console.log(getRequiredTime(counterArr, customer));
});
