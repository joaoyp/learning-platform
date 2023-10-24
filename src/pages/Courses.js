import React, { useEffect, useState } from "react";
import axios from "axios";
import { CourseCardCollection } from "../components/common/CourseCardCollection";
import { SearchBar } from "../components/common/SearchBar";

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
      <main className="flex">
        <aside className="bg-gray-light w-3/12">
          <div className="flex justify-center mt-4">
            <SearchBar />
          </div>
        </aside>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 h-screen w-screen">
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
