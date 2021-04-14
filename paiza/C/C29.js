process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let vacation = 0,
  consecutiveDate = 0;
let rainfallChance = [],
  date = [],
  resultArr = [];

const bestVacation = (consecutiveDate, date, rainfallChance) => {
  for (let i = 0; i < rainfallChance.length; i++) {
    const targetDate = rainfallChance.slice(i, i + consecutiveDate);
    if (targetDate.length !== consecutiveDate) {
      break;
    }
    const resultValue = targetDate.reduce(
      (acc, value) => Number(acc) + Number(value)
    );
    resultArr.push(parseFloat((resultValue / consecutiveDate).toFixed(2)));
  }
  const minRainfallChance = Math.min(...resultArr);
  const bestDate = resultArr.indexOf(minRainfallChance);
  return console.log(date[bestDate], date[bestDate + consecutiveDate - 1]);
};
reader.on("line", (line) => {
  const split = line.split(" ");
  if (lines.length === 0) {
    vacation = Number(split[0]);
    consecutiveDate = Number(split[1]);
    lines.push(line);
    return;
  } else {
    if (vacation <= rainfallChance.length) {
      return;
    } else {
      date.push(split[0]);
      rainfallChance.push(split[1]);
    }
  }
});
reader.on("close", () => {
  bestVacation(consecutiveDate, date, rainfallChance);
});
