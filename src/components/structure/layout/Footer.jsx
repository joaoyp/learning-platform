import { Menu } from "../footer/Menu";
import { Intro } from "../footer/Intro";
import { Contacts } from "../footer/Contacts";

export const Footer = () => {
  return (
    <footer className="p-4 flex justify-between gap-2 border-t-2 border-teal-950 bg-neutral-800 text-white w-full h-80 mt-auto">
      <Intro />
      <Menu />
      <Contacts />
    </footer>
  );
};
