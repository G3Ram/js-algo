/**
 * @param {string} S
 * @return {string}
 */
// var removeVowels = function (S) {
//   let strArr = S.split("");
//   strArr = strArr.filter((val) => {
//     return !["a", "e", "i", "o", "u"].includes(val.toLowerCase());
//   });
//   return strArr.join().replace(/,/g, "");
// };

// console.log(removeVowels("podaanga"));

// SOLUTION 2

/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function (S) {
  return [...S].filter((val) => !"aeiou".includes(val.toLowerCase())).join("");
};

console.log(removeVowels("podaanga"));
