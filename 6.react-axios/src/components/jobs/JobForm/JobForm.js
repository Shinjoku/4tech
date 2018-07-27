import React, { Component } from 'react';
import axios from 'axios';

import './JobForm.css';


class JobForm extends Component {

  
  constructor(props){
    super(props);

    // Initially, the content should be empty, cuz the form is in the home page with no infos
    let content = {};

    // But if it's in the SingleJob component, then those infos should be collected
    if(this.props.data !== undefined)
      content = this.props.data

    // Then state becomes the result of content, adapting to every situation.
    this.state = {
      newJob: content
    };

  }

  // HANDLERS

  // Will handle every POST requested by Home page
  postDataHandler = (event) => {

    // Recover the data from newJob but without the reference, using the spread operator
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

  // Handle every PUT requested by SingleJob page
  putDataHandler = (event) => {
    // Same as in POST data handler
    let thisJob = {...this.state.newJob};
    thisJob['id'] = this.state.newJob.id;

    axios.put('/jobs/' + thisJob.id, thisJob)
      .then(res => this.props.editJob())
      .catch(err => console.log(err));

    event.preventDefault();
  }

  // "Forces" the two-way data-binding, allowing the state to get infos in real time
  changeValueHandler = (nameProp, value) => {
    let currentJob = this.state.newJob;
    currentJob[nameProp] = value;

    this.setState({ newJob: currentJob});
  }

  // LIFECYCLE METHODS
  render = () => {
    let options;

    if(this.state.newJob.area !== undefined){
      options = (
        <select onChange={(event) => this.changeValueHandler('area', event.target.value)} className="field form-control" name="area" placeholder="Área de interesse">
          <option default value={this.state.newJob.area}>{this.state.newJob.area}</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Testes">Testes</option>
        </select>
      )
    }
    else {
      options =( 
        <select onChange={(event) => this.changeValueHandler('area', event.target.value)} className="field form-control" name="area" placeholder="Área de interesse">
          <option disabled selected>Selecione uma área</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Testes">Testes</option>
        </select>
      )
    }
    return (
    <div>
      <form id="myForm">

        <div className="row">

          <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
            Nome:
            <input value={this.state.newJob.name} onChange={(event) => this.changeValueHandler('name', event.target.value)} className="field form-control" name="name" type="text" alt="Nome" placeholder="Nome do trabalho"/>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
            Descrição:
            <textarea value={this.state.newJob.description} onChange={(event) => this.changeValueHandler('description', event.target.value)} className="field form-control" name="description" placeholder="Descreva o trabalho"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Habilidades necessárias:
            <textarea value={this.state.newJob.skills} onChange={(event) => this.changeValueHandler('skills', event.target.value)} className="field form-control" name="skills" placeholder="Habilidades técnicas"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Diferenciais:
            <textarea value={this.state.newJob.differentials} onChange={(event) => this.changeValueHandler('differentials', event.target.value)} className="field form-control" name="differentials" placeholder="Características peculiares"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Salário base:
            <input value={this.state.newJob.salary} onChange={(event) => this.changeValueHandler('salary', event.target.value)} type="text" className="field form-control" name="salary" placeholder="Características peculiares"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Área:
            { options }
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Vaga para PCD<br/>
            <input value={this.state.newJob.isPcd} onChange={(event) => this.changeValueHandler('isPcd', event.target.value)} type="checkbox" name="isPcd"/>
          </div>
        </div>
        <a className="btn btn-success" value="submit" onClick={this.props.type === "post" ? this.postDataHandler : this.putDataHandler}>Enviar</a>
      </form>
    </div>
    )
  };
}

export default JobForm;
