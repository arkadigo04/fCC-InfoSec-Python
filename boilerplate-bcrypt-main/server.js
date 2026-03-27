'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';

const bcrypt = require('bcrypt');

//START_ASYNC -do not remove notes, place code between correct pair of notes.

//START_ASYNC -do not remove notes, place code between correct pair of notes.
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
  // 1. Imprimimos el hash generado para verlo
  console.log(hash); 
  
  // 2. DENTRO de la función, comparamos la contraseña original con el hash recién creado
  bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
    // 3. Imprimimos el resultado de la comparación (debería ser true)
    console.log(res); 
  });
});
//END_ASYNC
//END_ASYNC

//START_SYNC



//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
