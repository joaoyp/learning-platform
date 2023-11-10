import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { Courses } from "../pages/Courses";
import { MyCourses } from "../pages/MyCourses";
import { CourseDetails } from "../pages/CourseDetails";
import { UserProfile } from "../pages/UserProfile";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Page404 } from "../pages/Page404";
import withAuth from "../hoc/withAuth";
import { Contacts } from "../pages/Contacts";
import { About } from "../pages/About";
import { Layout } from "../components/structure/layout/Layout";

export const RouterPage = () => {
  const ProtectedMyCourses = withAuth(MyCourses);
  const ProtectedUserProfile = withAuth(UserProfile);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<LandingPage />} />}></Route>
        <Route
          path="/courses"
          element={<Layout children={<Courses />} />}
        ></Route>
        <Route
          path="/course-details/:courseId"
          element={<Layout children={<CourseDetails />} />}
        ></Route>
        <Route
          path="/user-profile"
          element={<Layout children={<ProtectedUserProfile />} />}
        ></Route>
        <Route
          path="/my-courses"
          element={<Layout children={<ProtectedMyCourses />} />}
        ></Route>
        <Route path="/about" element={<Layout children={<About />} />}></Route>
        <Route
          path="/contacts"
          element={<Layout children={<Contacts />} />}
        ></Route>
        <Route
          path="/sign-in"
          element={<Layout children={<SignIn />} />}
        ></Route>
        <Route
          path="/sign-up"
          element={<Layout children={<SignUp />} />}
        ></Route>
        <Route path="*" element={<Layout children={<Page404 />} />}></Route>
      </Routes>
    </Router>
  );
};
