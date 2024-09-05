import { createI18n } from "vue-i18n";
import en from '../locales/en'
import { settings } from "@/config/settings";
import vi from '../locales/vi'

const { i18n } = settings

/**
 * Tạo một đối tượng Vue I18n và cấu hình nó với ngôn ngữ mặc định,
 * ngôn ngữ dự phòng và tin nhắn dịch.
 *
 * @returns {Object} Đối tượng Vue I18n.
 */
export default createI18n({
  /**
   * Ngôn ngữ mặc định để sử dụng.
   */
  locale: i18n,

  /**
   * Ngôn ngữ để sử dụng nếu ngôn ngữ được yêu cầu không có sẵn.
   */
  fallbackLocale: i18n,

  /**
   * Chế độ thừa kế (legacy mode).
   */
  legacy: false,

  /**
   * Kiểm tra nếu phải điều khiển Vue I18n vào ứng dụng Vue tại toàn cầu.
   */
  globalInjection: true,

  /**
   * Đối tượng chứa tin nhắn dịch cho các ngôn ngữ khác nhau.
   * Các khóa của đối tượng là các mã ngôn ngữ, và các giá trị là tin nhắn dịch
   * cho ngôn ngữ đó.
   */
  messages: {
    /**
     * Tin nhắn dịch cho ngôn ngữ tiếng Anh.
     */
    en,

    /**
     * Tin nhắn dịch cho ngôn ngữ tiếng Việt.
     */
    vi
  }
});
