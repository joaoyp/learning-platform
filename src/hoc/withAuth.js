import React from "react";
import { SignIn } from "../pages/SignIn";

const withAuth = (Component) => {
  return function ProtectedComponent(props) {
    const tokenExists = localStorage.getItem("token");

    if (tokenExists) {
      return <Component {...props} />;
    } else {
      return <SignIn {...props} />;
    }
  };
};

export default withAuth;
