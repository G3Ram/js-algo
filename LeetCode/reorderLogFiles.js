/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  let digitResult = [];
  let alphaResult = [];
  let temp = [];
  for (let i = 0; i < logs.length; i++) {
    temp = logs[i].split(" ");
    if (parseInt(temp[1])) {
      digitResult.push(logs[i]);
    } else {
      alphaResult.push(logs[i]);
    }
  }
  alphaResult.sort((a, b) => {
    if (a.split(/ (.+)/)[1] > b.split(/ (.+)/)[1]) return 1;
    if (a.split(/ (.+)/)[1] < b.split(/ (.+)/)[1]) return -1;
    if (a.split(/ (.+)/)[1] === b.split(/ (.+)/)[1]) {
      if (a.split(/ (.+)/)[0] > b.split(/ (.+)/)[0]) return 1;
      if (a.split(/ (.+)/)[0] < b.split(/ (.+)/)[0]) return -1;
      if (a.split(/ (.+)/)[0] === b.split(/ (.+)/)[0]) return 0;
    }
  });
  return [...alphaResult, ...digitResult];
};

// console.log(
//   reorderLogFiles([
//     "dig1 8 1 5 1",
//     "let1 art can",
//     "dig2 3 6",
//     "let2 own kit dig",
//     "let3 art zero",
//   ])
// );

console.log(
  reorderLogFiles([
    "a1 9 2 3 1",
    "g1 act car",
    "zo4 4 7",
    "ab1 off key dog",
    "a8 act zoo",
    "a2 act car",
  ])
);
