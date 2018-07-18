const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
let vagas = require('./config/vagas.js');
const Vaga = require('./model/vaga.js');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// GET

// Rota principal
app.get('/', async (req, res) => {
  return res.send(`Damn, you're on the main page!`);
});

// Rota para resgatar todas as vagas
app.get('/vagas', async (req, res) => {
  return res.send(vagas);
});

// Rota para resgatar uma vaga
app.get('/vagas/:id', async (req, res) => {

  let id = req.params.id;
  let target = getVaga(id);
  console.log(id);

  if(target) return res.send(target);
  return res.status(500).send('ID não cadastrado');
});

// POST

// Cadastra uma nova vaga no "bd"
app.post('/vagas', async (req, res) => {
  try {

    let vagasLength = vagas.length;
    if(!getVaga(req.body.id)){
      let vaga = createVaga(req.body);
      vagas.push(vaga);
      if(vagas.length > vagasLength) return res.send('Added');
    }
    return res.status(500).send('ID já cadastrado');
  } catch(error) {
    return res.status(500).send('Internal Error');
  }
});

app.put('/vagas/:id', async (req, res) => {
  let target;
  let id = req.params.id;


  target = getVaga(id);

  try {
    if(target){
      let vaga = createVaga(req.body);
      let i = vagas.indexOf(target);
      vagas[i] = vaga;
      return res.send(vaga[i]);
    }
    return res.status(500).send('ID Não cadastrado');
  } catch(error) {
    return res.status(500).send('Internal Error');
  }
});

// Deleta um cadastro
app.delete('/vagas/:id', async(req, res) => {
  let id = req.params.id;
  let target = getVaga(id);
  let jobIndex = vagas.indexOf(target);


  if(target){
    vagas.splice(jobIndex);
    return res.send('Cadastro removido');
  }else
    return res.status(500).send('ID não cadastrado');
});



// Mantém o servidor escutando a porta selecionada
app.listen(port, () => {
  console.log(`A mágica ta rolando na porta ${port}`);
});

// Cria vaga usando o req.body
const createVaga = (obj) => new Vaga(
  obj.id, obj.name, obj.description,
  obj.skills, obj.salary, obj.area,
  obj.differentials, obj.isPcd, obj.isActive
)

// Procura uma vaga no banco
const getVaga = (id) => {

  for(let i = 0; i < vagas.length; i++){
    if(vagas[i].id == id){
      return vagas[i];
    }
  }

  return null;
}
