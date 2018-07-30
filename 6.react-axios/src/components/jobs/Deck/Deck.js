import React, { Component } from 'react';
import axios from 'axios';

import Card from '../Card/Card';
import Loading from '../../navigation/Loading/Loading';
import JobForm from '../JobForm/JobForm';
import Collapse from '../../hoc/Collapse/Collapse';


class Deck extends Component {

  // Deck       represents the collection of cards that will be loading
  // IsLoading  represents if the Promise has been answered yet
  state = {
    deck: [],
    isLoading: true
  }

  // HANDLERS METHODS

  // Includes a new card on the deck for every submit on the form
  addItemToDeck = (newItem) => {
    let currentJobs = this.state.deck;

    currentJobs.push(newItem);
    this.setState({jobs: currentJobs});
  }

  // Removes a selected card for every delete on the Deck
  removeCardHandler = (cardId, cardName) => {

    const axiosConfig = {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token')
      }
    }

    if(window.confirm(`Excluir o card "${cardName}" ?`)) {
      this.deleteJob(cardId, axiosConfig);
    }
    else alert('Card mantido');
  }


  // LIFECYCLE METHODS

  componentDidMount() {
    this.getJobs();
  }

  render() {

    if(this.state.isLoading === true){
        return ( <Loading/> );
    }
    // Shuffle Cards
    let jobsFound = [];

    jobsFound = this.state.deck.map( (job, index) => {
        return (

            <Card
              key={index}
              id={job.id}
              name={job.name}
              description={job.description}
              area={job.area}
              salary={'R$ ' + job.salary + '.00'}
              removeCardHandler={() => this.removeCardHandler(job.id, job.name)}
            />
        )
      }
    );

    return (
      <div>
        <Collapse>
          <JobForm
          addToDeck={this.addItemToDeck}
          type='put'/>
        </Collapse>
        <div className="row justify-content-md-center mt-3">
          { jobsFound }
        </div>
      </div>
    );
  }


  // AUX METHODS

  getJobs = async () => await
    axios.get('/jobs')
      .then(res => this.setState({deck: res.data, isLoading: false}))
      .catch(err => console.log(err));


  deleteJob = async (id, axiosConfig) => await
    axios.delete('/jobs/' + id, axiosConfig)
      .then(res => {
        let vagas = this.state.deck;
        const indexRemoved = vagas.findIndex(item => item.id === id);

        vagas.splice(indexRemoved, 1);
        this.setState({deck: vagas});
      })
      .catch(err => console.log(err));

}

export default Deck;
