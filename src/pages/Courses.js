import React, { useEffect, useState } from "react";
import axios from "axios";
import { CardCollection } from "../components/common/CardCollection";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses/all");
        const data = response.data;

        //const shuffledCourses = data.sort(() => 0.5 - Math.random());
        //const selectedCourses = shuffledCourses.slice(0, 5);

        setCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <div className="m-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-screen">
        {!loading ? (
          <>
            <CardCollection courses={courses} />
          </>
        ) : null}
      </div>
    </>
  );
};
