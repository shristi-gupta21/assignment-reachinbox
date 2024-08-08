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
      <div className="h-screen font-sans bg-black">
        <div className="h-full flex">
          <Sidebar />
          <div className="w-full h-full">
            <Header />
            <div className="w-full h-full">
              <div className="w-1/5 h-full">
                <AllInbox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
