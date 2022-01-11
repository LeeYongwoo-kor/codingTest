function solution(numbers) {
  const numbersArr = Array.from({ length: 10 }, (_, idx) => idx);

  const answer = numbersArr.reduce((acc, num) => {
    if (!numbers.includes(num)) {
      return (acc += num);
    }
    return acc;
  }, 0);

  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
console.log(solution([5, 8, 4, 0, 6, 7, 9]));
