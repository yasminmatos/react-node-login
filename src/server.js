const express = require('express');
const app = express();

const routes = require('./routes');

//avisando que vamos trabalhar com json
app.use(express.json());
//avisando que nossas rotas estão no routes
app.use(routes);

//criando primeira rota
app.get('/', (req, res) => {
    res.send('Funcionando');
});

//indicando uma porta
app.listen(3000, () =>{
    console.log('Escutando na porta 3000');
})
