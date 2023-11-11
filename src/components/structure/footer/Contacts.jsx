import { Lettering } from "../../common/Lettering";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../common/PrimaryButton";

export const Contacts = () => {
  return (
    <div className="w-4/6 flex flex-col items-start">
      <div className="mt-2 text-teal-950">
        <Lettering text="Contact Us" fontSize={25} />
      </div>
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex gap-2">
          <EmailIcon />
          <a
            className="underline underline-offset-4"
            href="mailto:joaoyp.dev@gmail.com"
          >
            <Lettering text="joaoyp.dev@gmail.com" />
          </a>
        </div>
        <div className="flex gap-2">
          <CallIcon />
          <Lettering text="(+351) 963977333" />
        </div>
      </div>
      <div className="flex gap-2 mt-6 items-center">
        <Link to="/contacts">
          <PrimaryButton
            text="Send an email"
            size={"small"}
            fontSize={"inherit"}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center mt-6 gap-6">
        <div>
          <Link to="https://www.linkedin.com/in/joao-yp/" target="_blank">
            <LinkedInIcon sx={{ fontSize: "40px" }} />
          </Link>{" "}
        </div>
        <div>
          <Link to="https://github.com/joaoyp" target="_blank">
            <GitHubIcon sx={{ fontSize: "40px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};
