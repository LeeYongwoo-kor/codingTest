function solution(N, stages) {
  const failureRate = {};
  for (let i = 0; i < N; i++) {
    let clear = stages.filter((value) => value >= i + 1);
    let failed = clear.filter((value) => value === i + 1);
    failureRate[i + 1] = failed.length / clear.length;
  }

  const answer = Object.entries(failureRate)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [key]) => [...r, Number(key)], []);
  return answer;
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));
