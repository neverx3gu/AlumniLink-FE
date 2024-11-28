// src/pages/SignUp.js
import React from 'react';
import { SignUpForm } from '../components/auth/SignUpForm';

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="mb-8 text-center">
        <img 
          src="/api/placeholder/100/100" 
          alt="AlumniLink" 
          className="mx-auto mb-2"
        />
        <span className="text-gray-600">AlumniLink</span>
      </div>
      <SignUpForm />
    </div>
  );
};

export default SignUp;