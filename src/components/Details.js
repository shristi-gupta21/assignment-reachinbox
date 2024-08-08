import React from "react";

export const Details = ({ array }) => {
  return (
    <div className=" border-l border-[#33383F] h-full overflow-y-scroll flex flex-col gap-4 py-4 px-1">
      <div className="text-white text-sm font-semibold py-2 pl-3 bg-[#23272C] rounded-lg">
        Lead Details
      </div>
      <div className="py-2 px-3 flex flex-col  gap-5">
        {array.map(([heading, value], index) => (
          <div key={index} className="flex justify-between ">
            <span className="w-1/2 text-white text-sm">{heading}</span>
            <p className=" w-5/12 text-[#B9B9B9] text-sm text-right  break-all">
              {value}
            </p>
          </div>
        ))}
      </div>
      <div className="text-white text-sm font-semibold py-2 pl-3 bg-[#23272C] rounded-lg">
        Activity
      </div>
      <div className="timeline px-5">
        <div className="timeline-item">
          <div className="flex items-center">
            <div className="icon">
              <img src="/images/email.svg" alt="Email Icon" />
            </div>
            <div className="ml-4">
              <div className="font-bold">Step 1: Email</div>
              <div className="text-sm text-gray-400 flex items-center">
                <img src="/images/sent.svg" alt="Sent Icon" className="mr-2" />{" "}
                Sent 3rd, Feb
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-item ">
          <div className="flex items-center">
            <div className="icon">
              <img src="/images/email-opened.svg" alt="Opened Email Icon" />
            </div>
            <div className="ml-4">
              <div className="font-bold">Step 2: Email</div>
              <div className="text-sm text-gray-400 flex items-center">
                <img
                  src="/images/opened.svg"
                  alt="Opened Icon"
                  className="mr-2"
                />{" "}
                Opened 5th, Feb
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-item">
          <div className="flex items-center">
            <div className="icon">
              <img src="/images/email-opened.svg" alt="Opened Email Icon" />
            </div>
            <div className="ml-4">
              <div className="font-bold">Step 3: Email</div>
              <div className="text-sm text-gray-400 flex items-center">
                <img
                  src="/images/opened.svg"
                  alt="Opened Icon"
                  className="mr-2"
                />{" "}
                Opened 5th, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
