import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Helmet } from "react-helmet";

export const Body = () => {
  return (
    <>
      <Helmet>
        <title>ReachInbox - Onebox</title>
        <meta name="description" content="login/signup page" />
      </Helmet>
      <div className="h-screen">
        <Sidebar />
      </div>
    </>
  );
};
