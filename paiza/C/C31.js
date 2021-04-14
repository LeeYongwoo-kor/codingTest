// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let output = [];
const cities = [];
let city = {};

reader.on("line", (line) => {
  if (lines.length === 0 && !isNaN(line)) {
    lines.push(line);
    return;
  }
  const splitWords = line.split(" ");
  if (splitWords.length > 2) {
    return;
  }
  if (cities.length >= parseInt(lines[0], 10)) {
    const result = cities.filter((cities) => cities.cityName === splitWords[0]);
    if (result.length === 0) {
      return;
    } else {
      const cityTime = [];
      const currentTime = splitWords[1].split(":");
      const standardTime = parseInt(result[0].cityTime, 10);
      JSON.stringify(cities, (key, value) => {
        if (key === "cityTime") {
          cityTime.push(value);
        }
        return value;
      });
      output = cityTime.map((time) => {
        let resultValue =
          parseInt(currentTime[0], 10) + (parseInt(time, 10) - standardTime);
        if (resultValue < 0) {
          resultValue = resultValue + 24;
        }
        resultValue = `${
          resultValue.toString().length === 1 ? `0${resultValue}` : resultValue
        }:${currentTime[1]}`;
        return resultValue;
      });
    }
  }
  city = {};
  city.cityName = splitWords[0];
  city.cityTime = splitWords[1];
  cities.push(city);
});
reader.on("close", () => {
  for (time of output) {
    console.log(time);
  }
});
