// src/components/common/Logo.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

export function Logo() {
  return (
    <Link to="/" className="inline-block text-center">
      <img 
        src={logo}
        alt="AlumniLink" 
        style={{ height: '120px' }}  // h-20(80px)과 h-21(84px) 사이의 값을 직접 지정
        className="mx-auto mb-0.1 object-contain"
      />
      <span className="text-sm text-gray-600">AlumniLink</span>
    </Link>
  );
}