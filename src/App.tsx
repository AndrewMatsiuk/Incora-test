import { Routes, Route } from 'react-router-dom';
import './App.css';
import { PostDetailsPage } from './pages/PostDetailsPage';
import { PostsPage } from './pages/PostsPage';
import { UsersPage } from './pages/UsersPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<UsersPage />} />
      <Route path='/user/:userId' element={<PostsPage />} />
      <Route path='/post/:postId' element={<PostDetailsPage />} />
    </Routes>
  );
}

export default App;
