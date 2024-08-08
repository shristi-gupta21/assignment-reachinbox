import React from "react";
import { Img } from "./Img";
import { Button } from "./Button";
export const ReplyCard = ({ to, from, subject, setShow }) => {
  return (
    <div className="px-5 absolute w-full py-6 bottom-0 z-20">
      <div className="  border border-[#41464B] overflow-hidden bg-[#141517] rounded-lg text-white ">
        <div className="border-b border-b-[#41464B] pl-8 py-3 bg-[#23272C] flex justify-between items-center pr-2">
          <span className="text-white font-bold text-xs"> Reply</span>
          <button onClick={() => setShow(false)}>
            <Img src="/images/close.svg" />
          </button>
        </div>
        <div className="border-b border-b-[#41464B] pl-8 py-1.5 text-xs font-semibold">
          <span className="text-[#BAB9BD]">To : </span>
          <span className="text-[#E7E7E7] pl-2">{to}</span>
        </div>
        <div className="border-b border-b-[#41464B] pl-8 py-1.5 text-xs font-semibold">
          <span className="text-[#BAB9BD]">From : </span>
          <span className="text-[#E7E7E7] pl-2">{from}</span>
        </div>
        <div className="border-b border-b-[#41464B] pl-8 py-1.5 text-xs font-semibold">
          <span className="text-[#BAB9BD]">Subject : </span>
          <span className="text-[#E7E7E7] pl-2">{subject}</span>
        </div>
        <div className="w-full h-full px-8 py-5">
          <textarea
            placeholder="Hey."
            className="w-full h-96 bg-transparent focus:outline-none placeholder-gray-500 p-2 resize-none placeholder:text-xs text-xs"
          ></textarea>
        </div>
        <div className="flex items-center gap-5 border-t border-t-[#41464B] pl-3 py-1.5 text-xs font-semibold">
          <Button
            size="xl"
            rightIcon={<Img src="/images/arrow-down.svg" />}
            className="gap-2 rounded text-white px-5 w-fit font-semibold bg-gradient-to-r from-[#4B63DD] to-[#0524BF]"
          >
            Send
          </Button>
          <button className="flex gap-2 items-center">
            <Img src="/images/flash-on.svg" />
            <span className="text-sm text-[#ADADAD] font-semibold">
              Variables
            </span>
          </button>
          <button className="flex gap-2 items-center">
            <Img src="/images/remove-eye.svg" />
            <span className="text-sm text-[#ADADAD] font-semibold">
              Preview Email
            </span>
          </button>

          <button>
            <Img src="/images/spellcheck.svg" />
          </button>
          <button>
            <Img src="/images/link.svg" />
          </button>
          <button>
            <Img src="/images/image.svg" />
          </button>
          <button>
            <Img src="/images/sentiment-satisfied.svg" />
          </button>
          <button>
            <Img src="/images/person-remove.svg" />
          </button>
          <button>
            <Img src="/images/unfold-more.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};
