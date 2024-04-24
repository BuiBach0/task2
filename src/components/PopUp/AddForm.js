import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddForm.css"
import axios from 'axios';
import moment from 'moment';
import { ToastContainer,Toast } from 'react-bootstrap';
import { toast } from 'react-toastify';
function BasicExample() {
    // State variables to hold form field values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [enrollNumber, setEnrollNumber] = useState('');
    const [birthday, setBirthday] = useState('');
    const [avatar, setAvatar] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const handleBirthdayChange = (e) => {
        const selectedDate = e.target.value;
        const maxDate = moment().format('YYYY-MM-DD');
        if (selectedDate <= maxDate) {
            setBirthday(selectedDate);
        } else {

        }
    };
    // Form submission handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('successful')
        const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            phoneNumber: phoneNumber,
            enrollNumber: enrollNumber,
            birthday: birthday,
            avatar: avatar
        }
        try {
            const result = await axios({
                url: "https://66179268ed6b8fa434830f0b.mockapi.io/api/students",
                method: "POST",
                data: data
            })
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        
    };

    return (
        <Form onSubmit={handleSubmit} className="smaller-form">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    pattern=".{4,50}"
                    title="Name must be between 4 and 50 characters"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid name (between 4 and 50 characters).
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label>Avatar</Form.Label>
                <img src={avatar}></img>
                <Form.Control
                    type="text"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address (6 to 30 characters)"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid email address (6 to 30 characters).
                </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="password-input-container">
                    <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)
                        }
                    />
                    <span className="toggle-icon" onClick={togglePasswordVisibility}>
                        {showPassword ? (
                            <i className="fa-solid fa-eye" id="eye-icon-open" />
                        ) : (
                            <i className="fa-solid fa-eye-slash" id="eye-icon-closed" />
                        )}
                    </span>
                </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <div className="confirmPassword-input-container">
                    <Form.Control
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span className="toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                        {showConfirmPassword ? (
                            <i className="fa-solid fa-eye" id="eye-icon-open" />
                        ) : (
                            <i className="fa-solid fa-eye-slash" id="eye-icon-closed" />
                        )}
                    </span>
                </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    title="Phone Number must be between 6 and 30 "
                    pattern="[0-9]{6,30}"
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid phone number address (6 to 30 characters).
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEnrollNumber">
                <Form.Label>Enrollment Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter enrollment number"
                    value={enrollNumber}
                    onChange={(e) => setEnrollNumber(e.target.value)}
                    pattern="[0-9]{8,100}"
                    title="Enrollment Number must be between 8 and 100"
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Please enter a valid enrollment number (8 to 100 characters).
                </Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                    type="date"
                    value={birthday}
                    onChange={handleBirthdayChange}
                    max={moment().format('YYYY-MM-DD')}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default BasicExample;
