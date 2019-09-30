const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convierte espacios vacios en strings vacios para funciones validator
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
// Check de nombre
  if (Validator.isEmpty(data.name)) {
    errors.name = "El campo es requerido";
  }
// Check de email
  if (Validator.isEmpty(data.email)) {
    errors.email = "El campo es requerido";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email inválido";
  }
// Check de password
  if (Validator.isEmpty(data.password)) {
    errors.password = "El campo es requerido";
  }
if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Es necesario confirmar el password";
  }
if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "El password debe tener mínimo 6 caracteres";
  }
if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Los password deben coincidir";
  }
return {
    errors,
    isValid: isEmpty(errors)
  };
};