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


  addGuest=(payload)=>{
    fetch(API,{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(data=>{this.setState({guests: [...this.state.guests, data]})})
  }

  updateGuest=(id,payload)=>{
    fetch(`${API}/${id}`,{
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(payload)
    })
    .then(resp=> resp.json())
    .then(data => {
      let mapGuest = this.state.guests.map(guest => {
        if(guest.id === data.id){
          return {
            ...guest,
            name: data.name,
            sex: data.sex,
            age: data.age,
            VIP: data.VIP
          }
        }
        else{
          return {...guest}
        }
      })
      this.setState({guests: mapGuest})
    })
  }

  removeGuest=(id)=>{
    fetch(`${API}/${id}`,{
      method: "DELETE",
      headers:{'Content-Type': 'application/json'}
    })
    let filteredGuests = this.state.guests.filter(guest => guest.id != id)
    this.setState({guests: filteredGuests})
  }

  render(){
    return(
      <div className='main'>
        <Analysis guests={this.state.guests}/>
        <GuestList
         guests={this.state.guests}
         addGuest={this.addGuest}
         updateGuest={this.updateGuest}
         removeGuest={this.removeGuest}
         />
      </div>
    )
  }
}