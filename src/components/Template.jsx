import React from 'react'
import frame from "../assets/frame.png"
import SignUpForm from './SignUpForm'
import LoginForm from './LoginForm'
import { FcGoogle } from "react-icons/fc";

export default function Template ({title,desc1,desc2,image,formType,setIsLoggedIn}) {
  return (
    <div className='flex w-11/12 items-center max-h-screen  max-w-[1160px] py-12  justify-between gap-y-0 mx-auto'>
        <div className="w-11/12  max-w-[450px] flex flex-col">
            <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-richblack-100'>{desc1}</span><br/>
                <span className='text-blue-100 italic'>{desc2}</span>
            </p>
            {formType==="signup"?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
            {/* <SignUpForm/> */}
            <div className='flex flex-row w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] w-full bg-richblack-700'></div>
                <p className='text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className='h-[1px] w-full bg-richblack-700'></div>
            </div>
            <button className='flex items-center justify-center w-full mx-auto gap-x-2 mt-6 border border-richblack-700 rounded-[8px] font-medium text-richblack-100 px-[12px] py-[8px] '><FcGoogle /><p className='text-richblack-5'> SignUp with Google</p></button>
        </div>
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame} alt="pattern" width={558} height={504} loading='lazy' />
            <img className='absolute -top-4 right-4' src={image} alt="pattern" width={558} height={490} loading='lazy' />

        </div>
    </div>
  )
}
