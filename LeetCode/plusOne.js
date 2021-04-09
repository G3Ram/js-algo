/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const dlen = digits.length;
  let carryOver = 0;
  for (let i = dlen - 1; i > -1; i--) {
    if (digits[i] === 9 && i === dlen - 1) {
      digits[i] = 0;
      carryOver = 1;
      if (digits.length === 1) {
        digits.unshift(1);
      }
    } else if (digits[i] !== 9 && i === dlen - 1) {
      digits[i] = digits[i] + 1;
      carryOver = 0;
    } else if (digits[i] === 9 && i === 0 && carryOver === 1) {
      digits[i] = 0;
      digits.unshift(1);
      carryOver = 0;
	  // ******* TESTING GIT ************
    } else if (digits[i] === 9 && carryOver === 1) {
      digits[i] = 0;
      carryOver = 1;
    } else if (digits[i] !== 9 && carryOver === 1) {
      digits[i] = digits[i] + 1;
      carryOver = 0;
    }
  }

  return digits;
};

console.log(plusOne([9]));
