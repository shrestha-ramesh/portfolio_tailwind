import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { PiFileSqlFill } from "react-icons/pi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from "../../public/ramesh.jpeg";

export default function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:p-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I&apos;m a</h1>
              {/* <span className="text-red-700 font-bold">Developer</span>*/}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-lg text-justify">
              Hello there! 👋 I&apos;m Ramesh, a dedicated Software Developer who&apos;s
              devoted the last three years mastering Java software development.
              My passion for solving complex problems and my ability to deliver
              innovative solutions have been my fuel in this exciting journey.💻
              As a Software Engineer at Infosys, my role involves working
              collaboratively with agile teams to develop and deliver
              micro-frontends and micro-services.
            </p>
            <br />
            {/*social media icons*/}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagramSquare className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://desktop.telegram.org/" target="_blank">
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h1 className="font-bold">Experience</h1>
                <div className="flex space-x-5">
                  <PiFileSqlFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <BiLogoSpringBoot className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaJava className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              alt=""
              className="rounded-full md:w-[450px] md:h-[450px]"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
