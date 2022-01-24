function solution(fees, records) {
  var answer = [];
  const MAX_DATE_HOUR = 23;
  const MAX_DATE_MINUTE = 59;
  const [basicTime, basicFee, afterTime, afterFee] = fees;

  const parkingObj = records.reduce((acc, log) => {
    const [time, carNumber, inout] = log.split(" ");
    if (!Object.prototype.hasOwnProperty.call(acc, carNumber)) {
      return { ...acc, [carNumber]: { [inout]: [time] } };
    }
    acc[carNumber][inout] = [...(acc[carNumber][inout] || []), time];
    return { ...acc };
  }, {});

  for (const [carNumber, { IN, OUT }] of Object.entries(parkingObj)) {
    let accMinute = 0;
    IN.forEach((time, idx) => {
      const [inHour, inMinute] = time.split(":").map((v) => Number(v));
      let [outHour, outMinute] = [MAX_DATE_HOUR, MAX_DATE_MINUTE];
      if (OUT && OUT[idx]) {
        [outHour, outMinute] = OUT[idx].split(":").map((v) => Number(v));
      }
      if (outMinute < inMinute) {
        outMinute += 60;
        outHour -= 1;
      }
      accMinute +=
        outMinute -
        inMinute +
        (outHour < inHour ? outHour + 24 - inHour : outHour - inHour) * 60;
    });
    parkingObj[carNumber]["fee"] =
      accMinute <= basicTime
        ? basicFee
        : basicFee + Math.ceil((accMinute - basicTime) / afterTime) * afterFee;
  }

  for (const [, { fee }] of Object.entries(parkingObj).sort()) {
    answer.push(fee);
  }

  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);

console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
);

console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));
