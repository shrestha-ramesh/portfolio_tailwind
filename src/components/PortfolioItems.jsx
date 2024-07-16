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

export const portfolioItems = [
  {
    id: 1,
    logo: mongoDB,
    name: "MongoDB",
    sourCodeLink:
      "https://github.com/shrestha-ramesh/ReactExpressAuth/tree/main/backend",
    description:
      "User can register, login, delete and update data on mongoDB database through UI",
  },
  {
    id: 2,
    logo: express,
    name: "Express",
    sourCodeLink:
      "https://github.com/shrestha-ramesh/ReactExpressAuth/tree/main/backend",
    description:
      "User will be validate and after validation, user can modify data accordingly",
  },
  {
    id: 3,
    logo: reactjs,
    name: "ReactJs",
    sourCodeLink: "https://github.com/shrestha-ramesh/crw-clothing",
    description:
      "Online clothing shop user can add, delete and update items on cart",
  },
  {
    id: 4,
    logo: nodejs,
    name: "NodeJs",
    sourCodeLink:
      "https://github.com/shrestha-ramesh/ReactExpressAuth/tree/main/backend",
    description:
      "User will be validate and after validation, user can modify data accordingly",
  },
  {
    id: 5,
    logo: python,
    name: "Python",
    sourCodeLink:
      "https://github.com/shrestha-ramesh/Sentence-Sentimental-Analysis",
    description:
      "Analyze the emotional sentiment after getting feedback from threater audience",
  },
  {
    id: 6,
    logo: java,
    name: "Java",
    sourCodeLink: "https://github.com/shrestha-ramesh/KaWa-Hotel",
    description:
      "User can see the price per nights and book the hotel room in convience",
  },
  {
    id: 7,
    logo: css,
    name: "CSS",
    sourCodeLink: "https://github.com/shrestha-ramesh/ColorInfo",
    description:
      "Web page desing through css to show web page properly on browser",
  },
  {
    id: 8,
    logo: html,
    name: "HTML",
    sourCodeLink: "https://github.com/shrestha-ramesh/ColorInfo",
    description:
      "Design web page using html, brefly descript the colors meaning",
  },
  {
    id: 9,
    logo: springboot,
    name: "SpringBoot",
    sourCodeLink: "https://github.com/shrestha-ramesh/webscrip",
    description:
      "Cron job, It run Monday to Friday headless browser  get the data and sent to email update status",
  },
  {
    id: 10,
    logo: mysql,
    name: "MySQL",
    sourCodeLink: "https://github.com/shrestha-ramesh/Data_Migration_Talend",
    description:
      "Data migration from file to database, implement on microserivces",
  },
];
