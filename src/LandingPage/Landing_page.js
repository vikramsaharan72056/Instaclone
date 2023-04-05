import React,{useState} from 'react'
import "../App.css";
import { NavLink, useNavigate } from 'react-router-dom'

const LogIn = () => {
    const [showpass,setShowPass] = useState(false)
    const [inputVal,setInputVal] = useState({
        email:"",
        password:""
    })
    const defaultPage = useNavigate();
   
    
    const LogInUser = async (e) =>{
        e.preventDefault();
        const {email,password} = inputVal;
        
         if(email ===""){
            alert("please enter your email")
          }else if(!email.includes("@")){
            alert("please enter correct email")
          }else if(password ===""){
            alert("please enter your password")
          }else if (password.length<6){
            alert("password must be atleast of 6 characters")
          }else{
            
            const data =  await fetch("https://serverme-rsmp.onrender.com/login",{
                method:"Post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email,password
                })
            });
            const res = await data.json();
    
             if(res.status === 201){
                defaultPage("/allpost")
                localStorage.setItem("usercokie",res.result.token)
                alert("user logged in successfully")
                setInputVal({...inputVal,email:"",password:""})
             }
          }
    }
    
    return (
        <section>
            <div className='form_data'>
                <div className='form_heading'>
                    <h1>Welcome Back, Log In</h1>
                    <p>We are glad that you are back ,Please login </p>
                </div>
                <form>
                    <div className='form_input'>
                        <label htmlFor='mail'>Email</label>
                        <input type="email" id="lmail" onChange = {(e) =>setInputVal({...inputVal,email:e.target.value})} value = {inputVal.email}name='email' placeholder='enter your email address' />
                    </div>
                    <div className='form_input'>
                        <label htmlFor='pass'>Password</label>
                        <div className='two'>
                            <input type={!showpass ?"password":"text"} onChange = {(e) =>setInputVal({...inputVal,password:e.target.value})} value = {inputVal.password}id="lpass" name='pass' placeholder='enter your password' />
                            <div className='showpass' onClick = {() =>setShowPass(!showpass)}>
                                {!showpass ?"Show":"Hide"}</div>
                            
                        </div>

                    </div>
                    <button className='btn' onClick = {LogInUser}>Login</button>
                    <p>You don't have an account? then, <NavLink to = "/register">SignUp</NavLink></p>
                </form>
            </div>
        </section>
    )
}

export default LogIn

