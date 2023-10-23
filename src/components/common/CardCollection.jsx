import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export const CardCollection = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <Card key={course.id} sx={{ maxWidth: 600 }}>
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
            <Button size="small" href={`/course-details/${course.id}`}>
              Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};
