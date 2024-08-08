import React, { useEffect, useState } from "react";
import { DropDown } from "./DropDown";
import { Img } from "./Img";
import { ConversationCard } from "./ConversationCard";
import axios from "axios";
export const AllInbox = ({ setShowData }) => {
  const [data, setData] = useState([]);
  const [clickedId, setClickedId] = useState(null);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZ3NocmlzdGk0MEBnbWFpbC5jb20iLCJpZCI6NDEzLCJmaXJzdE5hbWUiOiJTaHJpc3RpIiwibGFzdE5hbWUiOiJHdXB0YSJ9LCJpYXQiOjE3MjMxMzI2NTAsImV4cCI6MTc1NDY2ODY1MH0.ZXKOpQTRL0xbXWGEo1Kg0FI4NTFHuP0WR1wq0ODCRzQ";
  useEffect(() => {
    const authUrl = "https://hiring.reachinbox.xyz/api/v1/onebox/list";

    axios
      .get(authUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  useEffect(() => {
    if (clickedId) {
      let newArr = data.filter(({ id }) => id === clickedId);
      setShowData(newArr);
    }
  }, [clickedId]);
  return (
    <section className="bg-black p-4  border-r-[#33383F] border-r h-full overflow-y-scroll ">
      <div className=" flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <DropDown
            heading={"All Inbox(s)"}
            textClasses={"text-[#4285F4] text-xl font-bold"}
            iconClasses={"h-4 w-4 flex-none text-[#4285F4] font-bold"}
            array={[
              {
                name: "All Inbox",
                href: "#",
              },
            ]}
          />
          <button className="h-8 w-8 rounded bg-[#25262B] items-center flex justify-center">
            <Img src="/images/refresh.svg" />
          </button>
        </div>
        <span className="text-sm text-[#7F7F7F] ">
          <span className="text-white font-bold">
            {data.length}/{data.length}
          </span>
          Inboxes selected
        </span>
        <input
          type="text"
          placeholder="Search"
          className="h-7 w-full placeholder:text-sm placeholder:text-white/20 bg-[#23272C] rounded border-white/20 border px-1.5 py-1 custom-placeholder"
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="bg-[#222426] w-8 h-6 text-[#5C7CFA] font-semibold flex justify-center items-center rounded-full">
              {data.length}
            </div>
            <span className="text-white font-semibold text-sm">
              New Replies
            </span>
          </div>
          <DropDown
            heading={"Newest"}
            textClasses={"text-white font-semibold text-sm"}
            iconClasses={"h-4 w-4 flex-none text-white font-bold"}
            array={[
              {
                name: "Newest",
                href: "#",
              },
              {
                name: "Oldest",
                href: "#",
              },
            ]}
            dropdownPosition={"w-24 -left-4"}
          />
        </div>
        <div className="w-full ">
          {data.map(({ fromEmail, updatedAt, body, isRead, id }) => (
            <ConversationCard
              email={fromEmail}
              date={updatedAt}
              message={body}
              tagName={"interested"}
              unread={isRead}
              setClickedId={setClickedId}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
