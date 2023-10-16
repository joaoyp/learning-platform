import SchoolIcon from "@mui/icons-material/School";
import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <>
      <div className="z-10 flex background-blur items-center justify-around text-dark-gray shadow-xl bg-white h-16 text-2xl top-0 sticky w-full">
        <a href="/">
          <div className="flex items-center">
            <SchoolIcon fontSize="large" sx={{ color: "teal" }} />
            <p className="ml-2 ">Online Learning Platform</p>
          </div>
        </a>
        <Navbar />
      </div>
    </>
  );
};
