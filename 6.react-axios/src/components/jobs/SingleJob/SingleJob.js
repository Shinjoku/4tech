import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SingleJob.css';

class SingleJob extends Component {

  constructor(props) {
    super(props);
    this.state = {
      job: {},
      exclusion: false
    }
  }

  componentDidMount(){

    axios.get('/jobs/' + this.props.match.params.id )
      .then(res => this.setState({ job: res.data }))
      .catch(err => console.log(err));
  }

  // Aux Functions

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

  render = () => {
    if(this.state.exclusion)
      return <Link className="btn btn-sm btn-info" to='/'>Voltar para a página principal</Link>

    return (
      <div>
        <div className="highlight-img"></div>
        <section className="job-highlight">
            <h1>{this.state.job.name}</h1>
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
            <a className="btn btn-sm btn-warning" onClick={this.props.editCardHandler}><i className="fas fa-edit"></i></a>
            <a className="btn btn-sm btn-danger" onClick={() => this.deleteJob(this.state.job.id)}><i className="fas fa-trash-alt"></i></a>
        </section>
      </div>
    )
  }
}

export default SingleJob;