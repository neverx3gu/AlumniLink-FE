// src/components/board/PostDetail.js
import React, { useState } from 'react';
import { ThumbsUp } from 'lucide-react';  // 이 import 문을 추가

export function PostDetail() {
  const [liked, setLiked] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      author: '호빈우1827',
      content: '가나다라마바사아자차카타파하',
      createdAt: '24.11.19 14:36'
    }
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!commentContent.trim()) return;

    const newComment = {
      id: comments.length + 1,
      author: '호빈우1234',
      content: commentContent,
      createdAt: new Date().toLocaleDateString()
    };

    setComments([...comments, newComment]);
    setCommentContent('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        혁신적인 스타트업 아이디어:성공을 위한 핵심 전략
      </h1>
      
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>호빈우1234</span>
          <span>24.11.18 20:21</span>
        </div>
        
        <div className="prose max-w-none mb-8">
          <p className="text-gray-800 whitespace-pre-line">
            {/* 게시글 내용 */}
          </p>
        </div>
      </div>

      {/* 좋아요 버튼 */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full ${
          liked ? 'bg-red-100 text-red-500' : 'bg-gray-100'
          }`}
        >
          <ThumbsUp size={20} /> {/* 좋아요 아이콘 */}
          <span>LIKE</span>
        </button>
      </div>

      <div className="space-y-4 mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">{comment.author}</span>
              <span className="text-gray-500">{comment.createdAt}</span>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleCommentSubmit} className="flex gap-2">
        <input
          type="text"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="댓글을 작성하세요"
          className="flex-1 px-4 py-2 border rounded-lg"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          작성
        </button>
      </form>
    </div>
  );
}
