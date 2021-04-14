// *********************** CODING PRACTICE ONLY ************************
function solution(s) {
  let strPart = "";
  let num = 0;
  for (let str of s) {
    if (isNaN(str)) {
      strPart += str;
    } else {
      num += Number(str);
    }
  }

  return console.log(Array.from(strPart).sort().join("") + num);
}

const s = "AJKDLSI412K4JSJ9D";

solution(s);
