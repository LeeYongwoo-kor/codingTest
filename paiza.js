// *********************** PAIZA ONLY ************************
var lines = [];

let scoreArr = [];

const line = (line) => {
  if (lines.length === 0) {
    lines.push(line);
    return;
  }

  scoreArr.push(Number(line));
};

const close = () => {
  const sortScoreArr = scoreArr
    .filter((score) => score <= 50)
    .sort((a, b) => a - b);

  const delDupScoreArr = [...sortScoreArr];
  const resultSet = new Set([...sortScoreArr]);

  // if (sortScoreArr.length !== delDupScoreArr.length) {
  //   const duplicateCheck = sortScoreArr.reduce((acc, curr) => {
  //     acc.set(curr, (acc.get(curr) || 0) + 1);
  //     return acc;
  //   }, new Map());

  //   for (const [key, value] of duplicateCheck.entries()) {
  //     if (value === 1) continue;
  //     for (let i = 2; i <= value; i++) {
  //       if (key * i > 50) {
  //         break;
  //       }
  //       resultSet.add(key * i);
  //     }
  //   }
  // }

  for (let i = 0; i < delDupScoreArr.length; i++) {
    for (let j = i + 1; j < delDupScoreArr.length; j++) {
      let sum = delDupScoreArr[i];
      for (let k = j; k < delDupScoreArr.length; k++) {
        sum += delDupScoreArr[k];
        if (sum > 50) break;
        resultSet.add(sum);
      }
    }
  }

  resultSet.add(0);

  const scoreMapper = [
    ...[...resultSet].reduce((acc, score) => {
      if (score === 50) return [...(acc || [])];
      return [...(acc || []), 100 - score];
    }, []),
    ...resultSet,
  ].sort((a, b) => a - b);

  console.log(scoreMapper.length);
  scoreMapper.forEach((print) => {
    console.log(print);
  });
};

window.onload = () => {
  // line("4");
  // line("6");
  // line("14");
  // line("25");
  // line("55");
  // line("4");
  // line("25");
  // line("25");
  // line("25");
  // line("25");
  // line("13");
  line("9");
  line("9");
  line("9");
  line("9");
  line("10");
  line("10");
  line("10");
  line("10");
  line("4");
  line("4");
  line("4");
  line("4");
  line("8");
  //
  // line("2");
  // line("49");
  // line("51");
  //
  // line("14");
  // line("1");
  // line("2");
  // line("3");
  // line("4");
  // line("5");
  // line("6");
  // line("7");
  // line("8");
  // line("9");
  // line("10");
  // line("10");
  // line("11");
  // line("12");
  // line("12");
  close();
};
