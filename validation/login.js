const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
// Convertir campos vacíos en string vacíos
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
// Check de email
  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo es requerido";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email es inválido";
  }
// Check de password
  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo es requerido";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};