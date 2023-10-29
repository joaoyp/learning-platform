import { useEffect } from "react";

export const Page404 = () => {
  useEffect(() => {
    document.title = "Error 404 - Page not found";
  }, []);

  return (
    <>
      <h1>Page Not Found</h1>
    </>
  );
};
