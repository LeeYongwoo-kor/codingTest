process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let alphabetArr = [];
let decryptCount = 0;
let keyArr = [];
let replaceWord = [];
let result = [];

const hasDuplicates = (arr) => new Set(arr).size !== arr.length;
const decryptor = (decryptCount, keyArr, alphabetArr, replaceWord) => {
  for (let k = 0; k < decryptCount; k++) {
    for (let i = 0; i < replaceWord.length; i++) {
      if (replaceWord[i] === " ") {
        result.push(" ");
        continue;
      }
      for (let j = 0; j < alphabetArr.length; j++) {
        if (replaceWord[i] === keyArr[j]) {
          let currentIndex = keyArr.indexOf(keyArr[j]);
          result.push(alphabetArr[currentIndex]);
          break;
        }
      }
    }
  }
  return result.join("");
};

reader.on("line", (line) => {
  alphabetArr = Array.from({ length: 26 }, (value, index) =>
    String.fromCharCode(index + 65).toLowerCase()
  );
  const splitWord = line.split(" ");
  if (lines.length === 0) {
    decryptCount = Number(splitWord[0]);
    keyArr = splitWord[1].split("");
    if (hasDuplicates(keyArr) || keyArr.length !== 26) {
      return;
    }
    lines.push(splitWord);
  } else if (lines.length === 1) {
    replaceWord = line.split("");
    lines.push(decryptor(decryptCount, keyArr, alphabetArr, replaceWord));
  }
});
reader.on("close", () => {
  console.log(lines[1]);
});
