import React from "react";
import { Container } from "@mui/material";
import { PrimaryButton } from "../components/common/PrimaryButton";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Lettering } from "../components/common/Lettering";
import { IntroText } from "../components/structure/landing/IntroText";

export const LandingPage = () => {
  useEffect(() => {
    document.title = "Home | Learning Platform";
  }, []);

  return (
    <>
      <main>
        <div id="hero" className="relative">
          <div className="bg-hero bg-cover w-full h-real-screen"></div>
          <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-60 bg-black">
            <Container
              maxWidth="sm"
              className="text-center relative text-white flex items-center"
            >
              <Lettering text="Welcome to our" fontSize={55} />
              <span className="text-teal-500">
                <Lettering text="Learning Platform" fontSize={60} />
              </span>
              <div className="mt-4">
                <Lettering
                  text="Unlock your potential with our wide range of courses."
                  fontSize={28}
                />
              </div>
              <div className=" mt-8">
                <Link to="/courses">
                  <PrimaryButton
                    text="Get Started"
                    size="medium"
                    fontSize={16}
                  />
                </Link>
              </div>
            </Container>
          </div>
        </div>
        <IntroText />
      </main>
    </>
  );
};
