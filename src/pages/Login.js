// src/pages/Login.js
import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';

function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="mb-8 text-center">
        {/* <img 
          src="../assets/logo.png"
          alt="AlumniLink" 
          className="mx-auto mb-2 h-12 object-contain"
        /> */}
        <span className="text-gray-600">AlumniLink</span>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;