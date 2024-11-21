import React from 'react';
import bgFormPhoto from '../assets/Car_Rent_photo.jpg';

const Card2 = () => {
  return (
    <div 
      style={{
        width: "100%",
        height: "40vh",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        border: "10px solid red",
        color: "white"
      }}
    >
      <div 
        style={{
          width: "50%",
          height: "30%",
          display: "flex",
          justifyContent: "space-between",
          margin: "2vh"
        }}
      >
        <div>
          <h1 style={{ fontWeight: "bold" }}>100 $</h1>
          <p style={{ color: "grey" }}>price</p>
        </div>
        <div> 
          <h1 style={{ fontWeight: "bold" }}>Nano</h1>
          <p style={{ color: "grey" }}>Tata</p>
        </div>
        <button 
          className="btn btn-danger btn-block" 
          type="submit" 
          style={{
            padding: "6px 12px", 
            fontSize: "16px", 
            opacity: "1", 
            width: "10vw",
            height: "7vh", 
            backgroundColor: "black"
          }}
        >
          More Info 
          <i 
            className="fa-solid fa-arrow-right" 
            style={{ color: "white",marginLeft:"1vh" }}
          ></i>
        </button>
      </div>
      <div 
        style={{
          backgroundColor: "white",
          width: "0.5vh",
          height: "30vh"
        }}
      ></div>
      <div>
        <img 
          src={bgFormPhoto} 
          alt="car_photo"  
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: "30vw",
            height: "30vh",
            margin: "5vh"
          }}
        />
      </div>
    </div>
  );
};

export default Card2;
