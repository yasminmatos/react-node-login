const express = require('express');

const routes = express.Router();

//criando objeto de user já que não teremos banco
const users = [{
    id: 1,
    nome: 'Yasmin',
    email: 'teste@gmail.com',
    senha: '123456'
}]

routes.post('/login', (req, res) => {
    //const { email, senha } = req.body;
    const dados = req.body;

    res.send(`Email: ${dados.email}`);

});

module.exports = routes;