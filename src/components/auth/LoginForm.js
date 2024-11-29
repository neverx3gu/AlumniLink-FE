// src/components/auth/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    nickname: '',
    password: ''
  });

  // src/components/auth/LoginForm.js의 handleSubmit 함수 수정
// components/auth/LoginForm.js
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await api.login(formData);
    if (response.accessToken) {
      await login(response);
      navigate('/');
    }
  } catch (error) {
    console.error('Login failed:', error);
    alert('로그인 실패');
  }
};

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            닉네임
          </label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              nickname: e.target.value
            }))}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            패스워드
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({
              ...prev,
              password: e.target.value
            }))}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          로그인
        </button>

        <div className="text-center text-sm text-gray-600">
          <button
            type="button"
            onClick={() => navigate('/signup')}
            className="hover:text-blue-500"
          >
            회원이 아니신가요?
          </button>
        </div>
      </form>
    </div>
  );
}