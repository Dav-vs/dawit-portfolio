const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    console.log('API Request:', { url, method: options.method });
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      console.log('API Response:', { status: response.status, ok: response.ok });
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'Network error' }));
        console.error('API Error:', error);
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('API Success:', data);
      return data;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Hero section
  async getHero() {
    return this.request('/hero');
  }

  // About section
  async getAbout() {
    return this.request('/about');
  }

  // Projects
  async getProjects() {
    return this.request('/projects');
  }

  // Contact
  async sendMessage(data) {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }


}

const apiService = new ApiService();
export default apiService; 