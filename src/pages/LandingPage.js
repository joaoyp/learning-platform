import React from "react";
import { Container, Typography } from "@mui/material";
import { PrimaryButton } from "../components/common/PrimaryButton";
import { useEffect } from "react";
import { Link } from "react-router-dom";

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
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to our{" "}
                <span className="text-teal-500">Learning Platform</span>
              </Typography>
              <Typography variant="h5" gutterBottom>
                Unlock your potential with our wide range of courses.
              </Typography>
              <div className=" mt-8">
                <Link to="/courses">
                  <PrimaryButton text="Get Started" size="medium" />
                </Link>
              </div>
            </Container>
          </div>
        </div>
        <div id="teal" className="h-real-screen bg-teal-700"></div>
        <div id="white" className="h-real-screen bg-white"></div>
      </main>
    </>
  );
};
