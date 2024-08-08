import React, { useEffect } from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { Img } from "./Img";
import { Button } from "./Button";

// import VisuallyHidden from './VisuallyHidden'

function Modal({ title, handleDismiss, children }) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className="fixed inset-0 grid place-content-center p-8 z-10">
          <div
            className="absolute inset-0  bg-[#848484]/50"
            onClick={handleDismiss}
          />
          <div
            className="relative flex flex-col gap-8 justify-center items-center bg-gradient-to-b from-[#141517] to-[#232528] rounded-md p-8 w-[27.6rem] max-w-[100vw]"
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              className={"absolute top-0 right-0 p-4 "}
              onClick={handleDismiss}
            >
              <Img src="/images/close.svg" />
            </button>

            <h2 className=" text-white font-semibold text-2xl">
              Are you sure ?
            </h2>
            <p className=" text-sm text-[#e8e8e8]">
              Your selected email will be deleted.
            </p>
            <div className="flex gap-5 pt-5">
              <Button
                size="2xl"
                onClick={handleDismiss}
                className=" rounded text-white px-9 w-fit font-semibold bg-[#25262B]"
              >
                Cancel
              </Button>
              <Button
                size="2xl"
                className=" rounded text-white px-14 w-fit font-semibold bg-gradient-to-r from-[#FA5252] to-[#A91919]"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
