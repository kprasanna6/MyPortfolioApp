import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";

import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";

const personalDetails = [
  {
    label: "Name",
    value: "Prasanna Laxmi Kasturi",
  },
  {
    label: "Age",
    value: "22",
  },
  {
    label: "Address",
    value: "Hyderabad,Telangana,India",
  },
  {
    label: "Email",
    value: "kasturiprasannalaxmi@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8074904531",
  },
];

const jobSummary =
  "I am a front-end developer.I am specialized in creating user-friendly interfaces and experiences, utilizing technologies such as HTML, CSS, JavaScript,React, and various front-end frameworks to build responsive and visually appealing web applications. With a keen eye for design and a deep understanding of web development best practices, also ensuring that applications are not only functional but also intuitive and engaging for users.collaborating with cross-functional teams to deliver high-quality products that meet client requirements and exceed user expectations.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
            </div>
            <div>
              <DiApple size={60} color="var( --yellow-theme-main-color)" />
            </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
