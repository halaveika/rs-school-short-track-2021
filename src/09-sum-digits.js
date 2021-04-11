/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function sumRec(number) {
    let result = number;
    let sum = 0;
    if (Math.abs(result) < 10) return result;
    result = result.toString().split('').map((element) => parseInt(element, 10)).reduce((accum, element) => {
      sum += element; return sum;
    }, 0);
    return sumRec(result);
  }
  return sumRec(n);
}

module.exports = getSumOfDigits;
