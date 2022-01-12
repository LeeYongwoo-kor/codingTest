// *********************** PAIZA ONLY ************************
var lines = [];

let date = 0;
let init = 0;
let limit = 0;

let dietPlan = [];
let dp = [];

const line = (line) => {
  let splits = line.split(" ").map((item) => Number(item));
  if (lines.length === 0) {
    date = splits[0];
    init = splits[1];
    limit = splits[2];
    lines.push(line);
  } else {
    dietPlan.push(splits);
  }
};

const close = () => {
  let perfectPlan = Math.pow(2, date);

  const dietFail =
    dietPlan.reduce((arr, curr) => (arr += curr[1])) - (limit - init);

  dietPlan = dietPlan.reduce((acc, curr) => {
    return [...(acc || []), curr[0] + curr[1]];
  }, []);
  dp = new Array(4537567650);
  for (let i = 0; i < dietPlan.length; i++) {
    dp[i] = dietPlan[i];
  }

  for (let i = 0; i < date; i++) {
    for (let j = 0; j < date; j++) {
      if (dp[i] >= dietFail) {
        continue;
      }
      perfectPlan--;
    }
  }
};

window.onload = () => {
  line("8 300 400");
  line("9 39");
  line("48 38");
  line("21 10");
  line("14 45");
  line("32 20");
  line("32 48");
  line("9 7");
  line("19 16");
  close();
};
