import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import {useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function LoginForm({setIsLoggedIn}) {
    const[formData,setFormData]=useState({
        email:" ",
        password:" "
    })
    const navigate=useNavigate();
    const[showPassword,setShowPassword]=useState(false);
    function changeHandler(event){
        setFormData((prevData)=>{
            return {
               ...prevData,
                [event.target.name]:event.target.value
            }
        })
    }
    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login successfull!");
        navigate("/dashboard");
    }
  return (
    <div>
        <form className='flex flex-col w-full gap-y-4 mt-6' onSubmit={submitHandler}>
            <label>
                <p className='text-richblack-5 text-[0.875rem] mb-3 leading-[1.375rem] '>Email Address<sup className='text-pink-200 text-[0.875rem]'>*</sup></p>
                 <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b border-blue-400 ' required type="text" value={formData.email} placeholder='Enter email id' onChange={changeHandler}  name='email' />
            </label>
            <label className='relative'>
                <p className='text-richblack-5 text-[0.875rem] mb-3 leading-[1.375rem]'>Password<sup className='text-pink-200 text-[0.875rem]'>*</sup></p>
                 <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b border-blue-400' required type={showPassword? ("text"):("password")} value={formData.password} onChange={changeHandler} name='password' placeholder='Enter password' />
                 <span className='absolute right-3 top-[42px] cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}</span>
                 <Link to="#"><p className='text-xs mt-1 text-blue-100 max-w-max ml-auto ' >Forgot Password</p></Link>
            </label>
            <button className='mb-3 leading-[1.375rem] font-medium w-full bg-yellow-50 rounded-[8px] px-[12px] py-[8px] text-black ' >Sign In</button>
        </form>
    </div>
  )
}
