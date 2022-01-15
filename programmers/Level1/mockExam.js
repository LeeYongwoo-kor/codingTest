function solution(answers) {
  var answer = [];

  const human1 = [1, 2, 3, 4, 5];
  const human2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const human3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let rank = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === human1[i % human1.length]) {
      rank[0]++;
    }
    if (answers[i] === human2[i % human2.length]) {
      rank[1]++;
    }
    if (answers[i] === human3[i % human3.length]) {
      rank[2]++;
    }
  }
  const max = Math.max.apply(null, rank);
  answer = rank.reduce((acc, curr, idx) => {
    if (curr !== max) {
      return [...(acc || [])];
    }
    return [...(acc || []), idx + 1];
  }, []);

  return [...new Set(answer)].sort((a, b) => a - b);
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
