function solution(d, budget) {
  var answer = 0;
  let balance = budget;

  d.sort((a, b) => a - b).forEach((money) => {
    balance -= money;
    if (balance < 0) {
      return;
    }
    answer++;
  });

  return answer;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));
