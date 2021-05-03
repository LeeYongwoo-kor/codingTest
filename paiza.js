// *********************** PAIZA ONLY ************************
var lines = [];

let date = 0;
let init = 0;
let limit = 0;
let cases = 0;
let dietFailArr = [];

const line = (line) => {
  const splits = line.split(" ").map((item) => Number(item));
  if (lines.length === 0) {
    date = splits[0];
    init = splits[1];
    limit = splits[2];
    lines.push(line);
  } else {
    if (dietFailArr.length <= date) {
      dietFailArr.push([splits[0] * -1, splits[1]]);
    }
  }
};

const close = () => {
  for (let i = 0; i < Math.pow(2, date) - 1; i++) {
    let currentWeight = init;
    const casesArr = Array.from(i.toString(2).padStart(date, 0)).map((item) =>
      Number(item)
    );
    for (let j = 0; j < date; j++) {
      currentWeight += dietFailArr[j][casesArr[j]];
      if (currentWeight > limit) break;
      if (j === date - 1) cases++;
    }
  }
  console.log(cases);
};

window.onload = () => {
  line("8 300 400");
  line("9 39");
  line("48 38");
  line("21 10");
  line("14 45");
  line("32 20");
  line("32 48");
  line("9 7");
  line("19 16");
  close();
};
