/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   console.log(nums);
//   const arr = [...new Set([...nums])];
//   return arr;
// };

// var removeDuplicates = function (nums) {
//   const arr = nums;
//   for (let i = 1; i < nums.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// };

var removeDuplicates = function (nums) {
  let i = 0;
  if (nums.length === 0) return 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i += 1;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};

console.log(removeDuplicates([1, 1, 2]));
