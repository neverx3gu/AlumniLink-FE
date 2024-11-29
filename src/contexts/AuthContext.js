// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  // 초기 로딩 시 토큰 체크
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const payloadBase64 = storedToken.split('.')[1];
      const decodedPayload = JSON.parse(decodeURIComponent(escape(atob(payloadBase64))));
      setUser({ nickname: decodedPayload.nickname });
    }
  }, []);

  // contexts/AuthContext.js의 login 함수에서 디버깅 추가
  const login = async (response) => {
    if (response.accessToken) {
      const token = response.accessToken;
      localStorage.setItem('token', token);
      setToken(token);
      
      const payloadBase64 = token.split('.')[1];
      const decodedPayload = JSON.parse(decodeURIComponent(escape(atob(payloadBase64))));
      setUser({ nickname: decodedPayload.nickname });
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}