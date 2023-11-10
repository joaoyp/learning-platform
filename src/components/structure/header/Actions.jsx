import { useEffect, useState } from "react";
import axios from "axios";
import { PrimaryButton } from "../../common/PrimaryButton";
import { SecondaryButton } from "../../common/SecondaryButton";

export const Actions = () => {
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
    <ul className="flex justify-between items-center gap-4">
      {loading ? null : authenticated ? (
        <>
          <PrimaryButton text="Profile" href="/user-profile" size="medium" />
          <SecondaryButton onClick={handleLogout} text="Logout" size="medium" />
        </>
      ) : (
        <>
          <SecondaryButton text="Login" href="/sign-in" size="medium" />
          <PrimaryButton text="Register" href="/sign-up" size="medium" />
        </>
      )}
    </ul>
  );
};
