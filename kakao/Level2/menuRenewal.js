function solution(orders, course) {
  let favoriteCourse = [];
  for (let i = 0; i < course.length; i++) {
    let courseList = {};
    const menu = orders.filter((menu) => menu.length >= course[i]);
    if (Array.isArray(menu) && menu.length === 0) continue;

    for (let j = 0; j < menu.length; j++) {
      const cases = Array.from(menu[j]).sort();
      const combinations = combination(cases, course[i]).map((value) =>
        value.join("")
      );

      combinations.reduce((allCourse, course) => {
        if (course in allCourse) {
          allCourse[course]++;
        } else {
          allCourse[course] = 1;
        }
        return allCourse;
      }, courseList);
    }

    const favoriteCourseCount = Math.max(...Object.values(courseList));
    if (favoriteCourseCount < 2) continue;
    favoriteCourse.push(getFavoriteCourse(courseList, favoriteCourseCount));
  }

  return favoriteCourse.flat().sort();
}

const combination = (arr, num) => {
  const result = [];
  if (num === 1) return arr.map((value) => [value]);

  arr.forEach((value, index, arr) => {
    const rest = arr.slice(index + 1);
    const restArr = combination(rest, num - 1);
    const combinationArr = restArr.map((restArr) => [value, ...restArr]);
    result.push(...combinationArr);
  });

  return result;
};

const getFavoriteCourse = (obj, value) => {
  return Object.keys(obj).filter((key) => obj[key] === value);
};

const orders = ["XYZ", "XWY", "WXA"];
const course = [2, 3, 4];

console.log(solution(orders, course));
