import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./Cart.css";
import { NavLink } from 'react-router-dom';

const Cart = ({ objectcart }) => {
    // const [object, setObject] = useState(objectcart);
    // const [price, setPrice] = useState(0);

    // useEffect(() => {
    //     const totalPrice = object.reduce((acc, item) => acc + item.rent, 0);
    //     setPrice(totalPrice);
    // }, [object]);

    // const handleRemove = (id) => {
    //     const updatedCart = object.filter((item) => item.id !== id);
    //     setObject(updatedCart);
    // };

    const { id }=useParams();

    return (
        <>
       <h1>{id}</h1>
        <h1>My name is Rahul Thapliyal</h1>
         {/* <article>
            <h1>{data}</h1>
            {object.map((item) => (
                    <div className='cart_box'  key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt={item.name} />
                            <p>{item.name}</p>
                        </div>
                        <div>
                            <button>+</button>
                            <button>-</button>
                        </div>
                        <div>
                            <span>{item.rent}</span>
                            <button onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                 
                
            ))}
               <div className='total' style={{margin:"20px"}}>
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
            <h1><NavLink to="/checkout"><button style={{textAlign:"center",position:"relative",left:"23vw"}}>Checkout</button></NavLink></h1>
            </article>
            */}
        </>
    );
}

export default Cart;
