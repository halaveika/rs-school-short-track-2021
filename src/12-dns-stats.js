/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const re = /[a-z]+/g;
  const result = {};
  domains.forEach((element) => {
    const dns = Array.from(element.matchAll(re));
    if (dns.length === 3) {
      if (result[`.${dns[2]}`] === undefined) result[`.${dns[2]}`] = 1;
      else result[`.${dns[2]}`] += 1;
      if (result[`.${dns[2]}.${dns[1]}`] === undefined) result[`.${dns[2]}.${dns[1]}`] = 1;
      else result[`.${dns[2]}.${dns[1]}`] += 1;
      if (result[`.${dns[2]}.${dns[1]}.${dns[0]}`] === undefined) result[`.${dns[2]}.${dns[1]}.${dns[0]}`] = 1;
      else result[`.${dns[2]}.${dns[1]}.${dns[0]}`] += 1;
    } else {
      if (result[`.${dns[1]}`] === undefined) result[`.${dns[1]}`] = 1;
      else result[`.${dns[1]}`] += 1;
      if (result[`.${dns[1]}.${dns[0]}`] === undefined) result[`.${dns[1]}.${dns[0]}`] = 1;
      else result[`.${dns[1]}.${dns[0]}`] += 1;
    }
  });
  return result;
}

module.exports = getDNSStats;
