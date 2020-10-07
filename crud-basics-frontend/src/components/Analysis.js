import React,{ Component } from 'react';


export class Analysis extends Component{
  numberOfGuests=()=>({
    men: ()=> this.props.guests.filter(guest => guest.sex === "M").length,
    women: ()=> this.props.guests.filter(guest => guest.sex === "F").length,
    VIP: ()=> this.props.guests.filter(guest => guest.VIP).length,
    all: ()=> this.props.guests.length
  })

  render(){
    return(
        <div className="analysis">
          <h2>The Break Down</h2>
          <hr/>
          <div className="a-item">Men:{this.numberOfGuests().men()}</div>
          <div className="a-item">Women:{this.numberOfGuests().women()}</div>
          <div className="a-item">VIP:{this.numberOfGuests().VIP()}</div>
          <div className="a-item">Total Guests:{this.numberOfGuests().all()}</div>

        </div>
    )
  }
}