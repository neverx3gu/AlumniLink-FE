// src/pages/PostDetail.js
import React from 'react';
import { Header } from '../components/common/Header';
import { PostDetail as PostDetailContent } from '../components/board/PostDetail';

const PostDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <PostDetailContent />
    </div>
  );
};

export default PostDetail;