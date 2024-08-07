import React from "react";

const typeTags = {
  interested: {
    text: "Interested",
    classes: " text-[#57E0A6] text-semibold text-[0.625rem]",
    dot: "h-2 w-2 rounded-full bg-[#57E0A6]",
  },
  closed: {
    text: "Closed",
    classes: " text-[#626FE6] text-semibold text-[0.625rem]",
    dot: "h-2 w-2 rounded-full bg-[#626FE6]",
  },
  "meeting-booked": {
    text: "Meeting Booked",
    classes: " text-[#9C62E6] text-semibold text-[0.625rem]",
    dot: "h-2 w-2 rounded-full bg-[#9C62E6]",
  },
  "meeting-completed": {
    text: "Meeting Completed",
    classes: " text-[#E6D162] text-semibold text-[0.625rem]",
    dot: "h-2 w-2 rounded-full bg-[#E6D162]",
  },
};
function Unread() {
  return <div className="h-2 w-2 rounded-full  bg-[#5C7CFA] "></div>;
}

function Tag() {
  return <div className="bg-[#222426] rounded-full px-2 py-1"></div>;
}
export const ConversationCard = ({ unread = false, email, date, message }) => {
  return (
    <div className="">
      <div className="h-px w-full border-t-[#F8FAFC]/20 border-t "></div>
      <div className={`${unread ? "" : "pl-2"}  py-4`}>
        <div className="flex">{unread && <Unread />}</div>
        <div className="flex items-center justify-between">
          <p className="text-white font-medium text-sm">{email}</p>

          <p className="text-xs text-[#FCFCFC]/40 pr-2">{date}</p>
        </div>
        <span className="pb-2 pt-0.5 text-xs text-[#E1E0E0]">{message}</span>
      </div>
    </div>
  );
};
