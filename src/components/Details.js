import React from "react";

export const Details = ({ array }) => {
  return (
    <div className=" border-l border-[#33383F] h-full overflow-y-scroll flex flex-col gap-4 py-4 px-1">
      <div className="text-white text-sm font-semibold py-2 pl-3 bg-[#23272C] rounded-lg">
        Lead Details
      </div>
      <div className="py-2 px-3 flex flex-col  gap-5">
        {array.map(([heading, value]) => (
          <div className="flex justify-between ">
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
      <div class="timeline px-5">
        <div class="timeline-item">
          <div class="flex items-center">
            <div class="icon">
              <img src="/images/email.svg" alt="Email Icon" />
            </div>
            <div class="ml-4">
              <div class="font-bold">Step 1: Email</div>
              <div class="text-sm text-gray-400 flex items-center">
                <img src="/images/sent.svg" alt="Sent Icon" class="mr-2" /> Sent
                3rd, Feb
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-item ">
          <div class="flex items-center">
            <div class="icon">
              <img src="/images/email-opened.svg" alt="Opened Email Icon" />
            </div>
            <div class="ml-4">
              <div class="font-bold">Step 2: Email</div>
              <div class="text-sm text-gray-400 flex items-center">
                <img src="/images/opened.svg" alt="Opened Icon" class="mr-2" />{" "}
                Opened 5th, Feb
              </div>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="flex items-center">
            <div class="icon">
              <img src="/images/email-opened.svg" alt="Opened Email Icon" />
            </div>
            <div class="ml-4">
              <div class="font-bold">Step 3: Email</div>
              <div class="text-sm text-gray-400 flex items-center">
                <img src="/images/opened.svg" alt="Opened Icon" class="mr-2" />{" "}
                Opened 5th, Feb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
