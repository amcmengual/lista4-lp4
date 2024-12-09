// importart módulo express
const express = require('express');



// função do express para manipular as rotas
const rotas = express.Router();

// POST
// rota para acesar o método POST para veículo
rotas.post('/', (req, res) => {


novoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    anomodelo: req.body.anomodelo,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
}

  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'O Veículo foi cadastrado.',
    veiculo: novoVeiculo
  });
});


// PUT
rotas.put('/', (req, res) => {

const atualizaVeiculo = {
}

  res.status(200).send({
    mensagem: 'dados do veiculo atualizados.',
    veiculo: atualizaVeiculo
  });
});


// DELETE
// rota para excluir um veículo
rotas.delete('/:idveiculo', (req, res) => {

const idVeiculo = req.params.idveiculo;


  res.status(202).send({
    mensagem: `Veículo: ${idVeiculo} foi excluído.`
  });
});



// exportar toda a configuração das rotas
module.exports = rotas;