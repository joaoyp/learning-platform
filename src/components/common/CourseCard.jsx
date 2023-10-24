import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { TertiaryButton } from "./TertiaryButton";

export const CourseCard = ({ course }) => {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Typography variant="h3" gutterBottom>
          {course.name}
        </Typography>
        <Typography variant="h4" component="div">
          {course.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {course.instructor}
        </Typography>
        <Typography variant="body1">
          {course.duration}
          <br />
          {course.price === 0 ? "FREE" : course.price + "€"}
        </Typography>
      </CardContent>
      <CardActions>
        <TertiaryButton
          text="learn more"
          size="small"
          href={`/course-details/${course.id}`}
        />
      </CardActions>
    </Card>
  );
};
