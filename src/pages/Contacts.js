import { useEffect } from "react";
import { Lettering } from "../components/common/Lettering";
import { ContactForm } from "../components/structure/contacts/ContactForm";

export const Contacts = () => {
  useEffect(() => {
    document.title = "Contacts | Learning Platform";
  }, []);

  return (
    <main className="flex justify-center p-10">
      <div className="bg-contactImage bg-top w-full h-[80vh] bg-cover"></div>
      <div className="w-full relative">
        <div className="flex justify-center absolute w-full mt-20 max-lg:mt-0">
          <Lettering text={"Contact Us"} fontSize={45} />
        </div>
        <ContactForm />
      </div>
    </main>
  );
};
