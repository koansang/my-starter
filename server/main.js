// const express = require('express');
import express from 'express';
import path from 'path';

const app = express();
const port = 3300;

app.use('/', express.static(path.join(__dirname, '/public')));

app.set('views', __dirname + '/public');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html');
})

app.get('/hello', (req, res) => {
    return res.send('Hello CodeLab');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});