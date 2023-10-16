import { Button } from "@mui/material";

export const Navbar = () => {
  return (
    <>
      <div className="flex w-8/12 justify-between text-xl">
        <ul className="flex justify-between items-center w-3/12">
          <li className=" hover:text-dark-teal">
            <a href="/courses">Courses</a>
          </li>
          <li className=" hover:text-dark-teal">
            <a href="/about">About us</a>
          </li>
          <li className=" hover:text-dark-teal">
            <a href="/contacts">Contacts</a>
          </li>
        </ul>
        <ul className="flex justify-around items-center w-2/12 ml-24">
          <Button
            href="/sign-in"
            sx={{
              borderColor: "#262626",
              color: "#262626",
              "&:hover": {
                borderColor: "#262626",
              },
            }}
            variant="outlined"
          >
            Sign In
          </Button>
          <Button
            href="/sign-up"
            sx={{
              borderColor: "#262626",
              color: "white",
              backgroundColor: "#008080",
              "&:hover": {
                backgroundColor: "#00b0b0",
              },
            }}
            variant="contained"
          >
            Sign Up
          </Button>
        </ul>
      </div>
    </>
  );
};
