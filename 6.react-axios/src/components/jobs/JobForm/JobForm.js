import React from 'react';
import './JobForm.css';


const JobForm = () => (
  <div>
    <form id="myForm">

      <div className="row">

        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
          Nome:
          <input className="field form-control" name="name" type="text" alt="Nome" placeholder="Nome do trabalho"/>
        </div>

        <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
          Descrição:
          <textarea className="field form-control" name="description" placeholder="Descreva o trabalho"/>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
          Habilidades necessárias:
          <textarea className="field form-control" name="habilities" placeholder="Habilidades técnicas"/>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
          Diferenciais:
          <textarea className="field form-control" name="diferences" placeholder="Características peculiares"/>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
          Salário base:
          <input type="text" className="field form-control" name="salary" placeholder="Características peculiares"/>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
          Área:
          <select className="field form-control" name="area" placeholder="Área de interesse">
            <option default value="">Selecione uma área</option>
            <option value="Desenvolvimento">Desenvolvimento</option>
            <option value="Design">Design</option>
            <option value="Testes">Testes</option>
          </select>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
          Vaga para PCD<br/>
          <input type="checkbox" name="pcd"/>
        </div>
      </div>

      <a className="btn btn-success" value="submit" href="">Enviar</a>
    </form>
  </div>
);

export default JobForm;
