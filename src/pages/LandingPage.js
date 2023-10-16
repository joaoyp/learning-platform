import React from "react";
import { Container, Typography, Button } from "@mui/material";

export const LandingPage = () => {
  return (
    <div className="relative">
      <div className="bg-hero bg-cover w-full h-screen"></div>
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-60 bg-black">
        <div className="text-white text-4xl font-bold">
          <Container
            maxWidth="sm"
            className="text-center relative text-white flex items-center"
          >
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Our Learning Platform
            </Typography>
            <Typography variant="h5" gutterBottom>
              Unlock your potential with our wide range of courses.
            </Typography>
            <Button
              variant="outlined"
              href="/courses"
              sx={{
                borderColor: "#00b0b0",
                color: "#00b0b0",
                "&:hover": {
                  borderColor: "#00b0b0",
                },
              }}
            >
              Get Started
            </Button>
          </Container>
        </div>
      </div>
    </div>
  );
};
