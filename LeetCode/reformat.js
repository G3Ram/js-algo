/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const digits = [];
  const letters = [];
  let result = [];
  if (s.length > 0) {
    for (let i = 0; i < s.length; i++) {
      if (parseInt(s.charAt(i)) || parseInt(s.charAt(i)) === 0) {
        digits.push(s.charAt(i));
      } else {
        letters.push(s.charAt(i));
      }
    }

    if (digits.length === 0 && letters.length === 0) {
      return "";
    } else if (digits.length === 1 && letters.length === 0) {
      return digits[0];
    } else if (letters.length === 1 && digits.length === 0) {
      return letters[0];
    }

    let isReformat =
      digits.length + 1 === letters.length ||
      letters.length + 1 === digits.length ||
      digits.length === letters.length;

    if (isReformat) {
      const maxLength =
        digits.length > letters.length ? letters.length : digits.length;
      const isDigitsFirst = digits.length >= letters.length ? true : false;
      for (let i = 0; i < maxLength; i++) {
        if (isDigitsFirst) {
          result.push(digits.shift());
          result.push(letters.shift());
        } else {
          result.push(letters.shift());
          result.push(digits.shift());
        }
      }

      if (digits.length > 0) {
        result = result.concat(digits);
      } else if (letters.length > 0) {
        result = result.concat(letters);
      }
      return result.join("");
    } else {
      return "";
    }
  }
  return "";
};

console.log(reformat("j"));
