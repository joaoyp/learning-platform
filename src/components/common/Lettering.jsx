import { Typography } from "@mui/material";

export const Lettering = ({
  text,
  fontSize,
  variant,
  component,
  color,
  fontWeight,
}) => {
  return (
    <Typography
      variant={variant}
      component={component}
      fontFamily={"bitter"}
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
    >
      {text}
    </Typography>
  );
};
