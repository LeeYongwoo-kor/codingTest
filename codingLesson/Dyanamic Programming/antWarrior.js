// 개미 전사 -> dp테이블을 이용할 것
function solution(input) {
  const n = Number(input[0]);
  const warehouse = input[1].split(" ").map((item) => Number(item));
  let dp = new Array(100);

  dp[0] = warehouse[0];
  dp[1] = Math.max(warehouse[0], warehouse[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + warehouse[i]);
  }

  return dp[n - 1];
}

const n = ["5", "1 3 1 5 8"];

console.log(solution(n));
