export function formatPhone(phone) {
  // Xóa dấu "-"
  phone = phone.replace(/\D/g, '');
  phone = phone.replace(/^0/, function (match) {
    return match.replace('0', '84');
  });
  return phone
}

export function formatPhone2(phone) {
  // Xóa dấu "-"
  phone = phone.replace(/\D/g, '');
  phone = phone.replace(/^84/, function (match) {
    return match.replace('84', '0');
  });
  return phone
}