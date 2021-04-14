function solution(N, stages) {
  let ans = [];

  for (let i = 1; i <= N; ++i) {
    let usersReachedCurrentStage = stages.reduce(
      (acc, curStage) => acc + (curStage >= i ? 1 : 0),
      0
    );
    let usersStagnatedCurrentStage = stages.reduce(
      (acc, curStage) => acc + (curStage == i ? 1 : 0),
      0
    );
    if (usersReachedCurrentStage === 0) {
      ans.push({ stage: i, failRate: 0 });
      continue;
    }

    ans.push({
      stage: i,
      failRate: usersStagnatedCurrentStage / usersReachedCurrentStage,
    });
  }

  return ans
    .sort((a, b) => {
      if (a.failRate > b.failRate) return -1;
      if (a.failRate < b.failRate) return 1;
      return a.stage - b.stage;
    })
    .map((entry) => entry.stage);
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));
