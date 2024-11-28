// src/components/board/PostCreate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function PostCreate() {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: '',
    category: '일반',
    content: ''
  });

  const categories = ['#태그', '일반', 'Tip', '정보'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('게시글 작성:', postData);
    navigate('/board');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="title"
          value={postData.title}
          onChange={(e) => setPostData({...postData, title: e.target.value})}
          placeholder="제목"
          className="w-full px-4 py-2 text-lg border-b"
        />

        <div className="flex gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`px-4 py-2 rounded ${
                postData.category === category
                  ? 'bg-red-100 text-red-600'
                  : 'bg-gray-100'
              }`}
              onClick={() => setPostData({...postData, category})}
            >
              {category}
            </button>
          ))}
        </div>

        <textarea
          name="content"
          value={postData.content}
          onChange={(e) => setPostData({...postData, content: e.target.value})}
          placeholder="내용을 입력하세요..."
          className="w-full h-96 p-4 border rounded-lg resize-none"
        />

        <div className="text-right">
          <button
            type="submit"
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            게시
          </button>
        </div>
      </form>
    </div>
  );
}