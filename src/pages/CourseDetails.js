import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export const CourseDetails = () => {
  const { courseId } = useParams("");
  const [courseDetails, setCourseDetails] = useState({});
  const [loading, setLoading] = useState(true);

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
        console.error("Error fetching course's details:", error);
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
          <h1>Course Details</h1>
          <h2>Name: {courseDetails.name}</h2>
          <h2>Description: {courseDetails.description}</h2>
          <h2>Instructor: {courseDetails.instructor}</h2>
          <h2>Duration: {courseDetails.duration}</h2>
          <h2>
            Price:{" "}
            {courseDetails.price === 0 ? "FREE" : courseDetails.price + "€"}
          </h2>
          <h2>Created At: {courseDetails.created_at}</h2>
        </>
      )}
    </>
  );
};
