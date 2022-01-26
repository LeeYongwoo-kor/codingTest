const destroyBlock = (target) => {
  const origin = target.map((v) => v.slice());
  for (let i = 0; i < origin.length - 1; i++) {
    for (let j = 0; j < origin[0].length - 1; j++) {
      if (!origin[i][j]) continue;
      if (
        origin[i][j] === origin[i][j + 1] &&
        origin[i][j] === origin[i + 1][j] &&
        origin[i][j] === origin[i + 1][j + 1]
      ) {
        target[i][j] = 1;
        target[i][j + 1] = 1;
        target[i + 1][j] = 1;
        target[i + 1][j + 1] = 1;
      }
    }
  }
  return target;
};

const transpose = (target) =>
  target.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const relocation = (target) => {
  const changeArr = transpose(target);
  const relocationArr = changeArr.reduce((result, row) => {
    return [
      ...(result || []),
      row.reduce((acc, curr) => {
        if (curr === 1) return [0, ...(acc || [])];
        return [...(acc || []), curr];
      }, []),
    ];
  }, []);
  return transpose(relocationArr);
};

function solution(m, n, board) {
  var answer = 0;
  let changed = 0;

  let game = board.reduce((acc, block) => {
    return [...(acc || []), Array.from(block)];
  }, []);

  do {
    changed = 0;
    const destroy = destroyBlock(game);
    changed = destroy.reduce((acc, curr) => {
      return (acc += curr.filter((v) => v === 1).length);
    }, 0);
    game = relocation(game);
    answer += changed;
  } while (changed > 0);

  return answer;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"]));
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
);
console.log(solution(7, 2, ["AA", "BB", "AA", "BB", "ZZ", "ZZ", "CC"]));
console.log(
  solution(6, 6, ["IIIIOO", "IIIOOO", "IIIOOI", "IOOIII", "OOOIII", "OOIIII"])
);
console.log(solution(5, 6, ["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]));
