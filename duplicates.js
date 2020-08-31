/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   console.log(nums);
//   const arr = [...new Set([...nums])];
//   return arr;
// };

var removeDuplicates = function (nums) {
  const arr = nums;
  for (let i = 1; i < nums.length; i++) {
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

console.log(removeDuplicates([1, 1, 2]));
