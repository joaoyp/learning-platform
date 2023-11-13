import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Lettering } from "../components/common/Lettering";

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
    <>
      {loading ? (
        <div></div>
      ) : (
        <>
          {Object.entries(courseDetails).map(([key, value]) => (
            <Lettering text={key + " : " + value} />
          ))}
        </>
      )}
    </>
  );
};
