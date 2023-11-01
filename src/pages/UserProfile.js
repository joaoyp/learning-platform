import { useEffect } from "react";

export const UserProfile = () => {
  useEffect(() => {
    document.title = "User Profile";
  }, []);

  return (
    <>
      <h1>User Profile</h1>
    </>
  );
};
