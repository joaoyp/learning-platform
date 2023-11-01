import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return (
    <>
      <h1>About us</h1>
    </>
  );
};
