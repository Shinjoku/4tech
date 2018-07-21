import React from 'react';
import './JobForm.css';


const JobForm = () => (
  <div>
    <a class="btn btn-primary mt-3" data-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="collapseExample">
      Novo job
    </a>
    <div class="collapse" id="forms">
      <br/>
      <div class="card card-body">
        <form id="myForm">

          <div class="row">

            <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
              Nome:
              <input class="field" name="name" type="text" alt="Nome" placeholder="Nome do trabalho"/>
            </div>

            <div class="col-sm-12 col-md-12 col-lg-12 mb-3">
              Descrição:
              <textarea class="field" name="description" placeholder="Descreva o trabalho"></textarea>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              Habilidades necessárias:
              <textarea class="field" name="habilities" placeholder="Habilidades técnicas"></textarea>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              Diferenciais:
              <textarea class="field" name="diferences" placeholder="Características peculiares"></textarea>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              Salário base:
              <input type="text" class="field" name="salary" placeholder="Características peculiares"/>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              Área:
              <select class="field" name="area" placeholder="Área de interesse">
                <option default value="">Selecione uma área</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Design">Design</option>
                <option value="Testes">Testes</option>
              </select>
            </div>

            <div class="col-sm-6 col-md-6 col-lg-6 mb-3">
              <input type="checkbox" name="pcd"/>
              Vaga para PCD
            </div>
          </div>

          <a class="btn btn-success" value="submit" onclick="getJob();" href="#">Enviar</a>
        </form>
      </div>
    </div>
    <br/>
  </div>
);

export default JobForm;
