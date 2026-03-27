const express = require('express');
const app = express();
const helmet = require('helmet');
/*
app.use(helmet());

app.use(helmet.hidePoweredBy());

app.use(helmet.frameguard({action : 'deny'}));

app.use(helmet.xssFilter()); //Para detectar insercciones del usuario maliciciosas para ataques XSS (Comando de sitio cruzado)

app.use(helmet.noSniff()); //Ver la cabeceera del archivo

app.use(helmet.ieNoOpen()); //No abrir HTML malicioso

const timeInSeconds = 90*24*60*60;
app.use(helmet.hsts({maxAge: timeInSeconds, force:true})); //Solicitar https

app.use(helmet.dnsPrefetchControl()); //Desactivar dns para ser mas seguro

app.use(helmet.noCache()); //intentar desactivar la cache del navegador del cliente 

app.use(helmet.contentSecurityPolicy({directives:{defaultSrc:["'self'"],scriptSrc:["'self'", "trusted-cdn.com"]}})); //Permitir x ficheros pero rastrear para evitar XSS, seguimientos, marcos malos...

*/

//Todo se puede hacer aqui 
app.use(helmet({
  frameguard: {         // Configura una de las reglas que viene por defecto
    action: 'deny'
  },
  contentSecurityPolicy: {    // Enciende el CSP (que venía apagado) y le da la lista blanca
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ['style.com'],
    }
  },
  dnsPrefetchControl: false     // Apaga una regla que venía encendida por defecto
}));
















module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
