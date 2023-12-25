import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import SignIn from './components/SignIn';


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
