import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Posting } from './features/one/Posting';
// import { Login } from './features/login/Login';
import { LoginPage } from './pages/LoginPage';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

// import { Counter } from './features/counter/Counter';
import './App.css';
import { PostLists } from './features/blog/PostLists';
import PostWord from './features/one/PostWord';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/blog" element={<PostLists />} />
          {/* <Route path="post" element={<PostWord />} /> */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
