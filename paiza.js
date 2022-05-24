// *********************** PAIZA ONLY ************************
var lines = [];

let table = [];
let kinds = 0;
let count = 0;

let answer = 1;

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const hasDuplicates = (keyword) => new Set(keyword).size !== keyword.length;

const combination = (list, num) => {
  let result = [];
  if (num === 1) return list.map((e) => [e]);

  list.forEach((el, idx, arr) => {
    let rest = arr.slice(idx + 1);
    let combinations = combination(rest, num - 1);
    let combiArr = combinations.map((x) => [el, ...x]);
    result.push(...combiArr);
  });
  return result;
};

const line = (line) => {
  if (lines.length === 0) {
    const splits = line.split(" ").map((input) => Number(input));
    count = splits[0];
    kinds = splits[1];
    lines.push(line);
  }

  while (table.length < count) {
    const splits = line.split(" ").map((input) => Number(input));
    table.push(splits);
  }

  const list = transpose(table);

  const checkMinValue = () => {
    for (let i = 1; i < kinds; i++) {
      if (i ** 2 >= count) {
        return i;
      }
    }
    return kinds;
  };

  const minValue = checkMinValue();

  for (let i = minValue; i < kinds; i++) {
    const checkIdx = combination(
      Array.from({ length: kinds }, (_, idx) => idx),
      i
    );

    const checkArr = list.filter((_, idx) => {
      for (let j of checkIdx) {
        if (idx === j) return idx;
      }
    });

    checkIdx.forEach((item) => {
      transpose();
    });
  }
};

const close = () => {
  console.log(line);
};

window.onload = () => {
  line("10 6");
  line("1 1 1 0 1 1");
  line("1 0 1 1 0 1");
  line("0 0 0 1 1 1");
  line("0 1 1 0 0 0");
  line("1 1 1 1 1 0");
  line("1 0 0 0 0 1");
  line("1 1 0 1 0 1");
  line("0 1 0 0 0 0");
  line("1 1 0 0 1 1");
  line("1 0 1 1 1 0");
  close();
};
