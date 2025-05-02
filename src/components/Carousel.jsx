import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

import atm1 from "../assets/ATM1.jpg";
import atm2 from "../assets/ATM2.jpg";
import atm3 from "../assets/ATM3.jpg";
import atm4 from "../assets/ATM4.jpg";

function Carousel() {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop
        speed={800}
        className="carousel-container">
        <SwiperSlide className="carousel-slide">
          <img src={atm1} alt="Slide 1" className="carousel-image" />
          <div className="carousel-overlay">
          <h2 className="carousel-text">24/7 - Sales, Services & Processing of ATM's</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src={atm2} alt="Slide 2" className="carousel-image" />
          <div className="carousel-overlay">
          <h2 className="carousel-text">24/7 - Sales, Services & Processing of ATM's</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src={atm3} alt="Slide 3" className="carousel-image" />
          <div className="carousel-overlay">
          <h2 className="carousel-text">24/7 - Sales, Services & Processing of ATM's</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src={atm4} alt="Slide 4" className="carousel-image" />
          <div className="carousel-overlay">
          <h2 className="carousel-text">24/7 - Sales, Services & Processing of ATM's</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src={atm1} alt="Slide 1" className="carousel-image" />
          <div className="carousel-overlay">
          <h2 className="carousel-text">24/7 - Sales, Services & Processing of ATM's</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src={atm2} alt="Slide 2" className="carousel-image" />
          <div className="carousel-overlay">
          <h2 className="carousel-text">24/7 - Sales, Services & Processing of ATM's</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src={atm3} alt="Slide 3" className="carousel-image" />
          <div className="carousel-overlay">
          <h2 className="carousel-text">24/7 - Sales, Services & Processing of ATM's</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img src={atm4} alt="Slide 4" className="carousel-image" />
          <div className="carousel-overlay">
          <h2 className="carousel-text">24/7 - Sales, Services & Processing of ATM's</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;