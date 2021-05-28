// npm init -y ...npm i express... despues creamos app.js
const express = require("express");
const port = 3000;

//console.log(express); // solo para ver q tenia express no es muy necesario

const app = express();
// estas 2 lineas siempre van!
app.listen(port, () => console.log("servidor funcionando en el puerto " + port)) //puerto, callback arrow function, 