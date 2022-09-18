import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section className="slider-wrap">
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <div className="slideText-wrapper">
          <h2 className="slide-title">{slide.title}</h2>
          <h3 className="slide-text">{slide.description}</h3>
          </div>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
