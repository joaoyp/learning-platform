import SchoolIcon from "@mui/icons-material/School";
import { Navbar } from "../header/Navbar";
import { Link } from "react-router-dom";
import { Logo } from "../header/Logo";
import { Actions } from "../header/Actions";

export const Header = () => {
  return (
    <>
      <header className="z-10 flex bg-white items-center justify-around text-dark-gray shadow-xl h-20 text-2xl top-0 sticky w-full">
        <Logo />
        <Navbar />
        <Actions />
      </header>
    </>
  );
};
