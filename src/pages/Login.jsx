import React from 'react'
import login from "../assets/login.png"
import Template from '../components/Template';

export default function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={login}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}
