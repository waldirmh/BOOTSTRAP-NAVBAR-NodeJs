// const express = require("express");
import express from "express"; //es equivalente a const , pero antes usamos   "type":"module",
// import ejs from "ejs"; // importamos los modulos de ejs
import { dirname, join } from "path"; // para no estar utilizando los rutas raices
import { fileURLToPath } from "url";
import indexRoutes from "../routes/index.js"; // importamos el index de routes
const app = express();

const __dirname = dirname(fileURLToPath(import.meta.url)); //para decirle que es algo interno de nuestra app

app.set("views", join(__dirname, "views")); // le decimos - aqui estan las vistas
// con esto le decimos voy a utilizar ejs
app.set("view engine", "ejs"); // sirve para validar los views del fronted
app.use(indexRoutes); // utilizamos el index.js de routes
app.use(express.static(join(__dirname, "public"))); //para validar la ruta public

app.listen(process.env.PORT || 3000); // para heroku
console.log("server is listening on port",process.env.PORT || 3000);
