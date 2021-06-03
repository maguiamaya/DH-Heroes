// npm init -y ...npm i express... despues creamos app.js
// 
const express = require("express");
const port = 3030;
const path = require("path"); // ayuda a construir rutas absolutas (las relativas se construyen a mano)
const views = path.join(__dirname, "views");
console.log(__dirname);
//console.log(express); // solo para ver q tenia express no es muy necesario
const app = express();
// estas 2 lineas siempre van!
//req ---> request(requerimiento)     res----> response (respuesta)
app.use(express.static("public")); // donde van a estar todos los recursos estaticos q vbamos a usar en el proyecto

app.get("/home", (req, res)=> res.sendFile(path.join(views, "index.html"))) //primer parametro la url: ruta raiz : localhost:3000
app.get("/babbage", (req, res)=> res.sendFile(path.join(views, "babbage.html")))
app.get("/berners-lee", (req, res)=> res.sendFile(path.join(views, "berners-lee.html")))
app.get("/clarke", (req, res)=> res.sendFile(path.join(views, "clarke.html")))
app.get("/hamilton", (req, res)=> res.sendFile(path.join(views, "hamilton.html")))
app.get("/hopper", (req, res)=> res.sendFile(path.join(views, "hopper.html")))
app.get("/lovelace", (req, res)=> res.sendFile(path.join(views, "lovelace.html")))
app.get("/turing", (req, res)=> res.sendFile(path.join(views, "turing.html")))




app.listen(port, () => console.log("servidor funcionando en el puerto " + port)) //puerto, callback arrow function, 



//antes de abrir algun archuivo importado debo instalar expres en mi proyecto para poder abrir el importe. con n
// npx nodemon -x para abrir nodemon (npx ejecuta. npm instala) 