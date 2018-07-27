import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './SingleJob.css';
import JobForm from '../JobForm/JobForm';


// Shows and allows the user to edit all the job fields
class SingleJob extends Component {

  constructor(props) {
    super(props);

    // Job        represents the job that must be shown
    // exclusion  represents if the card has been deleted
    // editing    represents the edit-mode state
    this.state = {
      job: {},
      exclusion: false,
      editing: false
    }
  }

  // AUX METHODS

  editJob = () => {
    this.setState({ editing: !this.state.editing });
  }

  deleteJob = (id) => {
    let confirm = window.confirm('Tem certeza de deseja excluir o job?');

    if(confirm){
      axios.delete('/jobs/' + id)
        .then(res => {
          window.alert('Job excluído.');
          this.setState({exclusion: true})
        })
        .catch(err => console.log(err));
    }
  }

  // LIFECYCLE METHODS

  componentDidMount(){

    axios.get('/jobs/' + this.props.match.params.id )
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.log(err));
  }

  render = () => {

    let content;

    // If the card has been deleted, the user must return to the main page
    if(this.state.exclusion)
      return <Link className="btn btn-sm btn-info" to='/'>Voltar para a página principal</Link>

    // If edit-mode is on, the content should be a form.
    //  Otherwise, it'll be a simple exhibition of the job data
    if(!this.state.editing) {
      content = (
        <div>
          <p>
            <b>Descrição:<br/></b>
            { this.state.job.description }
          </p>
          <p>
            <b>Área:<br/></b>
            { this.state.job.area }
          </p>
          <p>
            <b>Habilidades desejadas:<br/></b>
            { this.state.job.skills }
          </p>
          <p>
            <b>Diferenciais:</b>
            { this.state.job.differentials }
          </p>
          <p>
            <b>Salário:<br/></b>
            { this.state.job.salary }
          </p>
        </div>
      );
    } 
    else {
      content = <JobForm data={this.state.job} editJob={this.editJob}/>;
    }

    return (
      <div>
        <div className="highlight-img"></div>
        <section className="job-highlight">
            
            <h1 className="mb-0 text-center">{this.state.job.name}</h1>
            <p className="text-center">
              <a className="title-options btn btn-sm btn-warning" onClick={() => this.editJob()}><i className="fas fa-edit"></i></a>
              <a className="title-options btn btn-sm btn-danger" onClick={() => this.deleteJob(this.state.job.id)}><i className="fas fa-trash-alt"></i></a>
            </p>
            { content }
        </section>
      </div>
    )
  }
}

export default SingleJob;