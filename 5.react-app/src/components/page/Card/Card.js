import React from 'react';
import './Card.css';

const Card = (props) => (
  <div className="col-sm-12 col-md-6 col-lg-4 mb-3">
    <div className="card job">
      <img className="card-img-top" src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="This job location"/>
      <div className="card-body">
        <h5 className="card-title"><b>{props.name}</b></h5>
        <p className="card-text">
          <p>
            <b>ID:<br></br></b>
            { props.id }
          </p>
          <p>
            <b>Nome:<br></br></b>
            { props.name }
          </p>
          <p>
            <b>Descrição:<br></br></b>
            { props.description }
          </p>
          <p>
            <b>Área:<br></br></b>
            { props.area }
          </p>
          <p>
            <b>Habilidades desejadas:<br></br></b>
            { props.skills }
          </p>
          <p>
            <b>Salário:<br></br></b>
            { props.salary }
          </p>
        </p>
        <a className="btn btn-sm btn-warning" onClick={props.editCardHandler}><i className="fas fa-edit"></i></a>
        <a className="btn btn-sm btn-danger" onClick={props.removeCardHandler}><i className="fas fa-trash-alt"></i></a>
      </div>
    </div>
  </div>
);

export default Card;