import { Link } from "react-router-dom";
import SchoolIcon from "@mui/icons-material/School";
import { Lettering } from "../../common/Lettering";

export const Logo = () => {
  return (
    <Link to="/">
      <div className="flex justify-between items-center cursor-pointer">
        <SchoolIcon sx={{ color: "teal", fontSize: "50px" }} />
        <div className="ml-2 max-md:hidden">
          <Lettering
            text="Online Learning Platform"
            fontSize={24}
            fontFamily={"bitter"}
          />
        </div>
      </div>
    </Link>
  );
};
