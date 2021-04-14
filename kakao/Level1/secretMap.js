function solution(n, arr1, arr2) {
  if (n < 0 || n >= Math.pow(n, 2) - 1) {
    return;
  }

  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(arr1[i] | arr2[i]);
  }

  answer = answer.map((number) => {
    let secretMap = number.toString(2).replace(/1/g, "#").replace(/0/g, " ");
    return secretMap.length !== n ? secretMap.padStart(n, " ") : secretMap;
  });

  return answer;
}

const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

console.log(solution(n, arr1, arr2));
