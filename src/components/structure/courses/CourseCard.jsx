import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { formatDuration } from "../../../functions/formatDuration";
import GradeIcon from "@mui/icons-material/Grade";
import { Lettering } from "../../common/Lettering";
import { Link } from "react-router-dom";

export const CourseCard = ({ course }) => {
  return (
    <Link to={`/course-details/${course.id}`}>
      <div
        className="mt-2 h-fit hover:shadow-neutral-500 hover:shadow-lg transition ease-in-out hover:scale-105"
        title={course.description}
      >
        <Card>
          <CardContent className="flex flex-col gap-2">
            <img
              className="w-full"
              src={course.imagePath}
              alt="Course's Image"
            />
            <div className="">
              <Lettering text={course.name} fontSize={24} />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <GradeIcon fontSize="medium" sx={{ color: "orange" }} />
                <Lettering
                  text={parseFloat(course.rating).toFixed(1)}
                  fontSize={16}
                />
              </div>
            </div>
            <div className="flex justify-between">
              <Lettering text={course.difficulty} fontSize={16} />
              <Lettering text={formatDuration(course.duration)} fontSize={16} />
            </div>
          </CardContent>

          <CardActions className="shadow-teal-950 shadow-lg h-full bg-teal-950 justify-center">
            <div className="text-white">
              <Lettering
                text={course.price === 0 ? "FREE" : course.price + "€"}
                fontSize={18}
              />
            </div>
          </CardActions>
        </Card>
      </div>
    </Link>
  );
};
