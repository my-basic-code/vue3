export function validateForm(formData, validationRules) {
  const errors = {};
  for (const fieldName in validationRules) {
    const rules = validationRules[fieldName];
    const value = formData[fieldName];
    rules.forEach(rule => {
      if (rule.required && (!value || value.trim() === "")) {
        errors[fieldName] = rule.message || `Vui lòng nhập ${fieldName}.`;
      } else if (rule.pattern && value && !rule.pattern.test(value)) {
        errors[fieldName] = rule.message || `${fieldName} không hợp lệ.`;
      } else if (rule.min && value && value.length < rule.min) {
        errors[fieldName] = rule.message || `${fieldName} phải có ít nhất ${rule.min} ký tự.`;
      } else if (rule.max && value && value.length > rule.max) {
        errors[fieldName] = rule.message || `${fieldName} không được quá ${rule.max} ký tự.`;
      }
    });
  }
  return errors;
}

export const onBlurInput = (inputName, formData, validationRules) => {
  const errors = validateForm(formData, validationRules);
  let message
  if (Object.keys(errors).length > 0) {
    message = errors[inputName]
  }
  return message
}