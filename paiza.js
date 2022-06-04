// *********************** PAIZA ONLY ************************
var lines = [];

let scoreArr = [];
let enumerateScoreList = [];

const combination = (list, num) => {
  let result = [];
  if (num === 1) return list.map((item) => [item]);

  list.forEach((item, idx, arr) => {
    let rest = arr.slice(idx + 1);
    let combinations = combination(rest, num - 1);
    let enumerated = combinations.map((x) => [item, ...x]);
    result.push(...enumerated);
  });

  return result;
};

const line = (line) => {
  if (lines.length === 0) {
    lines.push(line);
    return;
  }

  scoreArr.push(Number(line));
};

const close = () => {
  scoreArr.forEach((item, idx) => {
    const combinationResult = combination(scoreArr, idx + 1);
    const sumResult = combinationResult.reduce((acc, curr) => {
      const sum = curr.reduce((a, b) => a + b);
      return [...(acc || []), sum];
    }, []);
    enumerateScoreList = [...new Set([...enumerateScoreList, ...sumResult])];
  });

  enumerateScoreList = [0, ...enumerateScoreList].sort((a, b) => a - b);

  console.log(enumerateScoreList.length);
  enumerateScoreList.forEach((result) => {
    console.log(result);
  });
};

window.onload = () => {
  // line("4");
  // line("6");
  // line("14");
  // line("25");
  // line("55");
  line("4");
  line("25");
  line("25");
  line("25");
  line("25");
  close();
};
