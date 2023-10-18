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

export const RouterPage = () => {
  const ProtectedMyCourses = withAuth(MyCourses);
  const ProtectedUserProfile = withAuth(UserProfile);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route
          path="/course-details/:courseId"
          element={<CourseDetails />}
        ></Route>
        <Route path="/user-profile" element={<ProtectedUserProfile />}></Route>
        <Route path="/my-courses" element={<ProtectedMyCourses />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>
  );
};
