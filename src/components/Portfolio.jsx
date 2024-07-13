import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import java from "../assets/java.png";
import python from "../assets/python.webp";
import css from "../assets/css.jpg";
import html from "../assets/html.png";
import springboot from "../assets/springBoot.jpg";
import mysql from "../assets/mysql.jpg";

export default function Portfolio() {
  const cardItems = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "Express" },
    { id: 3, logo: reactjs, name: "ReactJs" },
    { id: 4, logo: nodejs, name: "NodeJs" },
    { id: 5, logo: python, name: "Python" },
    { id: 6, logo: java, name: "Java" },
    { id: 7, logo: css, name: "CSS" },
    { id: 9, logo: html, name: "HML" },
    { id: 10, logo: springboot, name: "SpringBoot" },
    { id: 11, logo: mysql, name: "MySQL" },
  ];
  return (
    <>
      <div
        name="Portfolio"
        className="max-w-screen-2xl container mx-auto px-4 md:p-20 mt-10"
      >
        <div>
          <h1 className="mb-5 text-3xl font-bold">Portfolio</h1>
          <span className="underline font-semibold">Feature Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {cardItems.map(({ id, logo, name }) => (
              <div
                className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img
                  src={logo}
                  className="h-[120px] w-[120px] rounded-full border-[2px] p-1"
                  alt=""
                />
                <div>
                  <div className="font-bold text-xl mb-2 px-2">{name}</div>
                  <p className="px-2 text-gray-700">
                    Train to model and analyze the sentence sentiment of the
                    drama audience after geting feedback.
                  </p>
                </div>
                <div className="justify-around px-6 py-4 space-x-3">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                    <a
                      href="https://github.com/shrestha-ramesh?tab=repositories"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                    Source Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
