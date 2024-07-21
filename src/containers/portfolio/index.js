
import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "E-Mart",
    image: ImageOne,
    link: "https://github.com/kprasanna6/E-Mart",
  },
  {
    id: 3,
    name: "Crud Operations",
    link: "https://github.com/kprasanna6/Crud-Operations",
    image: ImageTwo,
  },
  {
    id: 4,
    name: "ToDo App With API",
    image: ImageThree,
    link: "https://github.com/kprasanna6/ToDo-App-with-API-Integration",
  },
  {
    id: 5,
    name: "WeatherApp",
    image: ImageFour,
    link: "https://github.com/kprasanna6/WeatherApp",
  },
  {
    id: 6,
    name: "ToDo",
    image: ImageFive,
    link: "https://github.com/kprasanna6/ToDo-List",
  },
  {
    id: 7,
    name: "TicTacToe",
    image: ImageSix,
    link: "https://github.com/kprasanna6/TicTacToe-Game",
  },
];

const Portfolio = () => {
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  }

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => window.open(item.link, "_blank")}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

