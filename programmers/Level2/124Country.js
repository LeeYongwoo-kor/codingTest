function solution(n) {
  var answer = "";

  const rule = ["4", "1", "2"];

  do {
    answer = rule[n % 3] + answer;
    n = n / 3;
  } while (n !== 0);

  return answer;
}

console.log(solution(5));
