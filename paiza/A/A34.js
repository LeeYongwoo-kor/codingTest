process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let balance = 0;

let priceList = [];
let basket = [];

const combination = (list, num) => {
  let result = [];
  if (num === 1) return list.map((e) => [e]);

  list.forEach((el, idx, arr) => {
    let rest = arr.slice(idx + 1);
    let combinations = combination(rest, num - 1);
    let combiArr = combinations.map((x) => [el, ...x]);
    result.push(...combiArr);
  });
  return result;
};

reader.on("line", (line) => {
  priceList.sort((a, b) => b - a);
  for (let i = priceList.length; i > 0; i--) {
    let combiResult = [];
    if (i === count) {
      combiResult = [priceList];
    } else {
      combiResult = combination(priceList, i);
    }
    let resultArr = combiResult.reduce((acc, curr) => {
      let sum = curr.reduce((a, b) => a + b);
      if (balance < sum) return [...(acc || [])];
      return [...(acc || []), balance - sum];
    }, []);
    if (resultArr.length === 0) continue;
    else {
      basket.push(Math.min(...resultArr));
      break;
    }
  }

  console.log(basket[0]);
});
