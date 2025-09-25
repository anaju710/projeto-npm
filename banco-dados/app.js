const express = require('express');
const db = require('./database');

const app = express();


app.get('/',(req,res) => {
    res.send('Servidor rodando com MySQL conectado!');
});


app.get('/usuarios',(req,res) =>{
    db.query('SELECT * FROM usuarios',( err,results) => {
        if (err){
            return res.status(500).send('Erro na consulta: ' + err);
        }
    }
 res.json(results);
)
});

