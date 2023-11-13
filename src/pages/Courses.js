import React, { useEffect, useState } from "react";
import axios from "axios";
import { CourseCardCollection } from "../components/structure/courses/CourseCardCollection";
import { SearchAside } from "../components/structure/courses/SearchAside";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Courses | Learning Platform";
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:8080/courses/all");
        const data = response.data;

        data.sort((a, b) => a.name.localeCompare(b.name));

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
      <main className="flex">
        <SearchAside />
        <div className="mt-4 mb-8 mr-8 ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
          {!loading ? (
            <>
              <CourseCardCollection courses={courses} />
            </>
          ) : null}
        </div>
      </main>
    </>
  );
};
