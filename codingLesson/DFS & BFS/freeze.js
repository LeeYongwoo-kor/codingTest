// 음료수 얼려먹기
function solution(s) {
  let result = 0;
  const row = Number(s[0].split(" ")[0]);
  const column = Number(s[0].split(" ")[1]);

  s.splice(0, 1);
  const iceBox = s.reduce((result, row) => {
    let thisRow = Array.from(row).map((item) => Number(item));
    return [...(result || []), thisRow];
  }, []);

  const dfs = (x, y) => {
    if (x <= -1 || x >= row || y <= -1 || y >= column) {
      return false;
    }

    if (iceBox[x][y] === 0) {
      iceBox[x][y] = 1; // 노드 방문처리
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }
    return false;
  };

  for (let i = 0; i < iceBox.length; i++) {
    for (let j = 0; j < iceBox[i].length; j++) {
      if (dfs(i, j)) result += 1;
    }
  }

  return console.log(result);
}

const s = ["4 5", "00110", "00011", "11111", "00000"];

solution(s);
