import React from 'react'
import "./Card.css"

function Card(props)
{
    return  (<div className="cards">
    <div className="card">
        <img src={props.img} alt="imageshow" className="card_img" />
        <div className="card_info">
            <span className="card_category">{props.name}</span>
            <h3 className="card_title">{props.vnumber}</h3>
            <h3 className="card_title">Seat : {props.seat}</h3>
            <h3 className="card_title">Rent :{props.rent}</h3>
            <a href="/" target="_blank" >
                <button>Book now</button>
            </a>
        </div>
    </div>
</div>)
}
export default Card;