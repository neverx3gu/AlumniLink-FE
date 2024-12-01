import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export function BoardList() {
 const navigate = useNavigate();
 const [selectedTag, setSelectedTag] = useState('');
 const [currentPage, setCurrentPage] = useState(1);
 const [posts, setPosts] = useState([]);
 const [loading, setLoading] = useState(true);
 const postsPerPage = 10;

 const tagMapping = {
  'FREE': '자유',
  'INFORMATION': '정보',
  'QUESTION': '질문'
 };
 const tags = ['FREE', 'INFORMATION', 'QUESTION'];

 useEffect(() => {
   const fetchPosts = async () => {
     try {
       const response = await api.getPosts();
       setPosts(Array.isArray(response) ? response : []);
     } catch (error) {
       console.error('Failed to fetch posts:', error);
       setPosts([]);
     }
     setLoading(false);
   };
   fetchPosts();
 }, []);

 if (loading) {
   return <div className="text-center py-10">Loading...</div>;
 }

 const filteredPosts = selectedTag
   ? posts.filter(post => post.tag === selectedTag)
   : posts;
   
 const sortedPosts = filteredPosts.sort((a, b) => 
   new Date(b.startTime) - new Date(a.startTime)
 );

 const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
 const currentPosts = sortedPosts.slice(
   (currentPage - 1) * postsPerPage,
   currentPage * postsPerPage
 );

 const getPageNumbers = () => {
   const pages = [];
   const maxVisiblePages = 10;
   let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
   let end = Math.min(totalPages, start + maxVisiblePages - 1);

   if (end - start + 1 < maxVisiblePages) {
     start = Math.max(1, end - maxVisiblePages + 1);
   }

   for (let i = start; i <= end; i++) {
     pages.push(i);
   }
   return pages;
 };

 return (
  <div className="max-w-4xl mx-auto p-4 space-y-6">
    <div className="flex gap-6 items-center"> {/* gap-2를 gap-6으로 변경 */}
      <span className="font-medium text-gray-700">#태그</span>
      <div className="flex gap-2">
        <button
          onClick={() => setSelectedTag('')}
          className={`px-3 py-1.5 rounded transition-colors
            ${!selectedTag ? 'bg-red-100 text-red-700' : 'bg-gray-100 hover:bg-gray-200'}`}
        >
          전체
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1.5 rounded transition-colors
              ${selectedTag === tag ? 'bg-red-100 text-red-700' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {tagMapping[tag]}
          </button>
        ))}
      </div>
    </div>

    <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">번호</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">제목</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">태그</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">작성자</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">작성일</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {currentPosts.map((post) => (
            <tr 
              key={post.id}
              onClick={() => navigate(`/post/${post.id}`)}
              className="hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <td className="px-6 py-2 text-sm text-gray-900">{post.id}</td>
              <td className="px-6 py-2 text-sm text-gray-900">{post.title}</td>
              <td className="px-6 py-2 text-sm text-gray-600">{tagMapping[post.tag]}</td>
              <td className="px-6 py-2 text-sm text-gray-600">{post.nickname}</td>
              <td className="px-6 py-2 text-sm text-gray-600">
                {new Date(post.startTime).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>

     <div className="flex justify-center items-center gap-2">
       <button
         onClick={() => setCurrentPage(1)}
         disabled={currentPage === 1}
         className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
       >
         처음
       </button>
       {getPageNumbers().map(page => (
         <button
           key={page}
           onClick={() => setCurrentPage(page)}
           className={`px-3 py-1 rounded ${
             currentPage === page ? 'bg-red-100' : 'bg-gray-100 hover:bg-gray-200'
           }`}
         >
           {page}
         </button>
       ))}
       <button
         onClick={() => setCurrentPage(totalPages)}
         disabled={currentPage === totalPages}
         className="px-3 py-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
       >
         끝
       </button>
     </div>

     <div className="text-right">
       <button
         onClick={() => navigate('/post/create')}
         className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
       >
         글쓰기
       </button>
     </div>
   </div>
 );
}