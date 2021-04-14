// 상하좌우 좌표문제
function solution(n, direction) {
  let x = 1,
    y = 1;

  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const move_types = ["L", "R", "U", "D"];

  const dArr = Array.from(direction.replace(/(\s*)/g, ""));

  for (const direction of dArr) {
    let nx = 0,
      ny = 0;
    for (let i = 0; i < move_types.length; i++) {
      if (direction === move_types[i]) {
        nx = x + dx[i];
        ny = y + dy[i];
      }
    }
    if (nx < 1 || ny < 1 || nx > n || ny > n) continue;
    x = nx;
    y = ny;
  }

  return console.log(x, y);
}

const n = 5;
const direction = "R R R U D D";

solution(n, direction);
