import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/navigation/Header/Header';
import Container from './components/page/Container/Container';
import Deck from './components/jobs/Deck/Deck';
import About from './components/About/About';
import SingleJob from './components/jobs/SingleJob/SingleJob';
import Login from './components/Login/Login';


class App extends Component {

  state = {
    loggedUser: JSON.parse(window.localStorage.getItem('user'))
  }


  loginHandler = (user) => {
    axios.post('/login', user)
    .then(res => {
      
      // Saving locally user infos
      window.localStorage.setItem('user', JSON.stringify(res.data.user));
      window.localStorage.setItem('token', res.data.token);

      this.setState({loggedUser: res.data.user})
    })
    .catch(err => alert('Login inválido!'));
  }

  logoutHandler = () => {
    window.localStorage.clear();
    this.setState({loggedUser: null});
  }

  getLoggedUser = () => {
    return this.state.loggedUser;
  }

  render() {

    if(this.getLoggedUser()){
      return (
        <div className="App">
          <Header logout={this.logoutHandler} userName={this.state.loggedUser.name}/>
          <Container>
            <Switch>
              <Route exact path='/' component={ Deck }></Route>
              <Route path='/about' component={ About }></Route>
              <Route path='/job/:id' component={ SingleJob }></Route>
            </Switch>
          </Container>
        </div>
      );
    }
    else return (
        <div className="App">
          <Header/>
          <Container>
            <Login login={this.loginHandler}/>
          </Container>
        </div>
      );
  }
}

export default App;
