// src/components/board/CommentList.js
import React from 'react';

export function CommentList({ comments, onDelete, currentUser }) {
  return (
    <div className="space-y-4 mb-6">
      {comments.map((comment) => (
        <div key={comment.id} className="border-b pb-4">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">{comment.nickname}</span>
            <div className="flex items-center gap-2">
              <span className="text-gray-500">
                {new Date(comment.createdAt).toLocaleString()}
              </span>
              {currentUser === comment.nickname && (
                <button
                  onClick={() => onDelete(comment.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  삭제
                </button>
              )}
            </div>
          </div>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}