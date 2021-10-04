import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <>
        <div className="login-form">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">Log In</Button>
        </Form>
        </div>
        <div>
            <p>Don't have an account? <Link to="/signup"> Sign Up </Link></p>
        </div>
        </>
    );
};

export default LogIn;