export function formatMoney(money, includeSeparator = true) {
  // Kiểm tra nếu số tiền không phải là một số hoặc không hợp lệ
  if (isNaN(money) || !isFinite(money)) {
    return "Invalid input";
  }

  // Làm tròn giá trị số tiền với 2 chữ số thập phân
  const roundedMoney = Number(money).toFixed(0);

  // Định dạng số tiền thành chuỗi và thêm dấu phân cách hàng nghìn nếu được yêu cầu
  const separator = includeSeparator ? "," : "";
  const formattedMoney = roundedMoney.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  // Trả về số tiền đã được định dạng và làm tròn
  return formattedMoney;
}