const express = require('express');
const app = express();
app.use(cors());
app.use(express.json());

const fs = require('fs');
const profCarvalho = require('./utils.js');

const x = require("./utils.js")

app.get('/', (req, res) => {
    console.log(req.query)
    const response = x()
    // res.send(fs.readFileSync("pokeipsum.txt").toString());
    res.setHeader("Acess-Control-Allow-Origin", "*");
    res.send(response);
});


// POST EXIGE QUE TENHA BODY, ELE É USADO PARA QUANDO VAMOS CRIAR ALGUMA COISA(COMO UM USUÁRIO)
// NO BROWSER SÓ FUNCIONA GET, PARA TESTARMOS O MÉTODO POST FAZEMOS UM CÓD OU UMA APLICAÇÃO (POSTMAN)

app.post("/", (req, res) => {
    console.log(req.body)
    
    const pokemon = req.body.pokemon
    const texto = profCarvalho(pokemon)

    res.send(texto)
})

app.listen(1234, () => {
    console.log("server running");
})