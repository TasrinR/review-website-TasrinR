import { Button } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';



const NotFound = () => {
    return (
        <div>
            <h2>404 page not found</h2>
            <p>please try with another word</p>
            <Link to='/'>
               <Button className='me-3 mb-5'>Go  Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;