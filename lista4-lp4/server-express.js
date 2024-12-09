/**
 * Exemplo de servidor que utiliza a biblioteca Express
 */

// importar a biblioteca
// instalar o pacote usando o comando: npm install express
const express = require('express');
const fs = require('fs');

// importar o body-parser para manipular os dados do corpo da requisição
const bodyParser = require('body-parser');

// configuração de acesso 
const localhost = '127.0.0.1';
const port = 8080;

// criação do servidor
const app = express();

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importar configurações de rotas
const veiculosRotas = require('./src/routes/veiculos');

//  raiz do servidor
app.get('/', (req, res) => {

 const arquivoHtml = fs.readFileSync('./src/pag/index.html');

  // responder com o código do arquivo .html
  res.status(200).end(arquivoHtml);

});

// configurar as rotas para veiculo
app.use('/veiculo', veiculosRotas);


// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));