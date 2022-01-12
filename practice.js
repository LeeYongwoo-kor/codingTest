process.stdin.setEncoding("utf8");

// reduce로 객체배열 생성
const data = [
  {
    name: "Lee",
    age: 15,
    score: 100,
  },
  {
    name: "Kim",
    age: 20,
    score: 80,
  },
  {
    name: "Park",
    age: 25,
    score: 95,
  },
];

const result = data.reduce((acc, curr) => {
  return [
    ...acc,
    {
      x: curr.name,
      y: [curr.age, curr.score],
    },
  ];
}, []);

// console.log(result);

// 반올림테스트
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on("line", (line) => {
  if (!Number.isNaN(line)) {
    const number = Number(line);
    const toFixed = number.toFixed(2);
    const epsilon = Math.round((number + Number.EPSILON) * 100) / 100;
    const e2 = +(Math.round(number + "e+2") + "e-2");
    console.log(`number.toFixed => ${toFixed}`);
    console.log(`Math.round(Number.EPSILON) => ${epsilon}`);
    console.log(`Math.round(e+2) => ${e2}`);
  } else {
    console.log("Not number");
  }
  readline.close();
});
readline.on("close", () => {});
