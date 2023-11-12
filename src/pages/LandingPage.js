import React from "react";
import { Container } from "@mui/material";
import { PrimaryButton } from "../components/common/PrimaryButton";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Lettering } from "../components/common/Lettering";
import { IntroText } from "../components/structure/landing/IntroText";
import { Hero } from "../components/structure/landing/Hero";

export const LandingPage = () => {
  useEffect(() => {
    document.title = "Home | Learning Platform";
  }, []);

  return (
    <>
      <main>
        <Hero />
        <IntroText />
      </main>
    </>
  );
};
