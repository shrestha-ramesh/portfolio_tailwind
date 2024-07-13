import springboot from "../assets/springBoot.jpg";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/node.png";
import dynatrace from "../assets/Dynatrace_Logo.jpg";
import java from "../assets/java.png";
import cosmosDB from "../assets/azure-cosmos.jpg";
import controlM from "../assets/contorl-M.jpg";
import elk from "../assets/elk-logstash.webp";
import gemfire from "../assets/Gemfire.webp";
import jenkins from "../assets/jenkins.jpeg";
import pcf from "../assets/PCF.png";
import sql from "../assets/azure.jpg";
import cdc from "../assets/CDC.png";
import maven from "../assets/maven.jpeg";
import gradle from "../assets/gradle.png";

export default function Experience() {
  const cardItems = [
    { id: 2, logo: springboot, name: "SpringBoot" },
    { id: 3, logo: reactjs, name: "ReactJs" },
    { id: 4, logo: nodejs, name: "NodeJs" },
    { id: 5, logo: dynatrace, name: "Dynatrace" },
    { id: 6, logo: java, name: "Java" },
    { id: 7, logo: cosmosDB, name: "CosmosDB" },
    { id: 8, logo: controlM, name: "Contol-M" },
    { id: 9, logo: elk, name: "ELK-Dashboard" },
    { id: 10, logo: gemfire, name: "Gemfire" },
    { id: 11, logo: jenkins, name: "Jenkins" },
    { id: 12, logo: pcf, name: "PCF" },
    { id: 13, logo: sql, name: "SQL" },
    { id: 14, logo: cdc, name: "CDC" },
    { id: 15, logo: maven, name: "Maven" },
    { id: 15, logo: gradle, name: "Gradle" },
  ];
  return (
    <>
      <div
        name="Experience"
        className="max-w-screen-2xl container mx-auto px-4 md:p-20 my-16"
      >
        <div>
          <h1 className="mb-5 text-3xl font-bold">Experience</h1>
          <p>I&apos;ve experiance in below technologies.</p>
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
