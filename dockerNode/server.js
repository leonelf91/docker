const express = require('express');
const path = require('path');

const app = express();

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

app.use(express.static(__dirname+'/dist/facturacion'));

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/facturacion/index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
