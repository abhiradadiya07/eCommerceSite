/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "@/static/static";
import { Link } from 'react-router-dom';

const SlideCard = ({ title, desc }) => (
  <div className="absolute left-10 p-6 w-1/2">
      <h1 className="text-xl md:text-7xl font-bold mb-4 text-gray-800 py-6">{title}</h1>
      <p className="text-lg md:text-5xl text-gray-600 mb-10">{desc}</p>
      <Link to={'/products'} className="bg-blue-500 text-sm p-2 text-white md:px-6 md:py-2 rounded hover:bg-blue-600 transition">
        Visit Collections
      </Link>
  </div>
);

const SliderHome = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Run once to set initial state

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // pauseOnHover: true,
    // adaptiveHeight: true,
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {SliderData.map((slide, index) => (
          <div key={index} className="w-full h-screen relative">
            <div 
              className="w-full h-full bg-cover bg-center absolute top-0 left-0"
              style={{
                backgroundImage: `url(${isMobile ? slide.cover.mobile : slide.cover.desktop})`,
              }}
            />
            <div className="w-full h-full flex items-center justify-center relative z-10">
              <SlideCard title={slide.title} desc={slide.desc} />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderHome;