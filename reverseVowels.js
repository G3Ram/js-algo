/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const sArr = s.split("");
  const vowels = [];
  // find vowels in the string
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i].match(/[aeiouAEIOU]/)) {
      vowels.push(sArr[i]);
      sArr[i] = "";
    }
  }
  vowels.reverse();
  for (let i = 0; i < vowels.length; i++) {
    const a = sArr.indexOf("");
    sArr[a] = vowels[i];
  }
  console.log(`----- ${sArr} ------ ${vowels} -----`);
  return sArr.join("");
};

console.log(reverseVowels("aA"));
