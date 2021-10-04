import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../online-course.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={image} alt=""/>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/courses">Courses</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/login">Log In</NavLink>
            </nav>
        </div>
    );
};

export default Header;