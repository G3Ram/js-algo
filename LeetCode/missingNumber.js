/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const max = nums.length + 1;
  const numsStr = nums.join("");
  let countMap = {};
  for (let i = 0; i < nums.length; i++) {
    countMap[nums[i]] = 1;
  }

  for (let i = 0; i < max; i++) {
    if (!countMap[i]) return i;
  }
};

console.log(
  missingNumber([
    44,
    26,
    34,
    25,
    23,
    42,
    0,
    43,
    38,
    14,
    47,
    19,
    49,
    6,
    16,
    41,
    24,
    35,
    10,
    4,
    32,
    5,
    8,
    15,
    31,
    3,
    46,
    22,
    2,
    30,
    28,
    37,
    1,
    21,
    39,
    45,
    9,
    48,
    36,
    17,
    7,
    27,
    18,
    29,
    13,
    40,
    11,
    20,
    12,
  ])
);
