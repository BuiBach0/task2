import React, { useEffect, useState } from 'react'
import "./Login.css";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

  const nac = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

  const [LoginData, setLoginData] = useState({ email: "", password: "",confrimPassword:"" });
  console.log('1234',LoginData);
  const handleChange = (e) => {
    setLoginData({
      ...LoginData, [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkEmail = /^(?=.{6,30}$)([^\s@]+@[^\s@]+\.[^\s@]+)$/;
    const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@]).{8,12}$/;
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

        try {
            const result = await  axios({
                url: "https://66179268ed6b8fa434830f0b.mockapi.io/api/students",
                method: "POST",
                data: LoginData
            })
            console.log(result)
            nac("/Login")
        } catch (error) {
            console.log(error)
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
            <h3>SIGN UP</h3>
            <p className='p-1'>Enter your credentials to access your account</p>
          </div>
          <div className="form-group">
            <p htmlFor="email">Email </p>
            <input type="text" id="email" name="email" placeholder="Enter your email" onChange={handleChange} />
          </div>
          <div className="form-group">
            <p htmlFor="password">Password</p>
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
            <p htmlFor="password">Confirm Password</p>
            <div className="password-input">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confrimPassword"
                placeholder="Enter your password"
                onChange={handleChange}
              />
              <span className="toggle-icon" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword? (
                  <i className="fa-solid fa-eye" id="eye-icon-open" />
                ) : (
                  <i className="fa-solid fa-eye-slash" id="eye-icon-closed" />
                )}
              </span>
            </div>
          </div>
          <div className="form-group">
            <button onClick={handleSubmit} style={{marginTop: '0px'}}>SIGN IN <NavLink to={"/Login"}></NavLink></button>
            
          </div>
        </div>
      </div>
    </div>
  )
}
