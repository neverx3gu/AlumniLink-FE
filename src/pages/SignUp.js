// src/pages/SignUp.js
import React from 'react';
import { SignUpForm } from '../components/auth/SignUpForm';

function SignUp() {
 return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
     <div className="mb-8 text-center">
       <img 
         src="/logo.png"
         alt="AlumniLink" 
         className="mx-auto mb-2 h-12 object-contain"
       />
       <span className="text-gray-600">AlumniLink</span>
     </div>
     <SignUpForm />
   </div>
 );
}

export default SignUp;