process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const searchCombi = (arr) => {
  let tmpArr = [];
  do {
    tmpArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let sumElement = arr[i] + arr[i + 1];
      if (sumElement > 101) {
        sumElement -= 101;
      }
      tmpArr.push(sumElement);
    }
    arr = tmpArr;
  } while (tmpArr.length != 1);
  return tmpArr;
};

reader.on("line", (line) => {
  let splits = line.toLowerCase().split(" ");
  const firstArr = Array.from(splits[0]).map((item) =>
    Number(item.charCodeAt(0) - 96)
  );
  const secondArr = Array.from(splits[1]).map((item) =>
    Number(item.charCodeAt(0) - 96)
  );

  const firstCombi = searchCombi([...firstArr, ...secondArr]);
  const secondCombi = searchCombi([...secondArr, ...firstArr]);

  lines.push(Math.max(...[firstCombi, secondCombi]));
});
reader.on("close", () => {
  console.log(lines[0]);
});
