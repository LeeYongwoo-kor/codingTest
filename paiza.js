// *********************** PAIZA ONLY ************************
var lines = [];

const searchCombi = (arr) => {
  let tmpArr = [];
  do {
    tmpArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      let sumElement = arr[i] + arr[i + 1];
      if (sumElement > 101) {
        sumElement -= 101;
      }
      tmpArr.push(sumElement);
    }
    arr = tmpArr;
  } while (tmpArr.length != 1);
  return tmpArr;
};

const line = (line) => {
  let splits = line.toLowerCase().split(" ");
  const firstArr = Array.from(splits[0]).map((item) =>
    Number(item.charCodeAt(0) - 96)
  );
  const secondArr = Array.from(splits[1]).map((item) =>
    Number(item.charCodeAt(0) - 96)
  );

  const firstCombi = searchCombi([...firstArr, ...secondArr]);
  const secondCombi = searchCombi([...secondArr, ...firstArr]);

  lines.push(Math.max(...[firstCombi, secondCombi]));
};

const close = () => {
  console.log(lines[0]);
};

window.onload = () => {
  line("alice bob");
  close();
};
