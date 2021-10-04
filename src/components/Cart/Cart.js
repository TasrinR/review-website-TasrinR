import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const course of cart) {
        if (!course.quantity) {
            course.quantity = 1;
        }
        total = total + parseFloat(course.courseFee) * course.quantity;
        totalQuantity = totalQuantity + course.quantity;
    }
    return (
        <div className="cart">
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Total: ${total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
