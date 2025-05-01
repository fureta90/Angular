// server/server.js

const express = require('express');
const path = require('path');

const app = express();

// Directorio del build de Angular
const angularAppPath = path.join(__dirname, '../login-app');

// Servir archivos estáticos
app.use(express.static(angularAppPath));

// Cualquier ruta redirige al index.html de Angular
app.get('*', (req, res) => {
  res.sendFile(path.join(angularAppPath, 'index.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
