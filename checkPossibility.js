/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let nonDecIndex = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      nonDecIndex.push(i);
    }
  }

  return nonDecIndex.length <= 1;
};

console.log(checkPossibility([3, 4, 2, 3]));
