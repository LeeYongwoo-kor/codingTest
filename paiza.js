// *********************** PAIZA ONLY ************************
var lines = [];

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

const line = (line) => {
  if (lines.length === 0) {
    const splits = line.split(" ").map((input) => Number(input));
    height = splits[0];
    width = splits[1];
    lines.push(line);
    return;
  }

  colorTable.push(line.split(""));
};

const close = () => {
  nodeTable = Array(height)
    .fill(0)
    .map(() => Array(width).fill(0));

  const visit = (x, y, color) => {
    if (x <= -1 || x >= height || y <= -1 || y >= width) {
      return false;
    }

    if (nodeTable[x][y] === 0 && colorTable[x][y] === color) {
      nodeTable[x][y] = colorHash[color];
      visit(x - 1, y, color);
      visit(x, y - 1, color);
      visit(x + 1, y, color);
      visit(x, y + 1, color);
      return true;
    }

    return false;
  };

  for (let i = 0; i < colorTable.length; i++) {
    for (let j = 0; j < colorTable[i].length; j++) {
      if (nodeTable[i][j] !== 0) continue;
      if (visit(i, j, colorTable[i][j])) rgb[colorHash[colorTable[i][j]]]++;
    }
  }

  console.log(`${rgb[1]} ${rgb[2]} ${rgb[3]}`);
};

window.onload = () => {
  line("8 5");
  line("RRRGG");
  line("RRRGG");
  line("RRBBB");
  line("RRBBG");
  line("RRBBG");
  line("BBBBB");
  line("GGGGG");
  line("RRBBG"); // result: 2 3 2
  // line("3 2");
  // line("RG");
  // line("GB");
  // line("BR");
  close();
};
