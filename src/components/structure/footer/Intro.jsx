import SchoolIcon from "@mui/icons-material/School";
import { Typography } from "@mui/material";

export const Intro = () => {
  return (
    <div className="bg-red-400 w-full">
      <SchoolIcon sx={{ color: "teal", fontSize: "90px" }} />
      <Typography>Online Learning Platform</Typography>
      <Typography>
        An online learning platform for everyone who is eager to learn.
      </Typography>
    </div>
  );
};
