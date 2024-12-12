// Carousel.js
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Import Navigation module
import 'swiper/css';
import 'swiper/css/navigation';

// Import your custom button components
import LeftButton from '../Button/leftNavButton';
import RightButton from '../Button/rightNvButton';

const Carousel = ({ items, renderItem }) => {
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container" style={{ position: 'relative' }}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem(item)} {/* Use the renderItem prop */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        className="custom-swiper-button-prev"
        style={{ position: 'absolute', top: '50%', left: '-20px', zIndex: 10 }}
      >
        <LeftButton />
      </div>
      <div
        className="custom-swiper-button-next"
        style={{ position: 'absolute', top: '50%', right: '-20px', zIndex: 10 }}
      >
        <RightButton />
      </div>
    </div>
  );
};

export default Carousel;
