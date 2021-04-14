process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let taxiCount = 0;
let travelDistance = 0;
let taxi = {
  basicDistance: 0,
  basicPay: 0,
  extraDistance: 0,
  extraPay: 0,
};
let taxiArr = [];
let feeArr = [];

const feeCal = (taxiArr, travelDistance) => {
  for (let i = 0; i < taxiArr.length; i++) {
    let currentDistance = taxiArr[i].basicDistance;
    let currentPay = taxiArr[i].basicPay;
    if (currentDistance < travelDistance) {
      while (currentDistance < travelDistance) {
        currentDistance += taxiArr[i].extraDistance;
        currentPay += taxiArr[i].extraPay;
      }
    }
    feeArr.push(currentPay);
  }
  const maxFee = Math.max(...feeArr);
  const minFee = Math.min(...feeArr);
  return console.log(minFee, maxFee);
};

reader.on("line", (line) => {
  const split = line.split(" ").map((item) => Number(item));
  if (lines.length === 0) {
    taxiCount = split[0];
    travelDistance = split[1];
    lines.push(split);
  } else {
    if (taxiCount <= taxiArr.length) {
      return;
    } else {
      taxi = {};
      taxi.basicDistance = split[0];
      taxi.basicPay = split[1];
      taxi.extraDistance = split[2];
      taxi.extraPay = split[3];
      taxiArr.push(taxi);
    }
  }
});
reader.on("close", () => {
  feeCal(taxiArr, travelDistance);
});
