import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./AddForm.css"
import axios from 'axios';
import moment from 'moment';
import { toast } from 'react-toastify';
function EditForm(props) {
    // State variables to hold form field values
    const { userID } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [enrollNumber, setEnrollNumber] = useState('');
    const [birthDay, setBirthday] = useState('');
    const [avatar, setAvatar] = useState('');
    // Form submission handler
    const handleBirthdayChange = (e) => {
        const selectedDate = e.target.value;
        const maxDate = moment().format('YYYY-MM-DD'); 
        if (selectedDate <= maxDate) {
            setBirthday(selectedDate);
        } else {
            
        }
    };
    const handleSubmit = async (e) => {
        alert('successful')
        toast.success('Operation completed successfully!');
        e.preventDefault();
        const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            phone: phoneNumber,
            enroll: enrollNumber,
            birthday: birthDay,
            avatar: avatar
            
        }
        try {
            const result = await axios({
                url: `https://66179268ed6b8fa434830f0b.mockapi.io/api/students/${userID}`,
                method: "PUT",
                data: data
            })
            
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    };
    useEffect(()=>{
      const getData=async ()=>{
        try {
            const result = await axios({
                url: `https://66179268ed6b8fa434830f0b.mockapi.io/api/students/${userID}`,
                method: "Get",
                
            })
            setAvatar(result.data.avatar)
            setEmail(result.data.email)
            setEnrollNumber(result.data.enroll)
            setName(result.data.name)
            setPhoneNumber(result.data.phone)
            setBirthday(result.data.birthday)
            

        } catch (error) {
            console.log(error)
        }
      }
    getData()
    },[])
    let userInformation = localStorage.getItem("userDetail");
    userInformation = JSON.parse(userInformation)
    const renderConfirmPassword = () => {
        return userInformation.id === userID ? <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group> : <p></p>
    }

    return (
        <Form onSubmit={handleSubmit} className="smaller-form">
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
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
                />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>


            {renderConfirmPassword()}

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="tel"
                    placeholder="Enter phone number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEnrollNumber">
                <Form.Label>Enrollment Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter enrollment number"
                    value={enrollNumber}
                    onChange={(e) => setEnrollNumber(e.target.value)}
                    dateFormat= 'dd/mm/yyyy'
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicBirthday">
                <Form.Label>Birthday</Form.Label>
                <Form.Control
                    type="date"
                    value={birthDay}
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

export default EditForm;
