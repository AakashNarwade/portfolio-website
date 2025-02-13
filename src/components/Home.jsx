import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/heroimage.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row sm:flex-col md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="md:mt-0 mt-20 text-4xl sm:text-7xl font-bold text-white">
            I&apos;m a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1.3 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            <span className="text-cyan-500 text-sm md:text-xl font-bold">
              {" "}
              Javascript, React, Tailwind, Next JS, Redux.
            </span>
          </p>

          <div>
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="mb-32 md:mb-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
