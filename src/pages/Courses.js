import React, { useEffect, useState } from "react";
import axios from "axios";
import { CourseCardCollection } from "../components/courses/CourseCardCollection";
import { SearchAside } from "../components/courses/SearchAside";
import { Slideshow } from "../components/common/Slideshow";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Courses";
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
      <Slideshow />
      <main className="flex">
        <SearchAside />
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
