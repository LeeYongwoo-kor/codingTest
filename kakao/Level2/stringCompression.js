function solution(s) {
  let result = s.length;
  let amount = 1;
  for (let i = 1; i <= s.length / 2; i++) {
    let compression = [];
    for (let j = 0; j < s.length / i; j++) {
      compression.push(s.slice(j * i || j, (j + 1) * i));
    }
    const reducer = compression.reduce((acc, curr, k, array) => {
      if (array[k] === array[k + 1]) {
        amount++;
        return acc;
      }
      if (amount !== 1) {
        curr = amount + curr;
        amount = 1;
      }
      return acc + curr;
    }, "");
    if (result > reducer.length) {
      result = reducer.length;
    }
  }

  return result;
}

const s = "abcabcabcabcdededededede";

console.log(solution(s));
