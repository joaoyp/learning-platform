import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Lettering } from "../components/common/Lettering";
import { PrimaryButton } from "../components/common/PrimaryButton";

export const CourseDetails = () => {
  const { courseId } = useParams("");
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Course Details | Learning Platform";
  }, []);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/courses/${courseId}`
        );
        const data = response.data;

        setCourseDetails(data);
        setLoading(false);
      } catch (error) {
        //console.error("Error fetching course's details:", error);
        navigate("/404");
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  return (
    <div className="container mx-auto mt-8">
      {loading ? null : (
        <div>
          <img
            src={courseDetails.imagePath}
            alt={courseDetails.name}
            className="w-full h-96 object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold mb-4">{courseDetails.name}</h1>
          <p className="text-neutral-700 mb-4">{courseDetails.description}</p>
          <p>
            <strong>Instructor:</strong> {courseDetails.instructor}
          </p>
          <p>
            <strong>Duration:</strong> {courseDetails.duration}
          </p>
          <p>
            <strong>Price:</strong> ${courseDetails.price}
          </p>
          <p>
            <strong>Difficulty:</strong> {courseDetails.difficulty}
          </p>
          <p>
            <strong>Rating:</strong> {courseDetails.rating}
          </p>
          <p>
            <strong>Category:</strong> {courseDetails.category}
          </p>
          <p>
            <strong>Created At:</strong> {courseDetails.created_at}
          </p>
          <div className="mt-4">
            <Link to={"/user-profile"}>
              <PrimaryButton text={"Enroll"} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
