// 떡볶이 떡 만들기
function solution(s) {
  let result = 0;

  const riceLength = Number(s[0].split(" ")[1]);
  const rices = s[1].split(" ").map((item) => Number(item));

  let start = 0;
  let end = Math.max(...rices);

  while (start <= end) {
    let total = 0;
    let mid = Math.floor((start + end) / 2);
    for (let rice of rices) {
      if (rice > mid) total += rice - mid;
    }
    if (total < riceLength) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  return console.log(result);
}

const s = ["4 6", "19 15 10 17"];

solution(s);
