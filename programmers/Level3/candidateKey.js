function combination(list, num) {
  let result = [];
  if (num === 1) return list.map((e) => [e]);

  list.forEach((val, idx, arr) => {
    let rest = arr.slice(idx + 1);
    let combinations = combination(rest, num - 1);
    let combiArr = combinations.map((x) => [val, ...x]);
    result.push(...combiArr);
  });
  return result;
}

function solution(relation) {
  var answer = 0;
  let minimality = false;
  const gridLength = relation[0].length;
  const candidate = Array.from({ length: gridLength }, (_, i) => i);

  for (let i = 0; i < gridLength; i++) {
    let column = relation.map((item) => item[i]);
    if ([...new Set(column)].length === relation.length) {
      answer++;
      candidate.splice(candidate.indexOf(i), 1);
    }
  }

  if (candidate.length === 0 || candidate.length === 1) {
    minimality = true;
  }

  for (let i = 2; i <= candidate.length; i++) {
    if (minimality) break;
    let chooseCandidate = combination(candidate, i);
    chooseCandidate.forEach((pattern) => {
      let bundle = relation.map((item) => {
        return pattern.reduce((acc, curr) => {
          return [...(acc || []), item[curr]];
        }, []);
      });
      let checkDuplicate = bundle
        .map(JSON.stringify)
        .reverse()
        .filter((element, idx, arr) => arr.indexOf(element, idx + 1) === -1)
        .reverse()
        .map(JSON.parse).length;
      if (checkDuplicate === relation.length) {
        minimality = true;
        answer++;
      }
    });
  }

  return answer;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
);

console.log(
  solution([
    ["a", 1, "aaa", "c", "ng"],
    ["b", 1, "bbb", "c", "g"],
    ["c", 1, "aaa", "d", "ng"],
    ["d", 2, "bbb", "d", "ng"],
  ])
);

console.log(
  solution([
    ["a", 1, "aaa", "c", "ng"],
    ["a", 1, "bbb", "e", "g"],
    ["c", 1, "aaa", "d", "ng"],
    ["d", 2, "bbb", "d", "ng"],
  ])
);
