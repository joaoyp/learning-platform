import SchoolIcon from "@mui/icons-material/School";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="z-10 flex background-blur items-center justify-around text-dark-gray shadow-xl bg-white h-20 text-2xl top-0 sticky w-full">
        <Link to="/">
          <div className="flex items-center cursor-pointer">
            <SchoolIcon fontSize="large" sx={{ color: "teal" }} />
            <p className="ml-2">Online Learning Platform</p>
          </div>
        </Link>
        <Navbar />
      </header>
    </>
  );
};
