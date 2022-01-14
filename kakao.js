// *********************** PROGRAMMERS ONLY ************************

2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
const operators = [
  ["*", "+", "-"],
  ["*", "-", "+"],
  ["+", "*", "-"],
  ["+", "-", "*"],
  ["-", "+", "*"],
  ["-", "*", "+"],
];
function solution(expression) {
  var answer = 0;
  let result = [];
  let operand = expression.split(/([+\-*/])/);
  operators.forEach((e) => {
    let rands = [...operand];
    e.forEach((operator) => {
      let newRands = [];
      for (let i = 0; i < rands.length; i++) {
        if (rands[i] === operator) {
          let op1 = newRands.pop();
          let op2 = rands[i + 1];
          newRands.push(cal(op1, op2, operator));
          i++;
        } else newRands.push(rands[i]);
      }
      rands = [...newRands];
    });
    if (rands.length === 1) result.push(rands[0]);
  });
  result.sort((a, b) => Math.abs(b) - Math.abs(a));
  return Math.abs(result[0]);
}

function cal(op1, op2, operator) {
  op1 = Number(op1);
  op2 = Number(op2);
  switch (operator) {
    case "*":
      return op1 * op2;
    case "-":
      return op1 - op2;
    case "+":
      return op1 + op2;
    default:
      return -1;
  }
}

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));
