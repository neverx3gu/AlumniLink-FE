// components/board/PostCreate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { api } from '../../services/api';

export function PostCreate() {
  const navigate = useNavigate();
  const { token } = useAuth();
  // console.log("현재 토큰:", token);

  const [postData, setPostData] = useState({
    title: '',
    body: '',
    tag: 'FREE'  // 자유가 기본값
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createPost(postData, token);
      navigate('/board');
    } catch (error) {
      console.error('Post creation failed:', error);
      alert('게시글 작성에 실패했습니다.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            value={postData.title}
            onChange={(e) => setPostData({...postData, title: e.target.value})}
            placeholder="제목"
            className="w-full px-4 py-2 text-lg border-b focus:outline-none"
            required
          />
        </div>

        <div>
          <select 
            value={postData.tag}
            onChange={(e) => setPostData({...postData, tag: e.target.value})}
            className="px-4 py-2 border rounded"
          >
            <option value="FREE">자유</option>
            <option value="INFORMATION">정보</option>
            <option value="QUESTION">질문</option>
          </select>
        </div>

        <textarea
          value={postData.body}
          onChange={(e) => setPostData({...postData, body: e.target.value})}
          placeholder="내용을 입력하세요..."
          className="w-full h-96 p-4 border rounded-lg resize-none focus:outline-none"
          required
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