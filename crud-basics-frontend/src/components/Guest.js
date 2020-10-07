import React,{ Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faUserTimes } from '@fortawesome/free-solid-svg-icons'


export const Guest=(props)=>{
  const handleClick=()=>{
    props.update(props.guest)
  }
  const handleRemove=()=>{
    props.delete(props.guest.id)
  }
    return(
    <div className="guest">
        <span className='guest-name'>{props.guest.name}</span>
        <span type='button' className="guest-btn btn" onClick={handleClick}><FontAwesomeIcon icon={faEdit}/></span>
        <span type='button' className="guest-btn btn" onClick={handleRemove}><FontAwesomeIcon icon={faUserTimes}/></span>

    </div>
    )
}
