const API_URL = 'http://13.124.134.43:8080';

export const api = {
  // 회원가입
  async signup(userData) {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
    });
    return response.json();
  },

  // 로그인
  async login(credentials) {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
    });
    return response.json();
  },

  // 게시글 목록 조회
  async getPosts() {
    try {
      const response = await fetch(`${API_URL}/posts`);
      const data = await response.json();
      // console.log('Posts API response:', data); // 응답 확인용
      return data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }, 

  async createPost(postData, token) {
    console.log('요청 전 토큰:', token);
    console.log('요청 데이터:', postData);

    const response = await fetch(`${API_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        tag: postData.tag
      })
    });
    
    console.log('응답 상태:', response.status);
    const responseText = await response.text();
    console.log('응답 내용:', responseText);
    return responseText;
  },

  async getPost(id) {
      const response = await fetch(`${API_URL}/posts/${id}`);
      return response.json();
  },
     
  async getComments(postId, page = 0, size = 10, sort = 'string') {
    try {
      const response = await fetch(`http://13.124.134.43:8080/comment?postId=${postId}&page=${page}&size=${size}&sort=${sort}`);
      const data = await response.json();
      
      // 페이지 객체에서 댓글 내용(content)을 추출하여 반환
      return data.content; // 댓글 목록만 추출
    } catch (error) {
      console.error('Error fetching comments:', error);
      return []; // 오류 발생 시 빈 배열 반환
    }
  }
};