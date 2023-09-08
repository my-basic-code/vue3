export function formatMoney(money) {
  // Kiểm tra nếu số tiền không phải là một số
  if (isNaN(money)) {
    return "Invalid input";
  }
  // Định dạng số tiền thành chuỗi và thêm dấu phân cách hàng nghìn
  const formattedMoney = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // Trả về số tiền đã được định dạng
  return formattedMoney;
}