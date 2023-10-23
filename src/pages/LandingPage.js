import React from "react";
import { Container, Typography } from "@mui/material";
import { PrimaryButton } from "../components/common/PrimaryButton";

export const LandingPage = () => {
  return (
    <>
      <main>
        <div id="hero" className="relative">
          <div className="bg-hero bg-cover w-full h-screen"></div>
          <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-60 bg-black">
            <Container
              maxWidth="sm"
              className="text-center relative text-white flex items-center"
            >
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to Our{" "}
                <span className="text-teal">Learning Platform</span>
              </Typography>
              <Typography variant="h5" gutterBottom>
                Unlock your potential with our wide range of courses.
              </Typography>
              <div className=" mt-8">
                <PrimaryButton
                  text="Get Started"
                  href="/courses"
                  size="medium"
                />
              </div>
            </Container>
          </div>
        </div>
        <div id="teal" className="h-screen bg-dark-teal "></div>
        <div id="white" className="h-screen bg-white"></div>
      </main>
    </>
  );
};
