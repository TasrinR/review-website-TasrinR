import React from 'react';
import './Footer.css';
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div><p><small>@copyright  2021</small></p></div>
            <div className="footer-bottom">
                <div><p>contact us: 019876546628</p></div>
                <div><FaFacebook /></div>
                <div><p>email: @abc.gmail.com</p></div>
            </div>

        </div>
    );
};

export default Footer;