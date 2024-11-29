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
    console.log('전송 데이터:', postData); // 전송 전 데이터 확인
    console.log('토큰:', token);
    // console.log('보내는 데이터:', {
    //   title: postData.title,
    //   body: postData.body,
    //   tag: postData.tag
    // });
    // console.log('Authorization 헤더:', `Bearer ${token}`);
    
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
    const responseText = await response.text();
    console.log('서버 응답:', responseText);
    return responseText;
  }
};