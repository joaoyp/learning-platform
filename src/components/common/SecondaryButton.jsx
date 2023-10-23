import { Button } from "@mui/material";

export const SecondaryButton = ({ href, size, text, onClick }) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant="outlined"
        href={href}
        size={size}
        sx={{
          borderColor: "#008080",
          color: "#008080",
          borderRadius: "25px",
          "&:hover": {
            borderColor: "#008080",
            backgroundColor: "#ebf2f2",
            color: "#008080",
          },
        }}
      >
        {text}
      </Button>
    </>
  );
};
