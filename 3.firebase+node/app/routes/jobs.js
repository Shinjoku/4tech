'use strict';


const Job = require('../../model/job.js');

module.exports = app => {

  const jobsCollection = app.config.firebaseConfig.collection('jobs');


// GET
  app.get('/jobs', async (req, res) => {

      try {

        // Query para os jobs
        const docs = await jobsCollection.get();
        let jobs = [];

        // Leva os jobs para um vetor que será exibido ao user
        docs.forEach(doc => {
          jobs.push(extractJob(doc));
        });

        return res.send(jobs);

      } catch(error) {

        return res.status(500).send('Error');
      }
  });

  app.get('/jobs/:id', async (req, res) => {
      return res.send(jobs.find(el => el.id === req.params.id));
      job = await extractJob(jobsCollection().doc(req.params.id));
  });


// POST
  app.post('/jobs', async (req, res) => {
      try {

        // Query para cadastrar o JSON recebido
        const fbReturn = await jobsCollection.doc().set(req.body);

        if (fbReturn) return res.send('Succesfully added!');
        else throw Error;

      } catch (error) {
          return res.status(500).send('Eroooooooow');
      }
  });


// PUT
  app.put('/jobs/:id', async (req, res) => {
      try {
          if (!req.body) {
              return res.status(403).send('Para alterar um usuário, é necessário passar algum valor');
          }
          // let index = await jobs.findIndex(job => job.id === req.params.id);
          let job = jobsCollection.where('id', '==', req.body.id);

          if (job) {

              jobsCollection.doc(req.params.id).update(req.body);

              return res.send(`Vaga com o id ${req.params.id} alterada com sucesso`);
          }
          return res.send("nao foi encontrado vaga com esse id");
      } catch (error) {
          return res.status(500).send(error);
      }
  });


// DELETE
  app.delete('/jobs/:id', (req, res) => {
      try {
          let job = jobsCollection.doc(req.params.id);
          if (job){
            job.delete();
            return res.send(`A vaga com o id ${req.params.id} foi removida com successo`);
          }
          else return res.status(500).send(`Não foi possível deletar a vaga ${req.params.id}`);
      } catch (error) {
          return res.status(500).send('Ocorreu um erro interno');
      }
  });


  // Funções auxiliares
  const createJob = (obj) => new Job(
      obj.id,
      obj.name,
      obj.description,
      obj.skills,
      obj.salary,
      obj.area,
      obj.differentials,
      obj.isPcd,
      obj.isActive
  );
};

const extractJob = (job) => {
  let v = job.data();

  console.log(v);
  return {
    id: job.id,
    name: v.name,
    description: v.description,
    skills: v.skills,
    differentials: v.differentials,
    salary: v.salary,
    area: v.area,
    isPcd: v.isPcd,
    isActive: v.isActive
  };
};
