/**
 * @param {number[]} piles
 * @return {number}
 */
// var stoneGameII = function (piles) {
//   let m = 1;
//   let aStones = 0;
//   let bStones = 0;
//   count = 1;
//   let i = 0;
//   // count the number of piles
//   while (i < piles.length && piles.length - i > m) {
//     if (count % 2 !== 0) {

//       if () {

//       }
//       // alice turn
//       for (let j = 0; j < m; j++) {
//         aStones = aStones + piles.shift();
//         i = i + 1;
//       }
//       count += 1;
//     } else {
//       // bob's turn
//       m = 2 * m;
//       for (let j = 0; j < m; j++) {
//         bStones = bStones + piles.shift();
//         i = i + 1;
//       }

//       count += 1;
//     }
//   }
//   console.log(piles);
//   bStones = bStones + piles.shift();
//   return aStones;
// };

var stoneGameII = function (piles) {
  let sum = 0;
  const sums = piles.map((current) => (sum += current));
  console.log("----sums ----->>", sums);
  const dp = [];
  const solve = (index, m) => {
    if (!dp[index]) {
      console.log("------am i here-----", index, m);
      dp[index] = [];
    }
    // This code is not called in the below scenario
    // if (typeof dp[index][m] !== "undefined") {
    //   console.log("----is not undefined -----");
    //   return dp[index][m];
    // }
    let solution = 0;
    console.log("----index + 2 * m", index + 2 * m);
    if (index + 2 * m >= piles.length) {
      console.log("----comes here if index + 2 * m");
      return sum - (index > 0 ? sums[index - 1] : 0);
    }
    for (let i = index; i < index + 2 * m; i++) {
      const lost = solve(i + 1, Math.max(i - index + 1, m));
      const gained = sum - (index > 0 ? sums[index - 1] : 0);
      solution = Math.max(solution, gained - lost);
    }
    dp[index][m] = solution;
    return dp[index][m];
  };

  return solve(0, 1);
};

console.log(stoneGameII([2, 7, 9, 4, 4]));
// console.log(stoneGameII([1, 2, 3, 4, 5, 100]));
