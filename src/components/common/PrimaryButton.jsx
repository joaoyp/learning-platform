import { Button } from "@mui/material";

export const PrimaryButton = ({ href, size, text, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant="contained"
        href={href}
        size={size}
        sx={{
          backgroundColor: "#008080",
          color: "#ffffff",
          borderRadius: "25px",
          "&:hover": {
            borderColor: "#ffffff",
            backgroundColor: "#009191",
          },
        }}
      >
        {text}
      </Button>
    </>
  );
};
