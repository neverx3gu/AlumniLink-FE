import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

export function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 게시글과 댓글을 동시에 가져옴
        const postData = await api.getPost(id);
        const commentsData = await api.getComments(id); // 페이지 객체에서 content 추출
        setPost(postData);
        setComments(commentsData); // 댓글 목록 설정
      } catch (error) {
        console.error('Error:', error);
        setError('데이터를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>게시글을 찾을 수 없습니다.</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>{post.nickname}</span>
          <span>{new Date(post.startTime).toLocaleString()}</span>
        </div>
        
        <div className="prose max-w-none mb-8">
          <p className="text-gray-800 whitespace-pre-line">{post.body}</p>
        </div>
      </div>

      {/* <div className="space-y-4 mb-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b pb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="font-medium">{comment.nickname}</span>
              <span className="text-gray-500">
                {new Date(comment.createdAt).toLocaleString()}
              </span>
            </div>
            <p>{comment.body}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}