import React from "react";
import { useEffect } from "react";
import { Hero } from "../components/structure/landing/Hero";
import { How } from "../components/structure/landing/How";

export const LandingPage = () => {
  useEffect(() => {
    document.title = "Home | Learning Platform";
  }, []);

  return (
    <main>
      <Hero />
      <How />
    </main>
  );
};
