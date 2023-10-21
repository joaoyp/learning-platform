import React from "react";
import { Container, Typography, Button } from "@mui/material";

export const LandingPage = () => {
  return (
    <>
      <div id="hero" className="relative">
        <div className="bg-hero bg-cover w-full h-screen"></div>
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-60 bg-black">
          <div className="text-white text-4xl font-bold">
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
                <Button
                  variant="outlined"
                  href="/courses"
                  size="large"
                  sx={{
                    borderColor: "#ffffff",
                    color: "#2DD4BF",
                    "&:hover": {
                      borderColor: "#ffffff",
                      backgroundColor: "#008080",
                      color: "#ffffff",
                      opacity: "85%",
                    },
                  }}
                >
                  Get Started
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </div>

      <div id="teal" className="h-screen bg-dark-teal "></div>
      <div id="white" className="h-screen bg-white"></div>
    </>
  );
};
