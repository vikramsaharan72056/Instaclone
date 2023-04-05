import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const Register = () => {
  const [showpass, setShowPass] = useState(false)
  const [cshowpass, setCShowPass] = useState(false)

  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const defaultPage = useNavigate();

  const setVal = (e) => {
    
    const { name, value } = e.target
    setInputVal(() => {
      return ({
        ...inputVal, [name]: value
      })
    })

  }
  const addUserdata = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = inputVal;
    if (name === "") {
      alert("please enter your name")
    } else if (email === "") {
      alert("please enter your email")
    } else if (!email.includes("@")) {
      alert("please enter correct email")
    } else if (password === "") {
      alert("please enter your password")
    } else if (password.length < 6) {
      alert("password must be atleast of 6 characters")
    } else if (cpassword === "") {
      alert("please confirm your password")
    } else if (cpassword.length < 6) {
      alert("confirm password must be atleast of 6 characters")
    } else if (password !== cpassword) {
      alert("confirm password does not match")
    } else {
      const data = await fetch("https://serverme-rsmp.onrender.com/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,email,password,cpassword
        })

      });
      const res = await data.json();
  if(res.status===201){
    alert("user registration successful")
    defaultPage("/");
    setInputVal({...inputVal,
    name:"",
    email:"",
    password:"",
    cpassword:""
    })

  }
    }
  }
  return (
    <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>SignUp</h1>
          <p>Let us start something new here, So Register</p>
        </div>
        <form>
          <div className='form_input'>
            <label htmlFor='name'>Name</label>
            <input type="name" onChange={setVal} value={inputVal.name}  name='name' placeholder='enter your full name' />
          </div>
          <div className='form_input'>
            <label htmlFor='email'>Email</label>
            <input type="email" onChange={setVal} value={inputVal.email}  name='email' placeholder='enter your email address' />
          </div>
          <div className='form_input'>
            <label htmlFor='password'>Password</label>
            <div className='two'>
              <input type={!showpass ? "password" : "text"} onChange={setVal} value={inputVal.password}  name='password' placeholder='enter your password' />
              <div className='showpass' onClick={() => setShowPass(!showpass)}>
                {!showpass ? "Show" : "Hide"}</div>
            </div>
          </div>
          <div className='form_input'>
            <label htmlFor='password'>Confirm Password</label>
            <div className='two'>
              <input type={!cshowpass ? "password" : "text"} onChange={setVal} value={inputVal.cpassword}  name='cpassword' placeholder='confirm your password' />
              <div className='showpass' onClick={() => setCShowPass(!cshowpass)}>
                {!cshowpass ? "Show" : "Hide"}</div>

            </div>

          </div>
          <button className='btn' onClick={addUserdata}>SignUp</button>
          <p>if you already have an account? then, <NavLink to="/">LogIn</NavLink></p>
        </form>
      </div>
    </section>
  )
}

export default Register
