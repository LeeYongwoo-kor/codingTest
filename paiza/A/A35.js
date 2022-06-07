process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let scoreArr = [];

reader.on("line", (line) => {
  if (lines.length === 0) {
    lines.push(line);
    return;
  }

  scoreArr.push(Number(line));
});
reader.on("close", () => {
  const sortScoreArr = scoreArr
    .filter((score) => score <= 50)
    .sort((a, b) => a - b);

  const resultSet = new Set([...sortScoreArr]);

  for (let i = 0; i < sortScoreArr.length; i++) {
    for (let j = i + 1; j < sortScoreArr.length; j++) {
      let sum = sortScoreArr[i];
      for (let k = j; k < sortScoreArr.length; k++) {
        sum += sortScoreArr[k];
        if (sum > 50) break;
        resultSet.add(sum);
      }
    }
  }

  resultSet.add(0);

  const scoreMapper = [
    ...[...resultSet].reduce((acc, score) => {
      if (score === 50) return [...(acc || [])];
      return [...(acc || []), 100 - score];
    }, []),
    ...resultSet,
  ].sort((a, b) => a - b);

  console.log(scoreMapper.length);
  scoreMapper.forEach((print) => {
    console.log(print);
  });
});
