import React, { useEffect } from 'react'
import "./But.css"
import newdata from "./add.jsx"
import  { useState } from 'react';
const button = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [data,setData]=useState({img:"",name:"",vnumber:"",seat:0,rent:0});
  const [carData,setCarData]=useState(newdata);
  useEffect(() => {
    localStorage.setItem('carData', JSON.stringify(carData));
  }, [carData]);
  const toggleForm=()=>
  {
    setIsFormVisible(!isFormVisible);
  }

  const onChang=(e)=>
  {
    const name=e.target.name;
    const value=e.target.value;
    setData((prevData) => ({
      ...prevData,
      [name]: name === "seat" || name === "rent" ? Number(value) : value,
    }));
  };
  const formSubmit=(e)=>
  {  e.preventDefault();
    setCarData((prevCarData) => [...prevCarData, data]);
    newdata=newdata.push(data);
  }
  return (
       <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div>
        <button class="adminbutton" onClick={toggleForm}>
            ADD NEW CAR DETAILS  <i class="fa-solid fa-plus"></i>
        </button>
        {isFormVisible &&
        <form onSubmit={formSubmit} className="admincontainer">
          <input type="text"  name="img" onChange={onChang} value={data.image} utoComplete ="off" placeholder='Enter image url'/>
          <input type="text" name="name" onChange={onChang} value={data.name} laceholder='Enter Vechile name '/>
          <input type="text" name="vnumber" onChange={onChang} value={data.vnumber} aceholder='vechile number'/>
          <input type="number" name="seat" onChange={onChang} value={data.seat}placeholder='Seat'/>
          <input type="number" name="rent "onChange={onChang} value={data.rent} placeholder='Rent'/>
          <button >Submit</button>
        </form>}
    </div>
    </>
  )
}

export default button