import React, { useState } from "react";
import { Img } from "./Img";
import { MessageCard } from "./MessageCard";
export default function Messages({ subject, date, from, cc, to, body }) {
  const [show, setShow] = useState(false);
  return (
    <div className="p-5 ">
      <div className="w-full h-px relative bg-[#F8FAFC]/20">
        <div className="text-white absolute -top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[0.625rem] font-semibold bg-[#171819] px-2.5 py-1">
          Today
        </div>
      </div>
      <MessageCard
        subject={subject}
        date={date}
        from={from}
        cc={cc}
        to={to}
        body={body}
      />

      {/* {!show && (
        <div className="w-full h-px relative bg-[#F8FAFC]/20">
          <button
            onClick={() => setShow(!show)}
            className="flex gap-2 items-center text-white absolute -top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-[0.625rem] font-semibold bg-[#171819] px-2.5 py-1"
          >
            <Img src="/images/expand.svg" />
            View all<span className="text-[#4285F4]">4</span>replies
          </button>
        </div>
      )} */}
      {/* {show && (
        <>
          <MessageCard
            subject={subject}
            date={date}
            from={from}
            cc={cc}
            to={to}
          />
          <MessageCard
            subject={subject}
            date={date}
            from={from}
            cc={cc}
            to={to}
          />
        </>
      )} */}
    </div>
  );
}
