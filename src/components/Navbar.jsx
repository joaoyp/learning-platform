import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export const Navbar = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/validate-token",
          {
            token: localStorage.getItem("token"),
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.status === 200) {
          setAuthenticated(true);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error validating token:", error);
        setLoading(false);
      }
    };

    validateToken();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
    setAuthenticated(false);
  };

  if (loading) {
    return (
      <div className="flex w-8/12 justify-between text-xl">
        <ul className="flex justify-between items-center w-3/12">
          <li className="hover:text-dark-teal">
            <a href="/courses">Courses</a>
          </li>
          <li className="hover:text-dark-teal">
            <a href="/about">About us</a>
          </li>
          <li className="hover:text-dark-teal">
            <a href="/contacts">Contacts</a>
          </li>
        </ul>
        <ul className="flex justify-around items-center w-2/12 ml-24"></ul>
      </div>
    );
  }

  return (
    <div className="flex w-8/12 justify-between text-xl">
      <ul className="flex justify-between items-center w-3/12">
        <li className="hover:text-dark-teal">
          <a href="/courses">Courses</a>
        </li>
        <li className="hover:text-dark-teal">
          <a href="/about">About us</a>
        </li>
        <li className="hover:text-dark-teal">
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
      <ul className="flex justify-around items-center w-2/12 ml-24">
        {authenticated ? (
          <>
            <Button
              href="/user-profile"
              sx={{
                borderColor: "#262626",
                color: "#262626",
                "&:hover": {
                  borderColor: "#262626",
                },
              }}
              variant="outlined"
            >
              Profile
            </Button>
            <Button
              onClick={handleLogout}
              sx={{
                borderColor: "#262626",
                color: "#262626",
                "&:hover": {
                  borderColor: "#262626",
                },
              }}
              variant="outlined"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
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
          </>
        )}
      </ul>
    </div>
  );
};
