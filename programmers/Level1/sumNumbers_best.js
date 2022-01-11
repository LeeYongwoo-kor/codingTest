function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
