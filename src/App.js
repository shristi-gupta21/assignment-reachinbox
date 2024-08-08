import React, { useEffect } from "react";
import LoginPage from "./pages/LoginPage";
import Body from "./pages/Body";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Body />} />
    </Routes>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
