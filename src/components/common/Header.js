// src/components/common/Header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from './Logo';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">
      <div className="flex-1 text-center relative">
        <Logo />
        <div className="absolute right-0 top-0 flex items-center space-x-2 text-sm text-gray-600">
          {user ? (
            <>
              <span>{user.nickname}</span>
              <button 
                onClick={handleLogout}
                className="hover:text-gray-800"
              >
                로그아웃
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => navigate('/login')}
                className="hover:text-gray-800"
              >
                로그인
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="hover:text-gray-800"
              >
                회원가입
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}