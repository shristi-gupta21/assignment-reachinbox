import { Helmet } from "react-helmet";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Img } from "../components/Img";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login/Signup Page</title>
        <meta name="description" content="login/signup page" />
      </Helmet>
      <div className="bg-black h-screen font-sans">
        <header className="flex w-full border-b-[#343A40] border-b flex-col items-center justify-center h-16 bg-[#000000] ">
          <Img
            src="/images/logo.png"
            alt="Logo"
            className="h-6 object-contain"
          />
        </header>
        <div className=" flex justify-center h-[90%] items-center ">
          <div className="border-[#343A40] border px-6 sm:px-10 pt-6 pb-10 rounded-2xl flex flex-col gap-12 bg-gradient-to-r from-[#111214] to-[#121212]">
            <div className="flex flex-col items-center gap-6">
              <Heading size="heading4xl" as="h1">
                Create a new account
              </Heading>
              <Button
                color="gray_600_01"
                size="2xl"
                variant="outline"
                leftIcon={
                  <Img src="images/google.svg" alt="Frame" className="" />
                }
                className=" self-stretch text-white rounded px-16 sm:px-24 gap-3"
              >
                Sign Up with Google
              </Button>
            </div>
            <div className="mb-4 flex flex-col items-center gap-6">
              <Button
                size="2xl"
                className=" rounded text-white px-9 w-fit font-semibold bg-gradient-to-r from-[#4B63DD] to-[#0524BF]"
              >
                Create an Account
              </Button>
              <div className="">
                <div className="flex flex-wrap justify-center gap-[0.25rem]">
                  <a href="#">
                    <p className=" !text-[#909296] ">
                      Already have an account?
                    </p>
                  </a>
                  <a href="#">
                    <p className=" !text-[#c1c2c5]">Already have an account?</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-[#121212] flex items-center justify-center border-t border-solid border-[#25262b] h-8 w-full">
          <div className=" flex justify-center">
            <p className="text-xs !text-[#5c5f66]">
              © 2023 Reachinbox. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
