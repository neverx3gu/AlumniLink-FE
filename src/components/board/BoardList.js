// src/components/board/BoardList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function BoardList() {
  const navigate = useNavigate();
  const posts = [
    {
      id: 1,
      title: "디지털 마케팅과 핵심 원리와 성공 전략",
      author: "홍길동",
      createdAt: "24.11.22",
      views: 4,
      likes: 5
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">#태그</button>
        <button className="px-4 py-2 rounded bg-red-100 hover:bg-red-200">일반</button>
        <button className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">Tip</button>
        <button className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200">정보</button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">번호</th>
              <th className="px-4 py-2 text-left">제목</th>
              <th className="px-4 py-2 text-left">글쓴이</th>
              <th className="px-4 py-2 text-left">작성일</th>
              <th className="px-4 py-2 text-center">조회</th>
              <th className="px-4 py-2 text-center">추천</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr 
                key={post.id} 
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/post/${post.id}`)}
              >
                <td className="px-4 py-2">{post.id}</td>
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2">{post.author}</td>
                <td className="px-4 py-2">{post.createdAt}</td>
                <td className="px-4 py-2 text-center">{post.views}</td>
                <td className="px-4 py-2 text-center">{post.likes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-4 gap-1">
        {[1,2,3,4,5,6,7,8,9,10].map((page) => (
          <button key={page} className="px-3 py-1 rounded hover:bg-gray-100">
            {page}
          </button>
        ))}
        <span className="px-2">...</span>
        <button className="px-3 py-1 rounded hover:bg-gray-100">999</button>
      </div>

      <div className="text-right mt-4">
        <button 
          onClick={() => navigate('/post/create')}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          글쓰기
        </button>
      </div>
    </div>
  );
}