const express = require('express');
const conectarDB = require('./config/db');
const cors = require("cors");

// Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/libros', require('./routes/libro'));

app.listen(3000, () => {
    console.log('Servidor en linea');
});