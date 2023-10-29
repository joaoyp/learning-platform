import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { TertiaryButton } from "../common/TertiaryButton";
import { formatDuration } from "../../functions/formatDuration";

const formatDescription = (description) => {
  if (description.length > 100) {
    return description.slice(0, 100) + "...";
  }
  return description;
};

export const CourseCard = ({ course }) => {
  return (
    <Card className="mt-4 flex-col">
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {course.name}
        </Typography>
        <Typography className="" component="div">
          {formatDescription(course.description)}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {course.instructor}
        </Typography>
        <Typography variant="body1">
          {formatDuration(course.duration)}
        </Typography>
        <Typography className="file:">
          {course.price === 0 ? "FREE" : course.price + "€"}
        </Typography>
      </CardContent>
      <CardActions className="h-fit bg-dark-teal justify-center">
        <TertiaryButton
          text="learn more"
          size="small"
          href={`/course-details/${course.id}`}
        />
      </CardActions>
    </Card>
  );
};
