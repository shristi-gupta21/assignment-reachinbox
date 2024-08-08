import React from "react";
import LoginPage from "./pages/LoginPage";
import Body from "./pages/Body";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // Make the GET request with the bearer token

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Body />} />
      </Routes>
    </Router>
  );
};

export default App;
