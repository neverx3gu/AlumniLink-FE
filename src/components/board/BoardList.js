import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function BoardList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.getPosts();
        setPosts(Array.isArray(response) ? response : []);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  const filteredPosts = selectedTag
    ? posts.filter((post) => post.tag === selectedTag)
    : posts;

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* 태그 버튼 */}
      <div className="flex items-center gap-4 mb-4">
        <span className="text-gray-600 font-bold">#태그</span>
        {['자유', '정보', '질문'].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setSelectedTag(tag);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded ${
              selectedTag === tag ? 'bg-red-100' : 'bg-gray-100'
            } hover:bg-gray-200`}
          >
            {tag}
          </button>
        ))}
        <button
          onClick={() => {
            setSelectedTag('');
            setCurrentPage(1);
          }}
          className={`px-3 py-1 rounded ${
            selectedTag === '' ? 'bg-red-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          전체
        </button>
      </div>

      {/* 게시글 테이블 */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">번호</th>
              <th className="px-4 py-2 text-left">제목</th>
              <th className="px-4 py-2 text-left">작성자</th>
              <th className="px-4 py-2 text-left">작성일</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr 
                key={post.id} 
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => navigate(`/post/${post.id}`)}
              >
                <td className="px-4 py-2">{post.id}</td>
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2">{post.nickname}</td>
                <td className="px-4 py-2">
                  {new Date(post.startTime).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center items-center mt-4 gap-2">
        {/* 처음으로 이동 */}
        <button
          onClick={() => setCurrentPage(1)}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
          disabled={currentPage === 1}
        >
          &lt;&lt;
        </button>
        
        {/* 이전으로 이동 */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* 페이지 번호 */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === index + 1 ? 'bg-red-100' : 'bg-gray-100'
            } hover:bg-gray-200`}
          >
            {index + 1}
          </button>
        ))}

        {/* 다음으로 이동 */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>

        {/* 끝으로 이동 */}
        <button
          onClick={() => setCurrentPage(totalPages)}
          className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200"
          disabled={currentPage === totalPages}
        >
          &gt;&gt;
        </button>
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