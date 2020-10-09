// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const charAVals = {};
  const charBVals = {};
  if (stringA.length !== stringB.length) return false;
  for (let i = 0; i < stringA.length; i++) {
    charAVals[stringA[i]] = charAVals[stringA[i]] + 1 || 1;
    charBVals[stringB[i]] = charBVals[stringB[i]] + 1 || 1;
  }

  for (let charA in charAVals) {
    if (charAVals[charA] !== charBVals[charA]) return false;
  }
  return true;
}

module.exports = anagrams;
