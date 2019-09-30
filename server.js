const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport")

const users = require("./routes/api/users")
const reembolsoForm = require("./routes/api/formDisplay")


const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Configuración de Base de Datos
const db = require("./config/keys").mongoURI;

// Conexión a MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
//CRUD    
app.use("/api/reembolso", reembolsoForm);
//Mailing



const port = process.env.PORT || 5000; // NO OLVIDAR CAMBIAR POR LA URL AL MOMENTO DE DEPLOYAR
app.listen(port, () => console.log(`El servidor se encuentra arriba corriendo en el puerto ${port}`));