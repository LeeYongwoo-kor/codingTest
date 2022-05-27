process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let table = [];
let kinds = 0;
let count = 0;

let answer = 1;

const transpose = (matrix, toDecimal = false) => {
  const transposeMatrix = matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

  if (toDecimal) {
    return transposeMatrix.map((item) => {
      const binaryNum = item.join("");
      return parseInt(binaryNum, 2);
    });
  }

  return transposeMatrix;
};

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

reader.on("line", (line) => {
  if (lines.length === 0) {
    const splits = line.split(" ").map((input) => Number(input));
    count = splits[0];
    kinds = splits[1];
    lines.push(line);
    return;
  }

  const splits = line.split(" ").map((input) => Number(input));
  table.push(splits);

  if (table.length < count) {
    return;
  }

  const list = transpose(table);

  const checkMinValue = () => {
    for (let n = 1; n <= kinds; n++) {
      if (2 ** n >= count) {
        return n;
      }
    }
    return kinds;
  };

  const minValue = checkMinValue();

  for (let i = minValue; i < kinds; i++) {
    answer = i;
    const checkIdx = combination(
      Array.from({ length: kinds }, (_, idx) => idx),
      i
    );

    for (const checkIdxItem of checkIdx) {
      const checkArr = list.filter((_, idx) => {
        for (let j of checkIdxItem) {
          if (idx === j) return idx;
        }
      });

      if (!hasDuplicates(transpose(checkArr, true))) {
        return;
      }
    }
  }

  answer = count;
});
reader.on("close", () => {
  console.log(answer);
});
