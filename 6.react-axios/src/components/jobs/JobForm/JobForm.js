import React, { Component } from 'react';
import axios from 'axios';
import './JobForm.css';


class JobForm extends Component {

  state = {
    newJob: {}
  }

  postDataHandler = (event) => {
    let newJob = {
      ...this.state.newJob
    };

    axios.post('/jobs', newJob)
    .then(res => {
      newJob['id'] = res;
      this.props.addToDeck(newJob);
    })
    .catch(err => console.log(err));


    event.preventDefault();
  }

  changeValueHandler = (nameProp, value) => {
    let currentJob = this.state.newJob;
    currentJob[nameProp] = value;

    this.setState({ newJob: currentJob});
  }


  render = () => (
    <div>
      <form id="myForm">

        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
            Nome:
            <input onChange={(event) => this.changeValueHandler('name', event.target.value)} className="field form-control" name="name" type="text" alt="Nome" placeholder="Nome do trabalho"/>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
            Descrição:
            <textarea onChange={(event) => this.changeValueHandler('description', event.target.value)} className="field form-control" name="description" placeholder="Descreva o trabalho"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Habilidades necessárias:
            <textarea onChange={(event) => this.changeValueHandler('skills', event.target.value)} className="field form-control" name="skills" placeholder="Habilidades técnicas"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Diferenciais:
            <textarea onChange={(event) => this.changeValueHandler('differentials', event.target.value)} className="field form-control" name="differentials" placeholder="Características peculiares"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Salário base:
            <input onChange={(event) => this.changeValueHandler('salary', event.target.value)} type="text" className="field form-control" name="salary" placeholder="Características peculiares"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Área:
            <select onChange={(event) => this.changeValueHandler('area', event.target.value)} className="field form-control" name="area" placeholder="Área de interesse">
              <option disabled selected>Selecione uma área</option>
              <option value="Desenvolvimento">Desenvolvimento</option>
              <option value="Design">Design</option>
              <option value="Testes">Testes</option>
            </select>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Vaga para PCD<br/>
            <input onChange={(event) => this.changeValueHandler('isPcd', event.target.value)} type="checkbox" name="isPcd"/>
          </div>
        </div>
        <a className="btn btn-success" value="submit" onClick={this.postDataHandler}>Enviar</a>
      </form>
    </div>
  );
}

export default JobForm;
