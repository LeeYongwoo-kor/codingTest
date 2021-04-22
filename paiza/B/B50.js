process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let voter = 0;
let aggregator = {};

const supporterCounting = (speaker) => {
  if (Object.prototype.hasOwnProperty.call(aggregator, speaker)) {
    if (voter !== 0) {
      voter--;
      aggregator[speaker]++;
    }

    for (const [key, value] of Object.entries(aggregator).filter(
      (item) => item[0] !== String(speaker)
    )) {
      if (value === 0) continue;
      aggregator[speaker]++;
      aggregator[key]--;
    }
  }
};

const getBestCandidate = (obj, value) => {
  return Object.keys(obj)
    .filter((key) => obj[key] === value)
    .sort();
};

reader.on("line", (line) => {
  if (lines.length === 0) {
    const splits = line.split(" ").map((item) => Number(item));
    const candidate = splits[0];
    voter = splits[1];

    for (let i = 1; i <= candidate; i++) {
      aggregator[i] = 0;
    }
    lines.push(line);
  } else {
    supporterCounting(Number(line));
  }
});
reader.on("close", () => {
  let maxValue = Math.max(...Object.values(aggregator));
  let bestCandadate = getBestCandidate(aggregator, maxValue);
  for (let best of bestCandadate) {
    console.log(Number(best));
  }
});
