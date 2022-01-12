// *********************** PROGRAMMERS ONLY ************************
function solution(n) {
  var answer = "";

  const rule = ["4", "1", "2"];

  do {
    answer = rule[n % 3] + answer;
    n = parseInt(n / 3) - (n % 3 === 0 ? 1 : 0);
  } while (n !== 0);

  return answer;
}

console.log(solution(3));
