import Projects from "./Projects";
import Skills from "./Skills";
import data from "../data.json";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Main = ({ divRef, setScroll, scroll, shown, setShown }) => {
  useEffect(() => {
    if (window.screen.availWidth < 790) {
      setShown(true);
    } else if (scroll > 50) {
      setShown(true);
    }
  }, []);

  return (
    <div
      ref={divRef}
      className="h-full px-3 lg:px-10 md:max-h-screen overflow-scroll"
    >
      {/* Main Head */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="py-6 sticky"
      >
        <motion.h1
          initial={{ y: "-100vh" }}
          animate={{ y: 0, transition: { duration: 1, type: "spring" } }}
          className="text-6xl font-semibold text-primary"
        >
          Robin Thomas
        </motion.h1>
        <motion.p
          initial={{ x: "100vw" }}
          animate={{ x: 0, transition: { duration: 1 } }}
          className="font-light text-lg text-primary pl-2"
        >
          ASP.Net / C# / .Net Core / Web API / Azure / SQL / Angular / React /
          NodeJs / Next / Python / Selenium Developer
        </motion.p>
      </motion.div>
      <div className="h-[1px] rounded-full bg-extra-200" />
      {/* Work Exp */}
      <div className="py-2">
        <div>
          <h1 className="tracking-widest text-primary font-semibold text-lg mb-2 border-2 rounded-full bg-extra-100 text-center hover:bg-extra-200 transition duration-700">
            WORK EXPERIENCE
          </h1>
        </div>
        <div className="grid grid-cols-6 py-2 px-4">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0, transition: { duration: 1 } }}
            className="col-span-2"
          >
            <h1 className="font-medium text-lg text-primary text-right">
              Concentrix Catalyst, Omaha - NE
            </h1>
            <p className="font-light text-primary text-right">
              Nov 2017-Present
            </p>
            <h1 className="font-medium text-lg text-primary text-right mt-5">
              TekVista Inc, Fremont - CA
            </h1>
            <p className="font-light text-primary text-right">
              Feb 2015-Nov 2017
            </p>
          </motion.div>
          <div className="flex flex-col justify-center items-center col-span-1">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <div className="w-0.5 bg-extra-100 h-full" />
            <div className="w-2 h-2 bg-primary rounded-full" />
          </div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0, transition: { duration: 1 } }}
            className="col-span-2"
          >
            <div>
              <h1 className="text-primary font-semibold text-lg">
                Fullstack Developer
              </h1>
            </div>
            <div>
              <ul>
                <li className="text-primary font-extralight hover:text-blue-900 cursor-pointer pl-4">
                  {" "}
                  Developed SPA Web application using React, Next and NodeJS
                  with Tailwind CSS
                </li>
                <li className="text-primary font-extralight hover:text-blue-900 cursor-pointer pl-4">
                  {" "}
                  Developed front-end applications using PowerApps consuming
                  Azure APIM
                </li>
                <li className="text-primary font-extralight hover:text-blue-900 cursor-pointer pl-4">
                  {" "}
                  Scheduled background jobs in Power Automate/Flow and Azure
                  Data Factory
                </li>
                <li className="text-primary font-extralight hover:text-blue-900 cursor-pointer pl-4">
                  {" "}
                  Designed Database objects in Azure SQL Server and developed
                  stored procedures
                </li>
                <li className="text-primary font-extralight hover:text-blue-900 cursor-pointer pl-4">
                  {" "}
                  Thoroughly followed the Agile Methodology in the entire
                  project using Azure DevOps
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="h-[1px] rounded-full bg-extra-200" />
      {/* Skills */}
      <div className="py-6">
        <div>
          <h1 className="tracking-widest text-primary font-semibold text-lg mb-2 border-2 rounded-full bg-extra-100 text-center hover:bg-extra-200 transition duration-700">
            SKILLS
          </h1>
        </div>
        <div className="grid grid-cols-2 space-x-4">
          <div>
            <h1>PROFESSIONAL</h1>
            <motion.div>
              <Skills skill="ReactJS" percentage="80%" />
              <Skills skill="Redux" percentage="70%" />
              <Skills skill="Javascript/ES6" percentage="70%" />
              <Skills skill="Typescript" percentage="60%" />
              <Skills skill="NextJS" percentage="80%" />
              <Skills skill="HTML" percentage="70%" />
              <Skills skill="CSS" percentage="70%" />
              <Skills skill="SCSS" percentage="65%" />
              <Skills skill="GIT" percentage="70%" />
              <Skills skill="Testing(Selenium)" percentage="60%" />
              <Skills skill="NodeJS" percentage="80%" />
              <Skills skill="Express" percentage="50%" />
              <Skills skill="SQL" percentage="70%" />
              <Skills skill="MongoDB" percentage="50%" />
              <Skills skill="Firebase/PostgreSQL" percentage="40%" />
              <Skills skill="Webpack" percentage="60%" />
              <Skills skill="Docker" percentage="30%" />
              <Skills skill="C#" percentage="75%" />
              <Skills skill=".Net Core" percentage="60%" />
              <Skills skill="ASP .Net" percentage="50%" />
              <Skills skill="Web API" percentage="60%" />
              <Skills skill="Azure" percentage="60%" />
              <Skills skill="Angular " percentage="50%" />
              <Skills skill="Python" percentage="50%" />
              <Skills skill="Selenium" percentage="60%" />
            </motion.div>
          </div>
          <div>
            <h1>PERSONAL</h1>
            <div>
              <Skills skill="Communication" percentage="80%" />
              <Skills skill="Leadership" percentage="78%" />
              <Skills skill="Teamwork" percentage="70%" />
              <Skills skill="Creativity" percentage="75%" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] rounded-full bg-extra-200" />
      <div className="py-6">
        <div>
          <h1 className="tracking-widest text-primary font-semibold text-lg mb-2 border-2 rounded-full bg-extra-100 text-center hover:bg-extra-200 transition duration-700">
            PROJECTS
          </h1>
        </div>
        {
          <div className="lg:grid lg:grid-cols-2 lg:gap-4">
            {data.map((item, index) => {
              return (
                <Projects
                  key={index}
                  name={item.title}
                  tech={item.tech}
                  imgUri={item.imgUri}
                  uri={item.uri}
                />
              );
            })}
          </div>
        }
      </div>
    </div>
  );
};

export default Main;
