import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({setIsLoggedIn}) {
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        firstname:" ",
        lastname:" ",
        email:" ",
        password:" ",
        confirmPassword:" "
    })
    function changeHandler(event){
        setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        if(formData.password!==formData.confirmPassword){
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        navigate("/dashboard");
        toast.success("Login successfull!");

    }
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  return (
    <div>
        {/* Student instructor tab */}
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>
        <form onSubmit={submitHandler} >
            {/* contains first name and last name */}
            <div>
                <label>
                    <p>First Name<sup>*</sup></p>
                    <input required type="text" name='firstname' onChange={changeHandler} placeholder='Enter first name' value={formData.firstname} />
                </label>
                <label>
                    <p>Last Name<sup>*</sup></p>
                    <input required type="text" name='lastname' onChange={changeHandler} placeholder='Enter last name' value={formData.lastname} />
                </label>
            </div>
            {/* email addresss */}
            <label>
                    <p>Email Address<sup>*</sup></p>
                    <input required type="email" name='email' onChange={changeHandler} placeholder='Enter your email address' value={formData.email} />
            </label>
            {/* create password or confirm password */}
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
                    <input required type={showPassword? ("text"):("password")} value={formData.password} onChange={changeHandler} name='password' placeholder='Enter password' />
                    <span onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}</span>
                </label>
                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input required type={ showPassword?("text"):("password")} value={formData.confirmPassword} name='confirmPassword' onChange={changeHandler} placeholder='Confirm password'  />
                    <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>{showConfirmPassword?(<AiOutlineEyeInvisible />):(<AiOutlineEye />)}</span>
                </label>
            </div>
            <button>Create Account</button>
        </form>
        
    </div>
  )
}
