/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let arr1 = nums.filter((i, index) => index < n);
  let arr2 = nums.filter((i, index) => index >= n);
  let resultArr = [];
  for (let i = 0; i < n; i++) {
    resultArr.push(arr1[i]);
    resultArr.push(arr2[i]);
  }
  return resultArr;
};

console.log(shuffle([1, 2, 3, 4, 5, 6], 3));
