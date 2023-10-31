import { useEffect, useState } from "react";
import axios from "axios";
import { PrimaryButton } from "../common/PrimaryButton";
import { SecondaryButton } from "../common/SecondaryButton";

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

  return (
    <nav className="flex w-8/12 justify-between text-xl">
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
      <ul className="flex justify-around items-center w-2/12">
        {loading ? null : authenticated ? (
          <>
            <PrimaryButton text="Profile" href="/user-profile" size="medium" />
            <SecondaryButton
              onClick={handleLogout}
              text="Logout"
              size="medium"
            />
          </>
        ) : (
          <>
            <SecondaryButton text="Login" href="/sign-in" size="medium" />
            <PrimaryButton text="Register" href="/sign-up" size="medium" />
          </>
        )}
      </ul>
    </nav>
  );
};
