/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let newKSet = [...new Set(nums)];
  console.log(newKSet);
};

topKFrequent([1, 1, 1, 2, 2, 3], 2);
