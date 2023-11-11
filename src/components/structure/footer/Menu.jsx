import { Lettering } from "../../common/Lettering";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="mt-2 flex flex-col items-center gap-2">
        <div className="text-teal-950">
          <Lettering text="Useful Links" fontSize={25} />
        </div>
        <div className="hover:text-teal-950">
          <Link to="/">
            <Lettering text="Home" />
          </Link>
        </div>
        <div className="hover:text-teal-950">
          <Link to="/courses">
            <Lettering text="Courses" />
          </Link>
        </div>
        <div className="hover:text-teal-950">
          <Link to="/about">
            <Lettering text="About Us" />
          </Link>
        </div>
        <div className="hover:text-teal-950">
          <Link to="/contacts">
            <Lettering text="Contacts" />
          </Link>
        </div>
      </div>
    </div>
  );
};
