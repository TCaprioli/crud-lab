import React,{Component} from 'react'
import { render } from 'react-dom'

export class Practice extends Component{

    printGuests=(guests)=>{
        return guests.map(guest => <span>{guest.name + ", "}</span>)
    }

    render(){
        console.log()
        return(
            <div className="practice-con">
                <h1>Warm Up</h1><hr/>

                <h2><u>Complete the Challenges without mutating the original Array</u></h2>
                <div className="guests">
                    <h3>Guests</h3>
                    [{this.printGuests(this.props.guests)}]
                </div>
                <div className="challenge">1) Add a guest and return an array </div>
                <div className="answer">Answer here: [{}]</div>
                <div className="challenge">2) Update Ashely's name to Ash using the map method and return an array </div>
                <div className="answer">Answer here: [{}]</div>
                <div className="challenge">3) Remove Derek using the filter method and return an array </div>
                <div className="answer">Answer here: [{}]</div>



            </div>
        )
    }
}