import SchoolIcon from "@mui/icons-material/School";
import { Lettering } from "../../common/Lettering";

export const Intro = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex">
        <SchoolIcon sx={{ color: "teal", fontSize: "90px" }} />
        <div className="flex items-center ml-6">
          <Lettering fontSize={30} text="Online Learning Platform" />
        </div>
      </div>
      <div className="m-5 flex flex-col gap-2">
        <Lettering text="An online learning platform for everyone who is eager to learn new programming languages." />
        <Lettering text="This project was made with the ultimate goal of gathering knowledge and a hands-on pratice for myself." />
      </div>
      <div className="ml-5 flex items-end h-full">
        <Lettering text="© 2023 - Online Learning Platform" />
      </div>
    </div>
  );
};
