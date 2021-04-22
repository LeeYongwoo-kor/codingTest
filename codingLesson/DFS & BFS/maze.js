// 미로 탈출
function solution(s) {
  let answer = 0;
  const row = Number(s[0].split(" ")[0]);
  const column = Number(s[0].split(" ")[1]);

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const queue = {
    arr: [],
    enqueue: function (item) {
      return this.arr.push(item);
    },
    dequeue: function () {
      return this.arr.shift();
    },
  };

  s.splice(0, 1);
  const maze = s.reduce((result, row) => {
    let thisRow = Array.from(row).map((item) => Number(item));
    return [...(result || []), thisRow];
  }, []);

  const bfs = (x, y) => {
    queue.enqueue([x, y]);
    while (queue.arr.length !== 0) {
      [x, y] = queue.dequeue();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx < 0 || nx >= row || ny < 0 || ny >= column) continue;
        if (maze[nx][ny] === 0) continue;
        if (maze[nx][ny] === 1) {
          maze[nx][ny] = maze[x][y] + 1;
          queue.enqueue([nx, ny]);
        }
      }
    }
    return maze[row - 1][column - 1];
  };

  answer = bfs(0, 0);
  return console.log(answer);
}

const s = ["5 6", "101010", "111111", "000001", "111111", "111111"];

solution(s);
