/**
 * Format the given data into a date string.
 *
 * @param {any} data - The data to format into a date string.
 * @return {string} The formatted date string.
 */
export function formatDate(data) {
  const date = new Date(data)
  var year = String(date.getFullYear()).slice(2)
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');
  return year + '.' + month + '.' + day;
}