import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="flex justify-between items-center cursor-pointer">
        <SchoolIcon fontSize="large" sx={{ color: "teal" }} />
        <p className="ml-2 w-full">Online Learning Platform</p>
      </div>
    </Link>
  );
};
