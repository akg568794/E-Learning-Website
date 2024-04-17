import React, { useState } from 'react'
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm({setIsLoggedIn}) {
    const navigate=useNavigate();
    const[formData,setFormData]=useState({
        firstName:" ",
        lastname:" ",
        email:" ",
        password:" ",
        confirmPassword:" "
    })

    const [accountType,setAccountType]=useState("student")
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
        toast.success("Account Created")
        const accountData={...formData}
        const finalData={...accountData,accountType}
        console.log(finalData);
        navigate("/dashboard");
        toast.success("SignUp successfull!");

    }
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);
  return (
    <div className='mt-8 '>
        {/* Student instructor tab */}
        <div className="flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
        <button
          className={`${accountType === "student"
            ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}>
          Student
        </button>

        <button
          className={`${accountType === "instructor"
            ?
            "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>
        <form onSubmit={submitHandler} >
            {/* contains first name and last name */}
            <div className='flex gap-x-4 mt-4'>
                <label>
                    <p className='text-richblack-5 text-[0.875rem]  leading-[1.375rem] '>First Name<sup className='text-pink-200 text-[0.875rem]'>*</sup></p>
                    <input className='bg-richblack-800 p-[8px] rounded-[0.5rem] text-richblack-5 w-full  border-b border-blue-400 ' required type="text" name='firstName' onChange={changeHandler}  value={formData.firstName} placeholder="Enter first name" />
                </label>
                <label>
                    <p className='text-richblack-5 text-[0.875rem]  leading-[1.375rem] '>Last Name<sup className='text-pink-200 text-[0.875rem]'>*</sup></p>
                    <input className='bg-richblack-800 p-[8px] rounded-[0.5rem] text-richblack-5 w-full  border-b border-blue-400 ' required type="text" name='lastname' onChange={changeHandler} placeholder='Enter last name' value={formData.lastname} />
                </label>
            </div>
            {/* email addresss */}
            <label>
                    <p className='text-richblack-5 text-[0.875rem] mt-3   leading-[1.375rem] '>Email Address<sup className='text-pink-200 text-[0.875rem]'>*</sup></p>
                    <input className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[8px] border-b border-blue-400 ' required type="email" name='email' onChange={changeHandler} placeholder='Enter your email address' value={formData.email} />
            </label>
            {/* create password or confirm password */}
            <div className='flex gap-x-4 mt-4' >
                <label className=' w-full relative'>
                    <p className='text-richblack-5 text-[0.875rem]  leading-[1.375rem] '>Create Password<sup className='text-pink-200 text-[0.875rem]'>*</sup></p>
                    <input className='bg-richblack-800 p-[8px] rounded-[0.5rem] text-richblack-5 w-full  border-b border-blue-400 ' required type={showPassword? ("text"):("password")} value={formData.password} onChange={changeHandler} name='password' placeholder='Enter password' />
                    <span className='absolute right-3 top-[32px] cursor-pointer' onClick={()=>setShowPassword((prev)=>!prev)}>{showPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}</span>
                </label>
                <label className=' w-full relative'>
                    <p className='text-richblack-5 text-[0.875rem]  leading-[1.375rem] '>Confirm Password<sup className='text-pink-200 text-[0.875rem]'>*</sup></p>
                    <input className='bg-richblack-800 p-[8px] rounded-[0.5rem] text-richblack-5 w-full  border-b border-blue-400 ' required type={ showConfirmPassword?("text"):("password")} value={formData.confirmPassword} name='confirmPassword' onChange={changeHandler} placeholder='Confirm password'  />
                    <span className='absolute right-3 top-[32px] cursor-pointer' onClick={()=>setShowConfirmPassword((prev)=>!prev)}>{showConfirmPassword?(<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}</span>
                </label>
            </div>
            <button className="bg-yellow-50 text-richblack-900  px-[12px] font-semibold text-[1.125rem] w-full rounded-[8px] py-[8px] mt-6">Create Account</button>
        </form>
        
    </div>
  )
}
