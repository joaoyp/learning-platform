import { useEffect } from "react";

export const Contacts = () => {
  useEffect(() => {
    document.title = "Contacts | Learning Platform";
  }, []);

  return (
    <>
      <h1>Contacts</h1>
    </>
  );
};
