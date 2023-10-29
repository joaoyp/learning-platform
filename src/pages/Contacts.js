import { useEffect } from "react";
import { Slideshow } from "../components/common/Slideshow";

export const Contacts = () => {
  useEffect(() => {
    document.title = "Contacts";
  }, []);

  return (
    <>
      <Slideshow />
      <h1>Contacts</h1>
    </>
  );
};
