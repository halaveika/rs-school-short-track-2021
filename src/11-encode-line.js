/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const temp = str.split('');
  const result = [];
  let counter = 1;
  for (let i = 1; i <= temp.length; i++) {
    if (temp[i] === temp[i - 1]) counter++;
    else if (counter > 1) {
      result.push(counter, temp[i - 1]);
      counter = 1;
    } else result.push(temp[i - 1]);
  }
  return result.join('');
}
module.exports = encodeLine;
