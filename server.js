const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config( { path: './.env' } );

app.use('/', require('./routes/routes'));

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


