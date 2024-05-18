import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import UserDetailPage from './Components/UserDetailPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
