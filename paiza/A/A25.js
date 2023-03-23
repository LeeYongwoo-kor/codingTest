process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const a = [];
const b = [];

reader.on("line", (line) => {
  const splits = line.split(" ").map((item) => Number(item));

  if (lines.length === 0) {
    lines.push(splits[0], splits[1], splits[2]);
  } else {
    a.push(splits[0]);
    b.push(splits[1]);
  }
});

reader.on("close", () => {
  const countWays = (n, s, t, a, b) => {
    const dp = Array.from({ length: n + 1 }, () => new Map());

    function helper(day, weight) {
      if (day === n) {
        return 1;
      }

      if (weight > t) {
        return 0;
      }

      if (dp[day].has(weight)) {
        return dp[day].get(weight);
      }

      let ways = 0;

      // Diet
      if (weight - a[day] <= t) {
        ways += helper(day + 1, weight - a[day]);
      }

      // No diet
      if (weight + b[day] <= t) {
        ways += helper(day + 1, weight + b[day]);
      }

      dp[day].set(weight, ways);
      return ways;
    }

    return helper(0, s);
  };

  const [n, s, t] = lines;
  console.log(countWays(n, s, t, a, b));
});
