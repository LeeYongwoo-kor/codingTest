function solution(id_list, report, k) {
  var answer = [];
  const reportObj = id_list.reduce((acc, id) => {
    return { ...acc, [id]: { reportTo: [], reported: 0 } };
  }, {});

  report.forEach((msg) => {
    const [vid, vreportTo] = msg.split(" ");
    if (!reportObj[vid].reportTo.some((v) => v === vreportTo)) {
      reportObj[vid].reportTo.push(vreportTo);
      reportObj[vreportTo].reported++;
    }
  });

  for (const { reportTo } of Object.values(reportObj)) {
    let badguyCount = 0;
    for (const badguy of reportTo) {
      if (reportObj[badguy].reported >= k) {
        badguyCount++;
      }
    }
    answer.push(badguyCount);
  }

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
