import React from "react";
import { Img } from "./Img";
import parse from "html-react-parser";

const typeTags = {
  interested: {
    text: "Interested",
    classes: " text-[#57E0A6] font-semibold text-[0.625rem]",
    dot: "h-2 w-2 rounded-full bg-[#57E0A6] my-1",
  },
  closed: {
    text: "Closed",
    classes: " text-[#626FE6] font-semibold text-[0.625rem]",
    dot: "h-2 w-2 rounded-full bg-[#626FE6] my-1",
  },
  "meeting-booked": {
    text: "Meeting Booked",
    classes: " text-[#9C62E6] font-semibold text-[0.625rem]",
    dot: "h-2 w-2 rounded-full bg-[#9C62E6] my-1",
  },
  "meeting-completed": {
    text: "Meeting Completed",
    classes: " text-[#E6D162] font-semibold text-[0.625rem]",
    dot: "h-2 w-2 rounded-full bg-[#E6D162] my-1",
  },
};
function Unread() {
  return <div className="h-2 w-2 rounded-full  bg-[#5C7CFA] "></div>;
}

function Tag({ tagName }) {
  return (
    <div
      className={`${typeTags[tagName]["classes"]} gap-1 bg-[#222426] rounded-full px-2 py-1 flex justify-center items-center`}
    >
      <div className={typeTags[tagName]["dot"]}></div>
      <p>{typeTags[tagName]["text"]}</p>
    </div>
  );
}
export const ConversationCard = ({
  unread,
  email,
  date,
  message,
  tagName,
  setClickedId,
  id,
}) => {
  return (
    <button
      key={id}
      onClick={() => setClickedId(id)}
      className="flex flex-col w-full"
    >
      <div className="h-px w-full border-t-[#F8FAFC]/20 border-t "></div>

      <div
        key={id}
        className={`${
          unread ? "" : "pl-2"
        }  py-4 flex items-start gap-2 w-full`}
      >
        <div className="flex pt-2">{unread && <Unread />}</div>
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <p className="text-white font-medium text-sm">{email}</p>
            <p className="text-xs text-[#FCFCFC]/40 pr-2">
              {new Date(date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="pb-2 pt-0.5 text-xs text-[#E1E0E0] text-left line-clamp-1 text-ellipsis">
            {parse(message)}
          </div>

          <div className="flex items-center gap-2 pt-2 ">
            <Tag tagName={tagName} />
            <div className="gap-1 bg-[#222426] rounded-full px-2 py-1 flex justify-center items-center">
              <Img src="/images/send.svg" className={"h-3.5"} />
              <p className=" text-white text-[0.625rem] font-semibold">
                Campaign Name
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
