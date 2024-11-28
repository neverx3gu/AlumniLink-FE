// src/pages/PostCreate.js
import React from 'react';
import { Header } from '../components/common/Header';
import { PostCreate as PostCreateForm } from '../components/board/PostCreate';

const PostCreate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PostCreateForm />
    </div>
  );
};

export default PostCreate;