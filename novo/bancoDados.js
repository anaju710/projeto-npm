const mysql = require ('mysql2/promise')

const connecion = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'estacionamento',
    password:''
})

function obterVeiculos()
{
    connecion.execute('select * from veiculos')
}