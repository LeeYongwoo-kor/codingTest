// *********************** PAIZA ONLY ************************
var lines = [];

let width = 0;
let height = 0;
let savePoint = 0;

let saveMap = [];
let position = [];

let startX = 0;
let startY = 0;

let result = [];
let printValue = [];

const line = (line) => {
  let splits = line.split(" ").map((item) => Number(item));
  if (lines.length === 0) {
    width = splits[0];
    height = splits[1];
    savePoint = splits[2];
    lines.push([width, height, savePoint]);
  } else {
    let thisRow = line.replace(/#/g, 0);
    saveMap.push(thisRow);
  }
};

const close = () => {
  const map = saveMap.reduce((result, row) => {
    let thisRow = Array.from(row).map((item) =>
      item === "0" ? 0 : Number(item) || item
    );
    return [...(result || []), thisRow];
  }, []);

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] !== 0) {
        if (map[i][j] === "N") {
          startX = i;
          startY = j;
          continue;
        }
        position.push([map[i][j], i, j]);
      }
    }
  }
  position.sort();

  for (const thisPos of position) {
    let nx = Math.abs(thisPos[1] - startX);
    let ny = Math.abs(thisPos[2] - startY);
    result.push(nx + ny);
  }

  const count = result.reduce((acc, curr, idx) => {
    let min = Math.min(...result);
    if (curr === min) {
      printValue.push(idx + 1);
      return (acc += 1);
    }
    return acc;
  }, 0);
  printValue.unshift(count);

  for (const res of printValue) {
    console.log(res);
  }
};

window.onload = () => {
  line("5 7 5");
  line("#######");
  line("#####4#");
  line("##1#N##");
  line("#2#3###");
  line("######5");
  close();
};
