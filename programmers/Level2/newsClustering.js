const makeArr = (str) => {
  const arr = [];
  for (let i = 0; i < str.length - 1; i++) {
    const mix = str.toLowerCase().slice(i, i + 2);
    if (mix.match(/[a-z]{2}/g)) {
      arr.push(mix);
    }
  }
  return arr;
};

function solution(str1, str2) {
  var answer = 0;

  const str1Arr = makeArr(str1);
  const str2Arr = makeArr(str2);

  if (!str1Arr || !str2Arr) {
    return (answer = 65536);
  }

  const strSumArr = [...str1Arr, ...str2Arr];

  const intersection = [...new Set(strSumArr)].reduce((acc, value) => {
    const str1ArrCnt = str1Arr.reduce(
      (cnt, data) => (data === value ? cnt + 1 : cnt),
      0
    );
    const str2ArrCnt = str2Arr.reduce(
      (cnt, data) => (data === value ? cnt + 1 : cnt),
      0
    );
    return acc + Math.min(str1ArrCnt, str2ArrCnt);
  }, 0);

  const union = strSumArr.length - intersection;

  if (intersection === 0 && union === 0) {
    return (answer = 65536);
  }

  answer = Math.floor((intersection / union) * 65536);
  return answer;
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "c=m*c^2"));
console.log(solution("AAABBCCD", "AABBBCDD"));
console.log(solution("A+C", "DEF"));
console.log(solution("ABC", "DEF"));
