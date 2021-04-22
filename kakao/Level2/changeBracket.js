let pos = 0;

function solution(p) {
  if (!p || !p.trim()) return p;

  const bracketCheck = (p) => {
    let ret = true;
    let left = 0,
      right = 0;
    let stack = [];
    for (let i = 0; i < p.length; i++) {
      if (p[i] === "(") {
        left++;
        stack.push("(");
      } else {
        right++;
        if (Array.isArray(stack) && stack.length === 0) {
          ret = false;
        } else {
          stack.pop();
        }
        if (left === right) {
          pos = i + i;
          return ret;
        }
      }
    }
    return true;
  };

  let correctBracket = bracketCheck(p);
  const u = p.slice(0, pos);
  const v = p.slice(pos);

  if (correctBracket) {
    return u + solution(v);
  }

  let result = "(" + solution(v) + ")";
  for (let i = 1; i < u.length - 1; i++) {
    if (u[i] === "(") {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;
}

const p = "()))((()";

console.log(solution(p));
