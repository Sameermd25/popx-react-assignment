import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans">
        <div className="w-[400px] h-[600px] bg-white rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] relative">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/profile" element={<Account />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;