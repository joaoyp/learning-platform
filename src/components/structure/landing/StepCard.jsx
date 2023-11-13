import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { Lettering } from "../../common/Lettering";

export const StepCard = ({ title, text, imagePath }) => {
  return (
    <Card className="h-fit">
      <CardContent className="flex flex-col gap-2">
        <img className="w-full h-64" src={imagePath} alt="Step's Image" />
        <div className="flex flex-col items-center justify-center gap-2 mt-10">
          <Lettering text={title} fontSize={30} />
          <Lettering text={text} fontSize={20} />
        </div>
      </CardContent>
    </Card>
  );
};
