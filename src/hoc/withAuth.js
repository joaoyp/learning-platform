import React, { useEffect, useState } from "react";
import { SignIn } from "../pages/SignIn";
import axios from "axios";

const withAuth = (Component) => {
  return function ProtectedComponent(props) {
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
      validateToken();
    }, []);

    const validateToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/auth/validate-token",
          { token: localStorage.getItem("token") }
        );
        if (response.status === 200) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        setAuthenticated(false);
      }
    };

    if (authenticated) {
      return <Component {...props} />;
    } else if (authenticated === false) {
      return <SignIn {...props} />;
    } else {
      return null; //TODO: Loading Page
    }
  };
};

export default withAuth;
