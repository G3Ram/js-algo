/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  words.sort(function (a, b) {
    return b.length - a.length;
  });
  let resultArr = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i].includes(words[j])) {
        resultArr.push(words[j]);
      }
    }
  }

  return [...new Set([...resultArr])];
};

console.log(stringMatching(["batman", "bat", "man"]));
