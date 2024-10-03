/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "@/static/static";
import { Link } from 'react-router-dom';

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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {SliderData.map((slide, index) => (
          <div key={index} className="w-full h-full relative">
            <div className='w-full z-0'>
              <img src={`${isMobile ? slide.cover.mobile : slide.cover.desktop}`} alt="" className='w-full' />
            </div>

            <div className="p-6 w-1/2 absolute lg:left-36 left-[5%] top-1/2 -translate-y-1/2 z-10">
              <h1 className="text-2xl md:text-4xl lg:text-7xl  mb-4 text-gray-800 py-2 md:py-6">{slide.title}</h1>
              <p className="text-lg md:text-3xl lg:text-5xl text-gray-600 mb-10">{slide.desc}</p>
              <Link to={'/products'} className="bg-blue-500 text-sm p-2 text-white md:px-6 md:py-2 rounded hover:bg-blue-600 transition">
                Visit Collections
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderHome;