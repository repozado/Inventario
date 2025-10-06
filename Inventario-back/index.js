const app  = require('./src/app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
});

const app2  = require('./src/app2');
const PORT2 = process.env.PORT2 || 3001;

app2.listen(PORT2, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT2}`)
});