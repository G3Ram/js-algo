// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const strArr = str.split(" ");
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  return strArr.join(" ");
}
module.exports = capitalize;

// SOLUTION 1
// const strArr = str.split(" ");
// for (let i = 0; i < strArr.length; i++) {
//   strArr[i] =
//     strArr[i].substr(0, 1).toUpperCase() +
//     strArr[i].substring(1, strArr[i].length);
// }
// return strArr.join(" ");
