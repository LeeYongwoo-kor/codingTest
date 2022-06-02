process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let width = 0;
let height = 0;
let rgb = [0, 0, 0, 0];

const colorHash = {
  R: 1,
  G: 2,
  B: 3,
};

const colorTable = [];
let nodeTable = [];
reader.on("line", (line) => {
  if (lines.length === 0) {
    const splits = line.split(" ").map((input) => Number(input));
    height = splits[0];
    width = splits[1];
    lines.push(line);
    return;
  }

  colorTable.push(line.split(""));
});
reader.on("close", () => {
  nodeTable = Array(height)
    .fill(0)
    .map(() => Array(width).fill(0));

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      let isJoin = false;

      if (nodeTable[i][j] === 0) {
        nodeTable[i][j] = colorHash[colorTable[i][j]];
      }

      if (i < height - 1) {
        if (colorTable[i + 1][j] === colorTable[i][j]) {
          nodeTable[i + 1][j] = colorHash[colorTable[i][j]];
          isJoin = true;
        }
      }

      if (j < width - 1) {
        if (colorTable[i][j + 1] === colorTable[i][j]) {
          nodeTable[i][j + 1] = colorHash[colorTable[i][j]];
          isJoin = true;
        }
      }

      if (!isJoin) {
        rgb[colorHash[colorTable[i][j]]]++;
      }
    }
  }

  console.log(`${rgb[1]} ${rgb[2]} ${rgb[3]}`);
});
