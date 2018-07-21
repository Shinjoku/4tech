import React from 'react';
import './JobForm.css';


const JobForm = () => (
  <div>
    <a className="btn btn-primary mt-3" data-toggle="collapse" href="forms" role="button" aria-expanded="false" aria-controls="collapseExample">
      Novo job
    </a>
    <div className="collapse" id="forms">
      <br/>
      <div className="card card-body">
        <form id="myForm">

          <div className="row">

            <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
              Nome:
              <input className="field" name="name" type="text" alt="Nome" placeholder="Nome do trabalho"/>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
              Descrição:
              <textarea className="field" name="description" placeholder="Descreva o trabalho"></textarea>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
              Habilidades necessárias:
              <textarea className="field" name="habilities" placeholder="Habilidades técnicas"></textarea>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
              Diferenciais:
              <textarea className="field" name="diferences" placeholder="Características peculiares"></textarea>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
              Salário base:
              <input type="text" className="field" name="salary" placeholder="Características peculiares"/>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
              Área:
              <select className="field" name="area" placeholder="Área de interesse">
                <option default value="">Selecione uma área</option>
                <option value="Desenvolvimento">Desenvolvimento</option>
                <option value="Design">Design</option>
                <option value="Testes">Testes</option>
              </select>
            </div>

            <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
              <input type="checkbox" name="pcd"/>
              Vaga para PCD
            </div>
          </div>

          <a className="btn btn-success" value="submit" href="">Enviar</a>
        </form>
      </div>
    </div>
    <br/>
  </div>
);

export default JobForm;
