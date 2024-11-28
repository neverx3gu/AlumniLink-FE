// src/pages/Home.js
import React from 'react';
import { Header } from '../components/common/Header';
import { BoardList } from '../components/board/BoardList';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BoardList />
    </div>
  );
};

export default Home;