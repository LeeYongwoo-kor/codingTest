// 정렬된 배열에서 특정 수의 개수 구하기 (단, Big O(logN)을 만족할 것)
function solution(s) {
  const element = Number(s[0].split(" ")[1]);
  const array = s[1]
    .split(" ")
    .map((item) => Number(item))
    .sort();

  const result = binarySearch(array, element);

  return console.log(result);
}

const binarySearch = (sortedArray, seekElement) => {
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (sortedArray[mid] === seekElement) {
      return mid;
    }
    if (sortedArray[mid] < seekElement) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

const s = ["7 2", "1 1 2 2 2 2 3"];

solution(s);
