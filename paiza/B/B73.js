process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let bulbArr = [];
let targetArr = [];
let treeCount = 0;
let safeBulb = 0;
let targetCount = 0;

const calAverage = (bulbArr, target) => {
  let targetTree = bulbArr.slice(target[0], target[1]);
  let sumBulb = targetTree.reduce((sum, curr) => sum + curr);
  let averageBulb = sumBulb / targetTree.length;
  return Number(safeBulb - Math.floor(averageBulb));
};

reader.on("line", (line) => {
  const split = line.split(" ").map((item) => Number(item));
  if (lines.length === 0) {
    treeCount = split[0];
    safeBulb = split[1];
    lines.push([treeCount, safeBulb]);
  } else if (lines.length === 1) {
    if (treeCount === split.length) {
      bulbArr.push(...split);
      lines.push(split);
    }
  } else if (lines.length === 2) {
    targetCount = Number(line);
    lines.push(targetCount);
  } else {
    if (!bulbArr.length || targetCount <= targetArr.length) {
      return;
    }
    let target = [split[0] - 1, split[1]];
    let lackBulb = calAverage(bulbArr, target);
    if (lackBulb > 0) {
      bulbArr = bulbArr.map((value, index) => {
        if (index < target[0] || index >= target[1]) {
          return value;
        }
        return value + lackBulb;
      });
    }
    targetArr.push(target);
  }
});
reader.on("close", () => {
  console.log(...bulbArr);
});
