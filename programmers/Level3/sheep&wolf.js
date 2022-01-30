// hold
function solution(info, edges) {
  var answer = 0;
  const sheepWolfInfo = info.map((value) => (value === 0 ? 1 : -1));
  const maxSheep = Array(info.length).fill(0);
  const lastNode = [];

  const dfs = ([x, y]) => {};
  const node = edges.reduce((acc, [num, next]) => {
    const item = acc[num] || [];
    acc[num] = [...item, next].sort((a, b) => a - b);
    return { ...acc };
  }, {});

  const searchLastNode = (num, sheep = 0) => {
    let currSheep = sheep;

    if (!node[num]) {
      if (sheepWolfInfo[num] === -1) return sheep;
      return sheep + 1;
    } else {
      for (const root of node[num]) {
        if (currSheep + sheepWolfInfo[num] <= 0) continue;
        currSheep = searchLastNode(root, sheep + sheepWolfInfo[num]);
      }
    }
    return sheep < currSheep ? currSheep : sheep;
  };

  answer = searchLastNode(0);

  return answer;
}

console.log(
  solution(
    [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
    [
      [0, 1],
      [1, 2],
      [1, 4],
      [0, 8],
      [8, 7],
      [9, 10],
      [9, 11],
      [4, 3],
      [6, 5],
      [4, 6],
      [8, 9],
    ]
  )
);

console.log(
  solution(
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0],
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
      [3, 7],
      [4, 8],
      [6, 9],
      [9, 10],
    ]
  )
);
