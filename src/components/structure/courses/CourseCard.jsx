import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { TertiaryButton } from "../../common/TertiaryButton";
import { formatDuration } from "../../../functions/formatDuration";
import GradeIcon from "@mui/icons-material/Grade";
import { Lettering } from "../../common/Lettering";
import { Link } from "react-router-dom";

export const CourseCard = ({ course }) => {
  const images = [
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg",
    "https://media.istockphoto.com/id/1093110112/photo/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-of-green-forest-with-pure.jpg?s=612x612&w=0&k=20&c=lpQ1sQI49bYbTp9WQ_EfVltAqSP1DXg0Ia7APTjjxz4=",
    "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
    "https://www.usnews.com/object/image/00000186-7a58-d975-aff7-fffbc5a30000/torres-del-paine-national-park-stock.jpg?update-time=1677089882979&size=responsive640",
    "https://media.photographycourse.net/wp-content/uploads/2014/11/08164934/Landscape-Photography-steps.jpg",
    "https://www.josephfiler.com/images/xl/Canada-Rockies-3613-Edit-Edit.jpg",
    "https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2019/10/29122602/iStock-971053374.jpg",
  ];

  function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  return (
    <Link to={`/course-details/${course.id}`}>
      <div>
        <div
          className="mt-2 h-fit hover:shadow-neutral-500 hover:shadow-lg transition ease-in-out hover:scale-105"
          title={course.description}
        >
          <Card>
            <CardContent className="flex flex-col gap-2">
              <img
                className="w-full"
                src={randomImage()}
                alt="Course's Image"
              />
              <div className="">
                <Lettering text={course.name} fontSize={24} />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <GradeIcon fontSize="small" sx={{ color: "orange" }} />
                  <Lettering text={"4.2"} fontSize={16} />
                </div>
              </div>
              <div className="flex justify-between">
                <Lettering text={"Beginner"} fontSize={16} />
                <Lettering
                  text={formatDuration(course.duration)}
                  fontSize={16}
                />
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
      </div>
    </Link>
  );
};
