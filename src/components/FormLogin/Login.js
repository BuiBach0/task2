import React, { useEffect, useState } from 'react'
import "./Login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
export default function Login() {
  const nac = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [students, setStudents] = useState([]);
  //   const nav = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://66179268ed6b8fa434830f0b.mockapi.io/api/students");
        setStudents(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [LoginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setLoginData({
      ...LoginData, [e.target.name]: e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmail = /^(?=.{6,30}$)([^\s@]+@[^\s@]+\.[^\s@]+)$/;
    const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@]).{6,30}$/;
    let flagCheck = true;
    console.log(LoginData)
    
    if (!checkEmail.test(LoginData.email)) {

      flagCheck = false;
    } else if (!checkPassword.test(LoginData.password)) {

      flagCheck = false;
    }


    if (!flagCheck) {
      debugger;
      window.alert("Lỗi !!!! ")
    } else {

      const loginInformation = students?.find(item => item.email === LoginData.email && item.password === LoginData.password);
      if (loginInformation) {

        localStorage.setItem("userDetail", JSON.stringify(loginInformation));
        console.log(localStorage.getItem("userDetail"));
        nac("/")
        alert('succesfull')
      } else {
        window.alert("Dang nhap sai")
      }
    }
  }
  return (
    <div>
      <div className='tBody'>
        <div className="container">
          <div className="titleHeader">
            <h1>CRUD OPENRATIONS</h1>
          </div>
          <div>
            <h3>SIGN IN</h3>
            <p className='p-1'>Enter your credentials to access your account</p>
          </div>
          <div className="form-group">
            <p htmlFor="email">Email bach@gmail.com</p>
            <input type="text" id="email" name="email" placeholder="Enter your email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <p htmlFor="password">Password: @Bach1234</p>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <span className="toggle-icon" onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <i className="fa-solid fa-eye" id="eye-icon-open" />
                ) : (
                  <i className="fa-solid fa-eye-slash" id="eye-icon-closed" />
                )}
              </span>
            </div>
          </div>
          <div className="form-group">
            <button onClick={handleSubmit}>SIGN IN</button>
          </div>
          <div>
            <p className='p-2'>
              Forgot your password?{" "}
              <span>
                <a href="">Reset Password</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
