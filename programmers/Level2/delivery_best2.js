function solution(N, road, K) {
  var max = 99999999;
  var min = 99999999;
  var minpos = -1;
  var dist = new Array(N).fill(max);
  var found = new Array(N).fill(false);
  var map = new Array(N);
  if (K == 0) {
    return 0;
  }
  for (var i = 0; i < N; i++) {
    map[i] = new Array(N).fill(max);
  }
  var x, y, time;
  for (var j = 0; j < road.length; j++) {
    x = road[j][0] - 1;
    y = road[j][1] - 1;
    time = road[j][2];
    map[x][y] = Math.min(map[x][y], time);
    map[y][x] = Math.min(map[y][x], time);
  }

  dist[0] = 0;
  for (var i = 0; i < N; i++) {
    minpos = -1;
    min = max;
    for (var j = 0; j < N; j++) {
      if (dist[j] < min && found[j] == false) {
        minpos = j;
        min = Math.min(dist[j], min);
      }
    }
    //
    found[minpos] = true;
    for (var w = 0; w < N; w++) {
      if (found[w] == false) {
        dist[w] = Math.min(dist[w], map[minpos][w] + dist[minpos]);
      }
    }
  }

  return dist.filter(function (e) {
    return e <= K;
  }).length;
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
