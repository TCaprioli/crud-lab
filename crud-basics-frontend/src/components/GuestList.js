import React,{ Component } from 'react';
import { Guest } from './Guest'
import { GuestModal } from './GuestModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const guestInit={
  name: "",
  sex: "",
  age: 0,
  VIP: false
}


export class GuestList extends Component{
  state={
    show: false,
    formType: "",
    guestInfo: guestInit
  }

  addToggle =()=>{ 
    this.setState({
      show: !this.state.show,
      formType: "add",
      guestInfo: guestInit
    })
  }

  updateToggle =(guest)=>{
    this.setState({
      show: !this.state.show,
      formType: "update",
      guestInfo: guest

    })

  }
  mapGuests=()=>{
    return this.props.guests.map(guest => {
     return <Guest 
      key={guest.id} 
      guest={guest} 
      update={this.updateToggle} 
      />
    })
  }

  handleChange=(event)=>{
    this.setState({
      guestInfo: {
        ...this.state.guestInfo,
        [event.target.id]: event.target.value
      }
    })
  }



  handleAddSubmit=()=>{
    //submit to add guest
  }

  handleUpdateSubmit=()=>{
    //submit to update guest
  }

  render(){
    const modalProps={
      show: this.state.show,
      guest:this.state.guestInfo,
      handleChange:this.handleChange,
    }
    return(
    <div className="guest-list">
        <h2>Guest List 
          <span type="button" className="btn add-btn btn-lg" onClick={this.addToggle}>
            <FontAwesomeIcon icon={faPlusCircle}/>
          </span>
        </h2>
        <hr/>
        <div className="list-con">
          {this.mapGuests()}
        </div>
     { this.state.formType === "add"?
     
     <GuestModal 
      formName="Add Guest"
      submit={this.handleAddSubmit}
      toggle={this.addToggle}
      {...modalProps}
      />
    :
    <GuestModal 
      formName="Update Guest"
      toggle={this.updateToggle}
      submit={this.handleUpdateSubmit}
      {...modalProps}
      />
    }
    </div>
    )
  }
}