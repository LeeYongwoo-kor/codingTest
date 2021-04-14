process.stdin.resume();
process.stdin.setEncoding("utf8");
// 自分の得意な言語で
// Let's チャレンジ！！
var lines = [];
var reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const hasDuplicates = (keyword) => new Set(keyword).size !== keyword.length;
const decryptor = ([count, keyword, alphabet, replaceWord]) => {
  for (let i = 0; i < count; i++) {
    let result = "";
    for (let j = 0; j < replaceWord.length; j++) {
      if (replaceWord[j] === " ") {
        result += " ";
        continue;
      }
      let location = keyword.indexOf(replaceWord[j]);
      result += alphabet[location];
    }
    replaceWord = result;
  }
  return replaceWord;
};

reader.on("line", (line) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const splitWord = line.split(" ");
  if (lines.length === 0) {
    const decryptCount = Number(splitWord[0]);
    const keyword = splitWord[1].split("");
    if (hasDuplicates(keyword) || keyword.length !== 26) {
      return;
    }
    lines.push([decryptCount, splitWord[1], alphabet]);
  } else if (lines.length === 1) {
    let replaceWord = line;
    lines.push(decryptor([...lines[0], replaceWord]));
  }
});
reader.on("close", () => {
  console.log(lines[1]);
});
