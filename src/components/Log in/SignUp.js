import { Button } from 'react-bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LogIn.css'

const SignUp = () => {
    return (
        <>
        <div className="signup-form">
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Set your password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">Sign Up</Button>
        </Form>
        </div>
        <div>
            <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
        </>
    );
};

export default SignUp;