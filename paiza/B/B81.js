process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let row = 0;
let column = 0;
let pot = [];
let rope = 0;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

reader.on("line", (line) => {
  let splits = line.split(" ");
  if (lines.length === 0) {
    row = Number(splits[0]);
    column = Number(splits[1]);
    lines.push([row, column]);
  } else {
    let thisRow = line.replace(/#/g, 1).replace(/\./g, 0);
    pot.push(thisRow);
  }
});
reader.on("close", () => {
  const flowerpot = pot.reduce((result, row) => {
    let thisRow = Array.from(row).map((item) => Number(item));
    return [...(result || []), thisRow];
  }, []);

  const bfs = (x, y) => {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= row || ny < 0 || ny >= column) {
        count++;
        continue;
      }
      if (flowerpot[nx][ny] !== 0) continue;
      if (flowerpot[nx][ny] === 0) count++;
    }
    return count;
  };

  for (let i = 0; i < flowerpot.length; i++) {
    for (let j = 0; j < flowerpot[i].length; j++) {
      if (flowerpot[i][j] === 0) continue;
      if (flowerpot[i][j] !== 0) rope += bfs(i, j);
    }
  }

  console.log(rope);
});
