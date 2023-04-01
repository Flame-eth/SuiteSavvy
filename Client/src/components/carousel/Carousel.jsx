import { useState, useRef } from "react";
import "./Carousel.css";
import { properties } from "../../assets/property";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

const Carousel = () => {
  const [scrollX, setScrollX] = useState(0);
  const refCarousel = useRef(null);

  const handlePrevClick = () => {
    const carouselWidth = refCarousel.current.offsetWidth;
    const scrollDistance = Math.min(carouselWidth, scrollX);
    setScrollX(scrollX - scrollDistance);
  };

  const handleNextClick = () => {
    const carouselWidth = refCarousel.current.offsetWidth;
    const scrollDistance = Math.min(
      carouselWidth,
      refCarousel.current.scrollWidth - scrollX - carouselWidth
    );
    setScrollX(scrollX + scrollDistance);
  };
  return (
    <div>
      <div className="carousel">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${scrollX}px)` }}
          ref={refCarousel}>
          {properties.map((item) => (
            <div className="carousel-item" key={item.id}>
              <img className="pListImg" src={item.img} alt={item.title} />
              <div className="pListTitles">
                <h1>{item.title}</h1>
                <h2>Quantity: {item.quantity}</h2>
              </div>
            </div>
          ))}
        </div>
        <BsArrowLeftCircle
          className="carousel-button carousel-button-prev"
          size={"30px"}
          color="#003580"
          onClick={handlePrevClick}
        />
        <BsArrowRightCircle
          className="carousel-button carousel-button-next"
          size={"30px"}
          color="#003580"
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Carousel;
