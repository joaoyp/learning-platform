import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "About Us | Learning Platform";
  }, []);

  return (
    <main>
      <div className="h-real-screen">About Us</div>
    </main>
  );
};
