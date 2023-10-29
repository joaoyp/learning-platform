import { useEffect } from "react";
import { Slideshow } from "../components/common/Slideshow";

export const UserProfile = () => {
  useEffect(() => {
    document.title = "User Profile";
  }, []);

  return (
    <>
      <Slideshow />
      <h1>User Profile</h1>
    </>
  );
};
