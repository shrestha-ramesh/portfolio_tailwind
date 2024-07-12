import mongoDB from "../assets/mongodb.jpg";
import express from "../assets/express.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import python from "../assets/python.webp";
import java from "../assets/java.png";

export default function Experience() {
  const cardItems = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "Express" },
    { id: 3, logo: reactjs, name: "ReactJs" },
    { id: 4, logo: nodejs, name: "NodeJs" },
    { id: 5, logo: python, name: "Python" },
    { id: 6, logo: java, name: "Java" },
  ];
  return (
    <>
      <div
        name="Experience"
        className="max-w-screen-2xl container mx-auto px-4 md:p-20 my-16"
      >
        <div>
          <h1 className="mb-5 text-3xl font-bold">Experience</h1>
          <p>
            I&apos;ve more than 3 years of experiance in below technologies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {cardItems.map(({ id, logo, name }) => (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full p-1 md:h-[200px] md:w-[200px] cursor-pointer hover:scale-110 duration-300"
                key={id}
              >
                <img src={logo} className="w-[150px] rounded-full" alt="" />
                <div>
                  <div>{name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
