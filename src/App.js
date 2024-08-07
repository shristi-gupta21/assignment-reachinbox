import React from "react";
// import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Sidebar } from "./pages/Sidebar";
import { Body } from "./pages/Body";

function App() {
  return (
    <div className="min-h-screen">
      <Body />
    </div>
  );
}

export default App;
