import React,{ Component } from 'react';
import { GuestList } from './GuestList';
import { Analysis } from './Analysis';
import './party.css'

const API = 'http://localhost:3000/guests'

export class Party extends Component{
  state={
    guests: []
  }
  
  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({guests:data}))
  }

  render(){
    return(
      <div className='main'>
        <Analysis />
        <GuestList guests={this.state.guests}/>
      </div>
    )
  }
}