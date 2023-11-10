import { Link } from "react-router-dom";
import { useEffect } from "react";
import { PrimaryButton } from "../components/common/PrimaryButton";

export const Page404 = () => {
  useEffect(() => {
    document.title = "404 - Not Found | Learning Platform";
  }, []);

  return (
    <main>
      <div className="w-full h-real-screen flex flex-col justify-center items-center">
        <div className="h-32 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-700 to-teal-300 text-8xl">
          Error 404
        </div>
        <div className="bg-[url('https://freepngimg.com/download/technology/35443-7-robot-free-download.png')] w-[40vh] h-[40vh] ml-10 bg-center bg-cover"></div>

        <div className="flex flex-col justify-center items-center">
          <div className="mt-10 text-3xl">
            Oops, this page doesn't seem to exist.
          </div>
          <div className="m-10 cursor-pointer">
            <Link to="/">
              <PrimaryButton text="Go Back" size="large" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};
