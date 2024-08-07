import { Helmet } from "react-helmet";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Img } from "../components/Img";
import LoginRow from "./LoginRow";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Shristi's Application1</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[3.88rem] bg-[#000000] sm:gap-[1.94rem]">
        <div className="relative h-[41.50rem] content-center md:h-auto">
          <div className="mx-auto h-[41.50rem] flex-1  bg-cover" />
          <LoginRow />
        </div>
      </div>
      <div className="absolute bottom-[17%] left-0 right-0 m-auto flex w-[32%] flex-col items-center">
        <div className="flex w-[92%] flex-col items-center gap-[1.50rem] md:w-full">
          <Heading size="heading4xl" as="h1" className="font-['Open_Sans']">
            Create a new account
          </Heading>
          <Button
            color="gray_600_01"
            size="2xl"
            variant="outline"
            leftIcon={
              <Img
                src="images/img_frame.svg"
                alt="Frame"
                className="h-[2.00rem] w-[1.38rem]"
              />
            }
            className="gap-[0.75rem] self-stretch rounded font-['Open_Sans'] tracking-[0.00rem]"
          >
            Sign Up with Google
          </Button>
        </div>
        <div className="mb-[1.00rem] flex w-[92%] flex-col gap-[1.50rem] md:w-full">
          <Button
            size="2xl"
            variant="gradient"
            color="indigo_400_blue_900_fc"
            className="mx-[5.75rem] self-stretch rounded font-['Open_Sans'] font-semibold md:mx-0"
          >
            Create an Account
          </Button>
          <div className="px-[3.50rem] md:px-[1.25rem]">
            <div className="flex flex-wrap justify-center gap-[0.25rem]">
              <a href="#">
                <Text
                  size="text2xl"
                  as="p"
                  className="!font-['Open_Sans'] !text-[#909296]"
                >
                  Already have an account?
                </Text>
              </a>
              <a href="#">
                <Text
                  size="text2xl"
                  as="p"
                  className="!font-['Open_Sans'] !text-[#c1c2c5]"
                >
                  Sign In
                </Text>
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex items-center justify-center border-t border-solid border-[#25262b] bg-[#000000] w-full">
        <div className="container-xs flex justify-center px-[3.50rem] md:px-[1.25rem]">
          <Text size="extra_small" as="p" className="!text-[#5c5f66]">
            © 2023 Reachinbox. All rights reserved.
          </Text>
        </div>
      </footer>
    </>
  );
}
