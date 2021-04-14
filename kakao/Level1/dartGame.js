function solution(dartResult) {
  const currentGame = dartResult.match(/(10|[0-9])[SDT][\\*#]{0,1}/g);
  const scoreArr = currentGame.reduce((sAcc, sCurr, index) => {
    let valueArr = Array.from(
      sCurr.includes(10) ? ["10", sCurr.substring(2)] : sCurr
    );
    let score = valueArr.reduce((acc, curr) => {
      if (isNaN(curr)) {
        switch (curr) {
          case "S":
            return Math.pow(acc, 1);
          case "D":
            return Math.pow(acc, 2);
          case "T":
            return Math.pow(acc, 3);
          case "*":
            if (sAcc.length !== 0) {
              sAcc[index - 1] *= 2;
            }
            return acc * 2;
          case "#":
            return acc * -1;
          default:
            return acc;
        }
      } else {
        return acc + Number(curr);
      }
    }, 0);

    return [...sAcc, score];
  }, []);

  const answer = scoreArr.reduce((acc, curr) => acc + curr);
  return answer;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
console.log(solution("1D#2S*3S"));
console.log(solution("1T2D3D#"));
console.log(solution("1D2S3T*"));
