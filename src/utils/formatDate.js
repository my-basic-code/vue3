export function formatDate(data) {
  const date = new Date(data)
  var year = String(date.getFullYear()).slice(2)
  var month = String(date.getMonth() + 1).padStart(2, '0');
  var day = String(date.getDate()).padStart(2, '0');
  return year + '.' + month + '.' + day;
}