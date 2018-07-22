import React, { Component } from 'react';
import './Card.css';

class Card extends Component{

  divClass = "col-sm-12 col-md-6 col-lg-4 mb-3";

  hideContent = () => {
    this.divClass = "fadeOutLeft";
    this.props.removeCardHandler();
  }

  render = () => (
    <div className={this.divClass}>
        <div className="card job">
          <img className="card-img-top" src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="This job location"/>
          <div className="card-body">
            <h5 className="card-title"><b>{this.props.name}</b></h5>
            <p className="card-text">
              <p>
                <b>Descrição:<br></br></b>
                { this.props.description }
              </p>
              <p>
                <b>Área:<br></br></b>
                { this.props.area }
              </p>
              <p>
                <b>Habilidades desejadas:<br></br></b>
                { this.props.skills }
              </p>
              <p>
                <b>Salário:<br></br></b>
                { this.props.salary }
              </p>
            </p>
            <a className="btn btn-sm btn-warning" onClick={this.props.editCardHandler}><i className="fas fa-edit"></i></a>
            <a className="btn btn-sm btn-danger" onClick={this.props.removeCardHandler}><i className="fas fa-trash-alt"></i></a>
          </div>
        </div>
    </div>
  );
}

export default Card;
