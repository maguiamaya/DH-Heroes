// npm init -y ...npm i express... despues creamos app.js
const express = require("express");

//console.log(express); // solo para ver q tenia express no es muy necesario

const app = express();
// estas 2 lineas siempre van!
app.listen(3000, () => console.log("servidor funcionando en el puerto 3000"),  ) //puerto, callback arrow function, 