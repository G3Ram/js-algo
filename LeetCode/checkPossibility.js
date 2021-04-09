/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
  let nonDecIndex = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(`-----${nums[i]}-----------${nums[j]}`);
      if (nums[j] - nums[i] < 0) {
        nonDecIndex.push(nums[j]);
        break;
      }
    }
  }
  console.log(nonDecIndex.length);
  return nonDecIndex.length <= 1;
};

console.log(checkPossibility([5, 7, 1, 8]));
