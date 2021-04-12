/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const re = RegExp(/@[a-z]+.+/);
  const result = email.match(re)[0];
  return result.slice(1);
}
module.exports = getEmailDomain;
