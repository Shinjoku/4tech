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

  putDataHandler = (event) => {
    let thisJob = {...this.state.newJob};
    thisJob['id'] = this.props.id;

    axios.put('/jobs', thisJob)
    .then()
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
            <input onChange={this.props.data === undefined ?
                (event) => this.changeValueHandler('name', event.target.value) 
              :
                this.props.data.name} className="field form-control" name="name" type="text" alt="Nome" placeholder="Nome do trabalho"/>
          </div>

          <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
            Descrição:
            <textarea onChange={this.props.data === undefined ?
              (event) => this.changeValueHandler('description', event.target.value)
            :
              this.props.data.description} className="field form-control" name="description" placeholder="Descreva o trabalho"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Habilidades necessárias:
            <textarea onChange={this.props.data === undefined ?
              (event) => this.changeValueHandler('skills', event.target.value)
            :
              this.props.data.skills} className="field form-control" name="skills" placeholder="Habilidades técnicas"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Diferenciais:
            <textarea onChange={this.props.data === undefined ?
              (event) => this.changeValueHandler('differentials', event.target.value)
            :
              this.props.data.differentials} className="field form-control" name="differentials" placeholder="Características peculiares"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Salário base:
            <input onChange={this.props.data === undefined ?
              (event) => this.changeValueHandler('salary', event.target.value)
            :
             this.props.data.salary} type="text" className="field form-control" name="salary" placeholder="Características peculiares"/>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Área:
            <select onChange={this.props.data === undefined ?
              (event) => this.changeValueHandler('area', event.target.value)
            :
              this.props.data.area} className="field form-control" name="area" placeholder="Área de interesse">
              <option disabled selected>Selecione uma área</option>
              <option value="Desenvolvimento">Desenvolvimento</option>
              <option value="Design">Design</option>
              <option value="Testes">Testes</option>
            </select>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-6 mb-3">
            Vaga para PCD<br/>
            <input onChange={this.props.data === undefined ?
            (event) => this.changeValueHandler('isPcd', event.target.value)
          :
            this.props.data.isPcd} type="checkbox" name="isPcd"/>
          </div>
        </div>
        <a className="btn btn-success" value="submit" onClick={this.props.type === "post" ? this.postDataHandler : this.putDataHandler}>Enviar</a>
      </form>
    </div>
  );
}

export default JobForm;
