import { Lettering } from "../../common/Lettering";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../common/PrimaryButton";

export const Hero = () => {
  return (
    <div id="hero" className="relative">
      <div className="bg-hero bg-cover w-full h-real-screen"></div>
      <div className="absolute inset-0 flex items-center text-white text-4xl font-bold justify-center bg-opacity-60 bg-black">
        <Container
          maxWidth="sm"
          className="text-center relative text-white flex items-center"
        >
          <Lettering text="Welcome to our" fontSize={55} />
          <span className="text-teal-500">
            <Lettering text="Learning Platform" fontSize={60} />
          </span>
          <div className="mt-4">
            <Lettering
              text="Unlock your potential with our wide range of courses."
              fontSize={28}
            />
          </div>
          <div className=" mt-8">
            <Link to="/courses">
              <PrimaryButton text="Get Started" size="medium" fontSize={16} />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};
