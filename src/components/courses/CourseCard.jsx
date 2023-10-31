import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { TertiaryButton } from "../common/TertiaryButton";
import { formatDuration } from "../../functions/formatDuration";

//TODO
const formatDescription = (description) => {
  if (description.length <= 1) {
    return "No Description";
  }
  if (description.length > 29) {
    return description.slice(0, 29) + "...";
  }
  return description;
};

export const CourseCard = ({ course }) => {
  return (
    <div className="mt-2 h-fit" title={course.description}>
      <Card>
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
        <CardActions className="h-full bg-dark-teal justify-center">
          <TertiaryButton
            text="learn more"
            size="medium"
            href={`/course-details/${course.id}`}
          />
        </CardActions>
      </Card>
    </div>
  );
};
