const BASE_URL = 'http://your-api-url';

export const api = {
  async login(credentials) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  async getPosts() {
    const response = await fetch(`${BASE_URL}/posts`);
    return response.json();
  },

  async createPost(postData) {
    const response = await fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    return response.json();
  }
};