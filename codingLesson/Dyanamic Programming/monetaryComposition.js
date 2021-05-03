// 효율적인 화폐구성
function solution(input) {
  const splits = input[0].split(" ").map((item) => Number(item));
  const n = splits[0];
  const m = splits[1];

  let unit = [];
  for (let i = 1; i < input.length; i++) {
    unit.push(Number(input[i]));
  }

  let d = new Array(m + 1).fill(10001);
  d[0] = 0;

  for (let bill of unit) {
    for (let i = bill; i <= m; i++) {
      if (d[i - bill] !== 10001) {
        d[i] = Math.min(d[i], d[i - bill] + 1);
      }
    }
  }

  if (d[m] === 10001) {
    return -1;
  } else {
    return d[m];
  }
}

const input = ["3 7", "2", "3", "5"];

console.log(solution(input));
