const express = require('express');
const { obterVeiculos, incluirVeiculo } = require('./repositorio/bancoDados');


const server = express();

//Habilita o json
server.use(express.json());

server.get('/', async (req, res) => {
    const veiculos = await obterVeiculos()
    res.json(veiculos);
})

server.post('/veiculos', async (req, res) => {
    const {modelo, cor, placa, tipo} = req.body
    
    const resposta = await incluirVeiculo(placa,modelo, cor, tipo)
   
    if(resposta.affectedRows > 0)
    {
        res.json({msg: 'Ok'})
    }
    else{
         res.json({msg: 'Não cadastrado!'})
    }
   
})

server.listen(3000, () => {
    console.log('Servidor Online')
});