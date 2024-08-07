import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Img } from "../components/Img";
import { NoMessageScreen } from "../components/NoMessageScreen";
import { AllInbox } from "../components/AllInbox";

export const Body = () => {
  return (
    <>
      <Helmet>
        <title>ReachInbox - Onebox</title>
        <meta name="description" content="login/signup page" />
      </Helmet>
      <div className="h-screen font-sans  ">
        <div className="h-full flex">
          <Sidebar />
          <div className="w-full h-full">
            <Header />
            <AllInbox />
          </div>
        </div>
      </div>
    </>
  );
};
