// App.js
import React from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />{" "}
          {/* Ensure Login component is properly imported and exported */}
          <Route path="/home" element={<Home />} />{" "}
          {/* Ensure Home component is properly imported and exported */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
