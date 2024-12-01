// src/components/board/CommentForm.js
import React, { useState } from 'react';

export function CommentForm({ onSubmit }) {
  const [commentContent, setCommentContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!commentContent.trim()) return;
    onSubmit(commentContent);
    setCommentContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
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
  );
}