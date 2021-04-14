const solution = (new_id) => {
  const id = new_id
    .toLowerCase() // 대문자 -> 소문자
    .replace(/[^\w\d-_.]/g, "") // 특수문자 제거
    .replace(/\.{2,}/g, ".") // 마침표가 2번 이상 연속된 부분을 하나의 마침표로
    .replace(/^\.|\.$/g, "") // 마침표가 문자의 끝이나 앞에 위치하면 제거
    .padEnd(1, "a") // 빈 문자열이라면, "a"를 대입
    .slice(0, 15) // 첫 15개의 문자 외에 모두 제거
    .replace(/^\.|\.$/g, ""); // 마침표가 끝에 위치하면, 끝에 위치한 마침표를 제거
  return id.padEnd(3, id[id.length - 1]);
  // 길이가 2자 이하면, 길이가 3이 될때까지 마지막 문자를 반복해서 끝에 붙임
};

const new_id = "...!@BaT#*..y.abcdefghijklm";

console.log(solution(new_id));
