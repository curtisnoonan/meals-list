import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt="meals" src={props.meal.imgurl}/>
        <h2>{props.meal.name}</h2>
        <h3>{props.meal.description}</h3>
        <h3>{props.meal.food}</h3>
        <h3>{props.meal.quantity}</h3>
        <h3>{props.meal.calories}</h3>

    </div>

);