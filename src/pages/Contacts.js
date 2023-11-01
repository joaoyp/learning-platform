import { useEffect } from "react";

export const Contacts = () => {
  useEffect(() => {
    document.title = "Contacts";
  }, []);

  return (
    <>
      <h1>Contacts</h1>
    </>
  );
};
