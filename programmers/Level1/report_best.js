function solution(id_list, report, k) {
  const userInfo = id_list.reduce((result, current) => {
    result[current] = [0, []];
    return result;
  }, {});

  for (const value of new Set(report)) {
    const [user, target] = value.split(" ");
    userInfo[user][1].push(target);
    userInfo[target][0]++;
  }
  const stops = id_list.filter((id) => userInfo[id][0] >= k);

  return id_list.map(
    (id) => userInfo[id][1].filter((id) => stops.includes(id)).length
  );
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
