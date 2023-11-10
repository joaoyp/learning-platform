import { Button } from "@mui/material";
import { Lettering } from "./Lettering";

export const SecondaryButton = ({ href, size, text, onClick, fontSize }) => {
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
        <Lettering text={text} fontSize={fontSize} fontFamily={"bitter"} />
      </Button>
    </>
  );
};
