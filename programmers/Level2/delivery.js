function solution(N, road, K) {
  var answer = 0;
  const dijkstra = { 1: 0 };
  const sortRoad = road
    .map((item) => (item[0] > item[1] ? [item[1], item[0], item[2]] : item))
    .sort((a, b) => a[0] - b[0]);

  for (let i = 1; i <= N; i++) {
    for (let j = 0; j < sortRoad.length; j++) {
      if (sortRoad[j][0] === i) {
        let distance = (dijkstra[i] || 0) + sortRoad[j][2];
        if (!dijkstra[sortRoad[j][1]] || dijkstra[sortRoad[j][1]] > distance) {
          dijkstra[sortRoad[j][1]] = distance;
        }
        sortRoad.splice(j, 1);
        j--;
        continue;
      }
      break;
    }
  }

  answer = Object.values(dijkstra).filter((v) => v <= K).length;

  return answer;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
);
console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
