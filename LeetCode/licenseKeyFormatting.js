/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (S, K) {
  let str = S.toUpperCase().replace(/-/g, "");
  let arrLen = Math.floor(str.length / K);
  arrLen = str.length % K === 0 ? arrLen : arrLen + 1;
  const arr = new Array(arrLen);
  let count = 1;
  for (let i = arrLen - 1; i > -1; i--) {
    if (str.length >= K) {
      res = str.slice(str.length - K, str.length);
      str = str.slice(0, str.length - K);
    } else {
      res = str;
    }
    arr[i] = res;
  }
  return arr.join("-");
};

console.log(licenseKeyFormatting("2-4A0r7-4k", 3));
