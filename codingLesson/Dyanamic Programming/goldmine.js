// 금광 -> 채굴자가 얻을 수 있는 최대크기
let count = 0,
  n = 0,
  m = 0;
let arr = [],
  dp = [];

function solution(input) {
  const splits = input.split(" ").map((item) => Number(item));

  if (splits.length === 1) {
    count = 2;
    return "";
  } else if (splits.length === 2) {
    n = splits[0];
    m = splits[1];
    return "";
  } else {
    arr = Array.from(Array(n), () => new Array(m));
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        arr[i][j] = splits.shift();
        if (splits.length === 0) break;
      }
    }
  }

  dp = arr;

  for (let j = 1; j < m; j++) {
    for (let i = 0; i < n; i++) {
      let leftUp, leftDown, left;

      if (i === 0) {
        leftUp = 0;
      } else {
        leftUp = dp[i - 1][j - 1];
      }

      if (i === n - 1) {
        leftDown = 0;
      } else {
        leftDown = dp[i + 1][j - 1];
      }

      left = dp[i][j - 1];
      dp[i][j] = dp[i][j] + Math.max(leftUp, Math.max(leftDown, left));
    }
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    result = Math.max(result, dp[i][m - 1]);
  }

  return result;
}

const input = [
  "2",
  "3 4",
  "1 3 3 2 2 1 4 1 0 6 4 7",
  "4 4",
  "1 3 1 5 2 2 4 1 5 0 2 3 0 6 1 2",
];

for (const line of input) {
  console.log(solution(line));
}
