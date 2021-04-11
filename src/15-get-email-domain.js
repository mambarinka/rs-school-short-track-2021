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
  const regex = /@[-\w]+\.\w+/gm;
  const result = email.match(regex);
  return String(result).slice(1);
}

module.exports = getEmailDomain;
