import React,{ Component } from 'react';


export class Analysis extends Component{
  render(){
    return(
        <div className="analysis">
          <h2>The Break Down</h2>
          <hr/>
          <div className="a-item">Men:{}</div>
          <div className="a-item">Women:{}</div>
          <div className="a-item">VIP:{}</div>
          <div className="a-item">Total Guests:{}</div>

        </div>
    )
  }
}