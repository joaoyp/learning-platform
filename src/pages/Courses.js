import React, { useEffect, useState } from "react";
import axios from "axios";
import { CourseCardCollection } from "../components/structure/courses/CourseCardCollection";
import { SearchAside } from "../components/structure/courses/SearchAside";

export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCourses, setFilteredCourses] = useState([]);

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
        setFilteredCourses(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleSearch = ({
    categories,
    duration,
    rating,
    priceMin,
    priceMax,
    searchBarValue,
    filterSearchValue,
    orderSearchValue,
  }) => {
    let filtered = [...courses];

    if (categories.length > 0) {
      filtered = filtered.filter((course) =>
        categories.includes(course.category)
      );
    }

    const parseDuration = (durationString) => {
      const [hours, minutes, seconds] = durationString.split(":");
      const totalHours =
        parseInt(hours) + parseInt(minutes) / 60 + parseInt(seconds) / 3600;
      return totalHours;
    };

    if (duration !== "Any") {
      if (duration === "< 1h") {
        filtered = filtered.filter(
          (course) => parseDuration(course.duration) < 1
        );
      } else if (duration === "1h - 4h") {
        filtered = filtered.filter((course) => {
          const durationInHours = parseDuration(course.duration);
          return durationInHours >= 1 && durationInHours <= 4;
        });
      } else if (duration === "> 4h") {
        filtered = filtered.filter(
          (course) => parseDuration(course.duration) > 4
        );
      }
    }

    if (rating) {
      filtered = filtered.filter((course) => course.rating >= rating);
    }

    filtered = filtered.filter(
      (course) => course.price >= priceMin && course.price <= priceMax
    );

    if (searchBarValue) {
      const searchValue = searchBarValue.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.name.toLowerCase().includes(searchValue) ||
          course.description.toLowerCase().includes(searchValue)
      );
    }

    if (filterSearchValue === "Creation") {
      filtered = filtered.sort(
        (a, b) => new Date(a.created_at) - new Date(b.created_at)
      );
    } else if (filterSearchValue === "Price") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (filterSearchValue === "Alphabetically") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (orderSearchValue === "Desc.") {
      filtered.reverse();
    }

    setFilteredCourses(filtered);
  };

  return (
    <>
      <main className="flex">
        <SearchAside onSearch={handleSearch} />
        <div className="h-fit mt-4 mb-8 mr-8 ml-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-full">
          {!loading ? (
            <>
              <CourseCardCollection courses={filteredCourses} />
            </>
          ) : null}
        </div>
      </main>
    </>
  );
};
