// n시00분00초까지 3이 포함되는 경우의 수
function solution(n) {
  let count = 0;
  const hour = Number(n);
  const minute = 60;
  const second = 60;

  for (let i = 0; i < hour; i++) {
    for (let j = 0; j < minute; j++) {
      for (let k = 0; k < second; k++) {
        if ((String(i) + String(j) + String(k)).includes(3)) {
          count++;
        }
      }
    }
  }

  return console.log(count);
}

const n = 5;

solution(n);
