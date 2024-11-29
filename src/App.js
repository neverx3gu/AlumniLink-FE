// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Board from './pages/Board';
import PostCreate from './pages/PostCreate';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/board" element={<Board />} />
          <Route path="/post/create" element={<PostCreate />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;