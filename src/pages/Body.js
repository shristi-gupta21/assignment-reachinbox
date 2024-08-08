import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { AllInbox } from "../components/AllInbox";
import { Details } from "../components/Details";
import { MessageBox } from "../components/MessageBox";
import { NoMessageScreen } from "../components/NoMessageScreen";

export default function Body() {
  const [showData, setShowData] = useState([]);

  return (
    <>
      <Helmet>
        <title>ReachInbox - Onebox</title>
        <meta name="description" content="ReachInbox" />
      </Helmet>
      <div className="h-screen font-sans bg-black">
        <div className="h-full flex">
          <Sidebar />
          <div className="w-full h-full">
            <Header />
            <div className="w-full h-[calc(100%-4rem)] flex ">
              <div className="w-1/5 h-full">
                <AllInbox setShowData={setShowData} />
              </div>

              {showData.length == 0 && (
                <div className="w-4/5 h-full">
                  <NoMessageScreen />{" "}
                </div>
              )}

              {showData.length !== 0 && (
                <div className="w-3/5 h-full">
                  {" "}
                  <MessageBox data={showData} />{" "}
                </div>
              )}

              {showData.length !== 0 && (
                <div className="w-1/5">
                  <Details
                    array={[
                      ["Name", showData[0]["fromName"]],
                      ["Contact No", "+54-9062827869"],
                      ["Email ID", showData[0]["fromEmail"]],
                      ["Linkedin", "linkedin.com/in/timvadde/"],
                      ["Company Name", "Reachinbox"],
                    ]}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
