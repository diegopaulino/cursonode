const express = require ('express');

const app = express();

var teste = 'Testando';

app.get('/', (req, res) => {
    res.send('Hello Diego');
});

app.listen(3001);