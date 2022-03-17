'use strict';
import express from 'express'
const app = express()

app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    res.render('index');
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/hello', function (req, res) {
    res.send('hello world')
});

app.get('/catinfo', (req, res) => {
    const cat = {
        name: 'Frank',
        birthdate: '2010-12-25',
        weight: 5,
    };
    res.json(cat);
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))