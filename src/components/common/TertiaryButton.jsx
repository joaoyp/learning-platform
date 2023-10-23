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
          color: "#00c9c9",
          "&:hover": {
            color: "#ffffff",
          },
        }}
      >
        {text}
      </Button>
    </>
  );
};
