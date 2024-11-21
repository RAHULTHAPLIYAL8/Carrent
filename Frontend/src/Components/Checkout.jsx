import React, { useState } from 'react';
import "./Checkout.css";

const Checkout = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        postalCode: ''
    });

    // Static cart items

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.rent, 0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Order placed successfully!');
    };

    return (
        <div className="checkout-container">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="postalCode">Postal Code:</label>
                    <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        value={form.postalCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default Checkout;
