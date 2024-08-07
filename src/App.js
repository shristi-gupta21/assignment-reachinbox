import React from "react";
// import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="min-h-screen">
      <LoginPage />
    </div>
  );
}

export default App;
