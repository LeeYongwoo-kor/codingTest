function solutions(lottos, win_nums) {
  var answer = [];
  let zeroCount = 0;

  const lowest = lottos.reduce((acc, num) => {
    if (num === 0) {
      zeroCount++;
    }
    if (win_nums.includes(num)) {
      acc++;
    }
    return acc;
  }, 0);
  const highest = lowest + zeroCount;
  const hiRank = highest !== 0 ? 6 - highest + 1 : 6;
  const lowRank = lowest !== 0 ? 6 - lowest + 1 : 6;
  answer.push(hiRank, lowRank);

  return answer;
}

console.log(solutions([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solutions([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
console.log(solutions([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
