const express = require('express');
const cors = require('cors');
require('dotenv').config();

const productosRoutes = require('./routes/productos.route');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/productos', productosRoutes);

module.exports = app;