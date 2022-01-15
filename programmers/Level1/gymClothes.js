function solution(n, lost, reserve) {
  var answer = 0;

  const classroom = Array.from({ length: n }, () => 1);

  lost.forEach((item) => {
    classroom[item - 1]--;
  });
  reserve.forEach((item) => {
    classroom[item - 1]++;
  });

  for (let i = 0; i < classroom.length; i++) {
    if (classroom[i] === 0) {
      if (i !== 0 && classroom[i - 1] === 2) {
        classroom[i - 1]--;
        classroom[i]++;
        continue;
      }
      if (i !== classroom.length - 1 && classroom[i + 1] === 2) {
        classroom[i + 1]--;
        classroom[i]++;
        continue;
      }
    }
  }

  answer = classroom.filter((item) => item === 1 || item === 2).length;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
