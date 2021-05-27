// *********************** PAIZA ONLY ************************
var lines = [];

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

const line = (line) => {
  if (lines.length === 0) {
    let splits = line.split(" ").map((item) => Number(item));
    count = splits[0];
    balance = splits[1];
    lines.push(line);
  } else {
    priceList.push(Number(line));
  }
};

const close = () => {
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
};

window.onload = () => {
  line("15 10000");
  line("100");
  line("200");
  line("400");
  line("3500");
  line("2200");
  line("1750");
  line("1200");
  line("1380");
  line("2000");
  line("500");
  line("990");
  line("350");
  line("3900");
  line("5000");
  line("2000");
  close();
};
