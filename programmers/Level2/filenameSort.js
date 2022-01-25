function solution(files) {
  const reg = /([a-zA-Z -.]+)(\d{1,5})(.*)/;

  const newFiles = files.map((file) => {
    const matchArr = file.match(reg);
    return [...matchArr.slice(1)];
  });

  const newSortFiles = newFiles.sort((a, b) => {
    const headA = a[0] && a[0].toUpperCase(),
      headB = b[0] && b[0].toUpperCase(),
      numberA = a[1] && Number(a[1]),
      numberB = b[1] && Number(b[1]);

    if (headA < headB) return -1;
    if (headA > headB) return 1;
    if (numberA < numberB) return -1;
    if (numberA > numberB) return 1;

    return 0;
  });

  return newSortFiles.map((value) => [...value].join(""));
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);

console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
