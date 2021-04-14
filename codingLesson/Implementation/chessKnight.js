// 왕실의 나이트. 나이트가 움직일 수 있는 경로의 경우의 수(방향벡터)
function solution(position) {
  const row = Number(position.indexOf(1));
  const column =
    position.indexOf(0).toLowerCase().charCodeAt(0) -
    String.fromCharCode("a") +
    1;

  const steps = [
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
  ];

  let result = 0;
  for (let step of steps) {
    let next_row = row + step[0];
    let next_column = column + step[1];
    if (
      next_row >= 1 &&
      next_row <= 8 &&
      next_column >= 1 &&
      next_column <= 8
    ) {
      result++;
    }
  }

  return console.log(result);
}

const position = "a1";

solution(position);
