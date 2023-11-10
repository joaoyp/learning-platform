import { useEffect } from "react";

export const UserProfile = () => {
  useEffect(() => {
    document.title = "Profile | Learning Platform";
  }, []);

  return (
    <>
      <h1>User Profile</h1>
    </>
  );
};
