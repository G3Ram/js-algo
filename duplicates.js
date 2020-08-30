/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  console.log(nums);
  const arr = [...new Set([...nums])];
  return arr;
};

console.log(removeDuplicates([1, 1, 2]));
