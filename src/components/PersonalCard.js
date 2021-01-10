import React, {Component} from 'react';

const PersonalCard = props => {

    //const [firstName, lastName, age, color] = this.props

    return(
        <div>
        <h2>{props.firstName}, {props.lastName}</h2>
        <ul>
            <li>Age: {props.age} </li>
            <li>Hair Color: {props.color}</li>
        </ul>
        </div>
    )
    }

export default PersonalCard;