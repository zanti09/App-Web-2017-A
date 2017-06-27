/**
 * Created by slema on 12/6/17.
 */
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/bienvenido', function (req, res) {
    res.send('Hello World!')
});

app.post('/informacion', function (req, res) {
    let information="";
    fs.readFile('Informacion.txt', 'utf8' ,function(err, data) {
        if (err) throw err;
        console.log(data)
        information += data;
    });
    res.send(information)
});

app.listen(8090, function () {
    console.log('Example app listening on port 8080!')
});