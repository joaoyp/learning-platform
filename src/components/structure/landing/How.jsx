import { Lettering } from "../../common/Lettering";
import { StepCard } from "./StepCard";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../common/PrimaryButton";

export const How = () => {
  return (
    <section className="h-fit bg-white">
      <div className="text-black w-full h-40 flex flex-col gap-4 justify-center items-center">
        <Lettering text={"How Does It Work? Quite Simple"} fontSize={30} />
        <Lettering
          text={
            "Explore our simple and effective learning platform designed to empower your educational experience."
          }
          fontSize={20}
        />
      </div>
      <div className="h-full p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-full">
        <StepCard
          title={"Step 1"}
          text={
            "Browse our extensive catalog of courses and find the perfect course for you."
          }
          imagePath={
            "https://images.hindustantimes.com/tech/img/2021/10/14/960x540/student-849822_1920_1634177386155_1634177405997.jpg"
          }
        />

        <StepCard
          title={"Step 2"}
          text={
            "Enroll in your chosen courses and start learning at your own pace."
          }
          imagePath={
            "https://newinti.edu.my/wp-content/uploads/2021/08/New-Student_477489004.jpg"
          }
        />

        <StepCard
          title={"Step 3"}
          text={
            "Participate in discussions and collaborate with fellow learners."
          }
          imagePath={
            "https://images.pexels.com/photos/8636603/pexels-photo-8636603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />

        <StepCard
          title={"Step 4"}
          text={
            "Track your progress and apply your new skills in your personal and professional life."
          }
          imagePath={
            "https://www.christinecarter.com/wp-content/uploads/2020/12/pexels-lukas-669622.jpg"
          }
        />
      </div>
      <div className="w-full flex justify-center mb-8">
        <Link to="/courses">
          <PrimaryButton text="Browse Courses" size="large" fontSize={20} />
        </Link>
      </div>
    </section>
  );
};
