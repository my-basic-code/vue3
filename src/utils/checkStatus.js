export function checkStatus(key) {
  let status
  switch (key) {
    case 0:
      status = 'chưa thanh toán'
      break;
    case 1:
      status = 'đang chuẩn bị vận chuyển'
      break;
    case 2:
      status = 'đang vận chuyển'
      break;
    case 3:
      status = '배송완료' //'vận chuyển xong'
      break;
    case 4:
      status = '환불전' //'Chưa hoàn tiền'
      break;
    case 5:
      status = '환불완료' //'Đã hoàn'
      break;
    case 6:
      status = '교환신청' //'Đăng ký đổi'
      break;
    case 7:
      status = '교환 처리중' //'Đang xử lí đổi'
      break;
    case 8:
      status = 'Bảo lưu'
      break;
    case 9:
      status = '취소신청' //'Đã đăng kí hủy'
      break;
    case 10:
      status = '취소 처리 중' //'Đang xử lí hủy'
      break;
    case 11:
      status = '취소완료' //'Hoàn tất hủy'
      break;
    default:
      break;
  }
  return status
}