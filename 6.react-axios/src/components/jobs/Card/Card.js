import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

class Card extends Component{

  render = () => (
      <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
          <div className="card job">
            <Link to={'/job/' + this.props.id }><img className="card-img-top" src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="This job location"/></Link>
            <div className="card-body">
              <h5 className="card-title"><b>{this.props.name}</b></h5>
              <p className="card-text">
                <p>
                  <b>Área:<br/></b>
                  { this.props.area }
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
