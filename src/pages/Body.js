import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";

export const Body = () => {
  return (
    <>
      <Helmet>
        <title>ReachInbox - Onebox</title>
        <meta name="description" content="login/signup page" />
      </Helmet>
      <div className="h-screen font-sans">
        <div className="h-full flex">
          <Sidebar />
          <Header />
        </div>
      </div>
    </>
  );
};
