/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const counter1 = { };
  const counter2 = { };
  //each symbol have its own kay
  s1.split('').reduce((accum, currentValue) => { counter1[currentValue] = (counter1[currentValue] || 0) + 1; return accum; }, { });
  s2.split('').reduce((accum, currentValue) => { counter2[currentValue] = (counter2[currentValue] || 0) + 1; return accum; }, { });
  let result = 0;
  const x = Object.keys(counter1);
  const y = Object.keys(counter2);
    //iterate the keys massive to find the same and chose the min one
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < y.length; j++) {
      if (y[j] === x[i]) result += Math.min(counter1[x[i]], counter2[y[j]]);
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
