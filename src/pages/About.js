import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    document.title = "About Us | Learning Platform";
  }, []);

  return (
    <main>
      <section className="h-real-screen">About us</section>
    </main>
  );
};
