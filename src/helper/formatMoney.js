/**
 * Formats the given money value into a string with optional thousands separator.
 *
 * @param {number} money - The money value to be formatted.
 * @param {boolean} [includeSeparator=true] - Whether to include a thousands separator in the formatted string. Defaults to true.
 * @return {string} The formatted money value as a string.
 */
export function formatMoney(money, includeSeparator = true) {
  if (isNaN(money) || !isFinite(money)) {
    return "Invalid input";
  }
  // Làm tròn giá trị số tiền với 2 chữ số thập phân
  const roundedMoney = Number(money).toFixed(0);
  // Định dạng số tiền thành chuỗi và thêm dấu phân cách hàng nghìn nếu được yêu cầu
  const separator = includeSeparator ? "," : "";
  const formattedMoney = roundedMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
  return formattedMoney;
}