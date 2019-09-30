const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");


// Carga los archivos de validación
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Carga el modelo de usuario
const User = require("../../models/User");

router.post("/add", (req,res) => {
  res.render("/register")
})

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
    // Validacion form
  const { errors, isValid } = validateRegisterInput(req.body);
  // Checks de validación
    if (!isValid) {
      return res.status(400).json(errors);
    }
  User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "El email ya existe" });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hashea password para guardar en DB
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });


  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Validar form
  const { errors, isValid } = validateLoginInput(req.body);
  // Validar check
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
    const password = req.body.password;
  // BUscar usuario por email
    User.findOne({ email }).then(user => {
      // Revisar si usuario existe
      if (!user) {
        return res.status(404).json({ emailnotfound: "Email no existe" });
      }
  // Checar password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // Usuario que ya ha hecho match
          // Crear JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };
  // Firmarse con token
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 315569 // duración del token
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrecto" });
        }
      });
    });
  });

  module.exports = router;