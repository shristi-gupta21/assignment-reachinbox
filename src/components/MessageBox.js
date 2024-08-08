import React from "react";
import { Img } from "./Img";
import { Button } from "./Button";
import RecipientDetails from "./RecipientDetails";
import Messages from "./Messages";
import { ReplyCard } from "./ReplyCard";

export const MessageBox = ({ name, email }) => {
  return (
    <div className="relative h-full flex flex-col justify-between items-start ">
      <div>
        <RecipientDetails name={name} email={email} />
        <Messages
          subject={"New Product Launch"}
          date={"20 june 2022 : 9:16AM"}
          from="jeanne@icloud.com"
          cc=" lennon.j@mail.com"
          to="lennon.j@mail.com"
          FIRST_NAME="Shristi"
        />
      </div>
      <ReplyCard
        to={"jeanne@icloud.com"}
        from="peter@reachinbox.com"
        subject={"Warmup Welcome"}
      />
      <div className="px-10 pb-6">
        <Button
          size="xl"
          leftIcon={<Img src="/images/reply.svg" />}
          className="gap-2 rounded text-white pl-6 pr-10 w-fit font-semibold bg-gradient-to-r from-[#4B63DD] to-[#0524BF]"
        >
          Reply
        </Button>
      </div>
    </div>
  );
};
