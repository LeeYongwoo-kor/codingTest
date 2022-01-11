function solution(record) {
  let ret = [];
  const uids = new Map();

  record.forEach((entry) => {
    let [command, uid, nick] = entry.split(" ");
    if (command === "Enter" || command === "Change") uids.set(uid, nick);
  });

  record.forEach((entry) => {
    let [command, uid] = entry.split(" ");
    if (command === "Enter") ret.push(`${uids.get(uid)}님이 들어왔습니다.`);
    if (command === "Leave") ret.push(`${uids.get(uid)}님이 나갔습니다.`);
  });

  return ret;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
