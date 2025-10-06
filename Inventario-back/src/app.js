const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bodegasRoutes = require('./routes/bodegas.route');
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bodegas', bodegasRoutes);

module.exports = app;