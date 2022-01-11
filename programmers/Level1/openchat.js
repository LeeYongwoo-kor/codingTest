function solution(record) {
  const user = {};
  var answer = [];

  record.forEach((msg) => {
    const order = msg.split(" ");
    if (order.length === 0) return;
    switch (order[0].toLowerCase()) {
      case "enter":
        if (order.length !== 3) return;
        user[order[1]] = order[2];
        answer.push(`${order[1]}님이 들어왔습니다.`);
        break;
      case "leave":
        if (order.length !== 2) return;
        answer.push(`${order[1]}님이 나갔습니다.`);
        break;
      case "change":
        if (order.length !== 3) return;
        user[order[1]] = order[2];
        break;
      default:
        return;
    }
  });

  answer.forEach((msg, idx) => {
    const id = msg.substring(0, msg.indexOf("님"));
    if (Object.prototype.hasOwnProperty.call(user, id)) {
      answer[idx] = msg.replace(id, user[id]);
    }
  });

  return answer;
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
