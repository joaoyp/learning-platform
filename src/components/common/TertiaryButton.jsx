import { Button } from "@mui/material";

export const TertiaryButton = ({ href, size, text, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant="text"
        href={href}
        size={size}
        sx={{
          color: "#ffffff", //008080
          "&:hover": {
            color: "#ebebeb",
          },
        }}
      >
        {text}
      </Button>
    </>
  );
};
