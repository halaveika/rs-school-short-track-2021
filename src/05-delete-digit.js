/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let min = 9;
  let result = n.toString().split('').map((element) => {
    if (Number(element) < min) {
      min = Number(element); return Number(element);
    } return Number(element);
  });
  result = result.reduce((accum, curentvalue) => {
    if (curentvalue !== min) {
      return accum * 10 + curentvalue;
    } min = 10; return accum;
  }, 0);
  return result;
}
module.exports = deleteDigit;
