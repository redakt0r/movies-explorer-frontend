/* eslint-disable no-useless-escape */
function handleValidationMessage(target) {
  const { name, value, validity } = target;
  let errors = {};

  if (!validity.patternMismatch) {
    return (errors = { [name]: target.validationMessage });
  } else if (name === "email") {
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)) {
      errors = { [name]: "Введите E-mail в формате example@mail.com" };
    }
  } else if (name === "name") {
    if (!/[a-zA-Zа-яА-Я\sёЁ\-]{2, 30}/.test(value)) {
      errors = {
        [name]:
          "Имя длинной от 2 до 30 символов. Разрешены латиница, кирилица, пробел, дефис.",
      };
    }
  }

  return errors;
}

export default handleValidationMessage;
