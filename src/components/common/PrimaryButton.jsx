import { Button } from "@mui/material";
import { Lettering } from "./Lettering";

export const PrimaryButton = ({ href, size, text, onClick, fontSize }) => {
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
        <Lettering text={text} fontSize={fontSize} fontFamily={"bitter"} />
      </Button>
    </>
  );
};
