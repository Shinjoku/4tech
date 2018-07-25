import React from 'react';
import './Collapse.css';

const Collapse = (props) => (
  <div>
    <a className="btn btn-primary mt-5 ml-4" data-toggle="collapse" href="#forms" role="button" aria-expanded="false" aria-controls="collapseExample">
      Novo job
    </a>
    <div className="collapse" id="forms">
      <br/>
      <div className="form card card-body">
        {props.children}
      </div>
      <br/>
    </div>
  </div>
)

export default Collapse;
