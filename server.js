const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const app = express();

app.use('/', expressStaticGzip(__dirname + '/', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'], 
    ensureGzipedFiles: true 
}));

app.listen(5500, () => console.log('Serveur sur http://127.0.0.1:5500'));

//pour lancer serveur local node server.js et aller http://127.0.0.1:5500

