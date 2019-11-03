const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3201;

const phoneBl = require('./phone-bl');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/phone', (req, res) => {
    phoneBl.getAllPhones(function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});


app.get('/phone/:age', (req, res) => {
    phoneBl.getphone(req.param.age, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});


app.post('/phone', (req, res) => {
    phoneBl.createRunner(req.body, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});


app.put('/phone/:age', (req, res) => {
    phoneBl.updateRunner(req.body, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.status(200).send();
        }
    })
});


app.delete('/phone/:age', (req, res) => {
    phoneBl.deleteRunner(req.params.age, function (e, data) {
        if (e) {
            return res.status(500).send();
        } else {
            return res.send(data);
        }
    })
});

app.listen(PORT, () =>
    console.log(`Example app listening on port ${PORT}!`),
);