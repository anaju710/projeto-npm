const mysql = require ('mysql2/promise')

const connecion = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'estacionamento',
    password:''
})

 async function obterVeiculos()
{
    const sql = 'select * from veiculos';
    const [rows, fields] = await connecion.execute(sql);

    return rows;
}

 async function incluirVeiculo(placa,modelo,cor,tipo)
{
    const sql = 'insert into veiculo (placa,modelo,cor,tipo) values (?,?,?,?)';
   const [result] = await connecion.execute(sql[placa,modelo,cor,tipo])

}