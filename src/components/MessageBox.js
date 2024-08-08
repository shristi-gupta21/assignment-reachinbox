import React, { useState } from "react";
import { Img } from "./Img";
import { Button } from "./Button";
import RecipientDetails from "./RecipientDetails";
import Messages from "./Messages";
import { ReplyCard } from "./ReplyCard";

export const MessageBox = ({ data }) => {
  const [show, setShow] = useState(false);
  console.log(data);
  return (
    <div className="w-full relative z-10 h-full flex flex-col justify-between items-start ">
      <div className="w-full overflow-y-scroll mb-4  relative z-10">
        <RecipientDetails
          name={data[0]["fromName"]}
          email={data[0]["fromEmail"]}
        />
        <Messages
          subject={data[0]["subject"]}
          date={"20 june 2022 : 9:16AM"}
          from={data[0]["fromEmail"]}
          cc={data[0]["cc"].length === 0 ? "" : data[0]["cc"][0]}
          to={data[0]["toEmail"]}
          body={data[0]["body"]}
        />
      </div>
      {show && (
        <ReplyCard
          to={data[0]["toEmail"]}
          from={data[0]["fromEmail"]}
          subject={data[0]["subject"]}
          setShow={setShow}
        />
      )}
      <div className="px-10 pb-6">
        <Button
          size="xl"
          leftIcon={<Img src="/images/reply.svg" />}
          className="gap-2 rounded text-white pl-6 pr-10 w-fit font-semibold bg-gradient-to-r from-[#4B63DD] to-[#0524BF]"
          onClick={() => setShow(!show)}
        >
          Reply
        </Button>
      </div>
    </div>
  );
};
