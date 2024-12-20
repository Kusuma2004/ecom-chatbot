import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import Login from './components/Login';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;