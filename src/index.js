import express from 'express';
import morgan from 'morgan';
import config from './config.js';

const app = express();

// Middleware de Morgan para registrar solicitudes HTTP
app.use(morgan('dev'));

// Ruta principal
app.get('/', (req, res) => {
  const message = config.message;
  res.send(`Hola, ${message}`);
});

// Iniciar el servidor
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
