import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import "swiper/css";
import { slider } from '@/static/static.js';
import { Box } from '@mui/material';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const Slider = () => {
  const navigate = useNavigate();

  return (
    <Box className="hero-section">
        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {slider?.map((item, index) => (
            <SwiperSlide key={index} className="slide-wrapper">
              <div
                className="slider-image"
                style={{
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundImage: `url(${item?.img})`,
                }}
              />
              <Box
                className="slider-content"
              >
                <h4>{item?.title}</h4>
                <p>{item?.description}</p>
                <Button
                  type="submit"
                  className="submit-button pb-1"
                  onClick={() => navigate("/products")}
                  sx={{ mt: 3, mb: 2 }}
                >
                  More details
                </Button>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
  );
};

export default Slider;
