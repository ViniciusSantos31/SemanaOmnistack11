const express = require('express');
const routes = require('./routes');
const cors = require('cors');

/*
Métodos HTTP

GET - Buscar uma informação do back-end
POST - Criar uma informação do back-end
PUT - ALterar uma informação do back-end
DELETE - Deletar uma informação do bakc-end

*/

const app = express();

app.use(cors());

app.use(express.json());
app.use(routes);

app.listen(3333);