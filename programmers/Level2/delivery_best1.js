function solution(N, road, K) {
  const queue = [];
  const adj = Array.from(Array(N + 1), () => new Array());
  const dist = [0, 0];

  for (let i = 0; i < N - 1; ++i) dist.push(Number.MAX_VALUE);

  road.map((info) => {
    let a = info[0];
    let b = info[1];
    let c = info[2];

    adj[a].push({ to: b, weight: c });
    adj[b].push({ to: a, weight: c });
  });

  queue.push({
    to: 1,
    weight: 0,
  });

  (function () {
    while (queue.length) {
      let edge = queue.shift();
      adj[edge.to].map((next) => {
        if (dist[next.to] > dist[edge.to] + next.weight) {
          dist[next.to] = dist[edge.to] + next.weight;
          queue.push(next);
        }
      });
    }
  })();

  let answer = 0;
  for (let i = 1; i < N + 1; ++i) {
    if (dist[i] <= K) answer++;
  }

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
