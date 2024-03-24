import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
const Carousel = () => {
  const sliderRef = React.useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const images = [
    'https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?cs=srgb&dl=pexels-pixabay-36478.jpg&fm=jpg',
    'https://miro.medium.com/v2/resize:fit:1200/1*S81O15rjKfG-BFdnNC6-GQ.jpeg',
    'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Screenshot_2023-07-21_at_3.36.56.width-1000.format-webp.webp',
    'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg',
    'https://okcredit-blog-images-prod.storage.googleapis.com/2021/05/boutiquebusiness1.jpg',
    'https://t2.tudocdn.net/580408?w=1920',
  ];

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="carousel-container">
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="carousel-controls">
        <button className="prev-btn" onClick={goToPrevSlide}>
          Previous
        </button>
        <button className="next-btn" onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
