import { useEffect } from "react";
import { Slideshow } from "../components/common/Slideshow";

export const About = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <>
      <Slideshow />
      <h1>About us</h1>
    </>
  );
};
