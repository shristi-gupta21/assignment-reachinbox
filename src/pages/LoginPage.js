import { Helmet } from "react-helmet";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Img } from "../components/Img";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function LoginPage() {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiZ3NocmlzdGk0MEBnbWFpbC5jb20iLCJpZCI6NDEzLCJmaXJzdE5hbWUiOiJTaHJpc3RpIiwibGFzdE5hbWUiOiJHdXB0YSJ9LCJpYXQiOjE3MjMxMzA2NTQsImV4cCI6MTc1NDY2NjY1NH0.HSdy-vb-m5N7K3TXORBW8RHipUvdkBGYga0W5w-wyB4"
  );
  const [error, setError] = useState(null);

  const fetchData = (token) => {
    if (error) {
      return <div>Error: {error}</div>;
    }
  };
  function handleClick() {
    const authUrl =
      "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/";

    axios
      .get(authUrl)
      .then((response) => {
        const fetchedToken = response.data.token; // Adjust based on actual response structure
        setToken(fetchedToken);
        // console.log(response);
        // Now fetch the data using the token
        fetchData(fetchedToken);
      })
      .catch((error) => {
        setError("Authentication failed: " + error.message);
      });
  }
  // I was trying to hit the api but i was getting this error
  // My localhost:300 was blocked by CORS policy
  // error->
  // Access to XMLHttpRequest at 'https://accounts.google.com/o/oauth2/v2/auth?response_
  // type=code&redirect_uri=https%3A%2F%2Fhiring.reachinbox.xyz%2Fapi%2Fv1%2Fauth%2Fgoogle-
  // login%2Fcallback&scope=profile%20email&state=%7B%22redirectTo%22%3A%22https%3A%2F%2Ffrontend.com%22%7D&client_id=353256760825-a1evig9h3b4f3mfdd2u0dvlqvtir07ib.apps.googleusercontent.com' (redirected from 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com')
  // from origin 'http://localhost:3000' has been blocked by CORS policy:
  //  No 'Access-Control-Allow-Origin' header is present on the requested resource.

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
                onClick={handleClick}
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
                    <p className=" !text-[#c1c2c5]">Sign In</p>
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
