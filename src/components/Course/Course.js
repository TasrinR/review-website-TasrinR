import { Button } from 'react-bootstrap';
import React from 'react';
import './Course.css'
import { FaShoppingCart } from 'react-icons/fa'


const Course = (props) => {
    const { name, description, img, courseFee, rating, creator, lastUpdate, totalRate } = props.course;

return(
    <div className="course">
        <div className="image">
            <img src={img} alt="" />
        </div>
        <div>
            <h4>{name}</h4>
            <h6>{description}</h6>
            <div style={{display: 'flex', justifyContent:'space-around', paddingBottom: '10px'}}><small>By : {creator}</small>
            <small>Last Update : {lastUpdate}</small></div>
            <div style={{display: 'flex', justifyContent:'space-around'}}><small className="rating">Rating :{rating} ({totalRate})</small><h5>${courseFee}</h5></div>
            <Button className="mt-auto"
                    onClick={() => props.handleAddToCart(props.course)}
                ><FaShoppingCart/>add to cart</Button>
        </div>
    </div>
    
)
};

export default Course;