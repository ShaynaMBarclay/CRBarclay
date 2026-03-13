import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

import atm1 from "../assets/ATM1.jpg";
import atm2 from "../assets/ATM2.jpg";
import atm3 from "../assets/ATM3.jpg";
import atm4 from "../assets/ATM4.jpg";

const slides = [
  { img: atm1, headline: "24/7 ATM Sales, Service & Processing", sub: "Reliable machines. Round-the-clock support." },
  { img: atm2, headline: "Installation & Maintenance You Can Count On", sub: "Fast response. Expert technicians. Zero downtime." },
  { img: atm3, headline: "Boost Foot Traffic & Revenue", sub: "Turn your location into a cash-flow asset." },
  { img: atm4, headline: "Now Offering Bitcoin ATM Solutions", sub: "Stay ahead with cryptocurrency transaction support." },
];

function Carousel() {
  return (
    <div className="carousel-wrapper">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        speed={900}
        className="carousel-container"
      >
        {slides.map((slide, i) => (
          <SwiperSlide className="carousel-slide" key={i}>
            <img src={slide.img} alt={`Slide ${i + 1}`} className="carousel-image" />
            <div className="carousel-overlay">
              <div className="carousel-overlay-inner">
                <div className="carousel-flag-bar">
                  <span className="flag-red" />
                  <span className="flag-white" />
                  <span className="flag-blue" />
                </div>
                <h2 className="carousel-text">{slide.headline}</h2>
                <p className="carousel-sub">{slide.sub}</p>
                <a href="/contact" className="carousel-btn">Request a Free Consultation</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;