// src/components/common/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const navigate = useNavigate();
  const user = { username: '호빈우1234' }; // 임시 사용자 데이터

  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <div className="flex-1 text-center relative">
        <Logo />
        <div className="absolute right-0 top-0 flex items-center space-x-2 text-sm text-gray-600">
          <span>{user.username}</span>
          <button 
            onClick={() => navigate('/login')}
            className="hover:text-gray-800"
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}