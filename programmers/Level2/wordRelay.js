function solution(n, words) {
  var answer = [0, 0];

  words.reduce((acc, word, idx) => {
    if (idx === 0) return (acc = [words[0]]);
    if (acc[idx - 1].at(-1) !== word.at(0) || acc.includes(word)) {
      answer[0] = (acc.length % n) + 1;
      answer[1] = Math.ceil((acc.length + 1) / n);
      words.length = 0;
    }
    return [...(acc || []), word];
  }, []);

  return answer;
}

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
);

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
);

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
