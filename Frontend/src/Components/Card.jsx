import React from 'react';
import "./Card.css";

function Card({ id, img, name, vnumber, seat, rent, onCardClick }) {

  const handleButtonClick = () => {
    console.log(`Card ${id} clicked`);  // Improved console log for clarity
    onCardClick(id);  // Call the parent component's callback with the card's id
  };   
           
  return (
    <div className="cards">
      <div className="card">
        <img src={img} alt={`${name}`} className="card_img" />
        <div className={`card_info card-${id}`}>
          <span className="card_category">{name}</span>
          <h3 className="card_title">{vnumber}</h3>
          <h3 className="card_title">Seats: {seat}</h3>
          <h3 className="card_title">Rent: {rent}</h3>
          <button onClick={handleButtonClick}>Book now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
