import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slideshow = () => {
  const images = [
    `${process.env.PUBLIC_URL}/assets/img/slide1.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/slide2.jpg`,
    `${process.env.PUBLIC_URL}/assets/img/slide3.jpg`,
  ];

  return (
    <div className="slide-container">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
