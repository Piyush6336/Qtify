import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import LeftNavButton from '../Button/leftNavButton';
import RightNavButton from '../Button/rightNvButton';

const Carousel = ({ items, renderItem }) => {
  return (
    <div className="carousel-container" style={{ position: 'relative' }}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.carousel-button.right',
          prevEl: '.carousel-button.left',
        }}
        spaceBetween={20}
        slidesPerView={'auto'}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        
        {items.map((item, index) => (
            
          <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
          
        ))}
      </Swiper>
      <LeftNavButton />
        <RightNavButton />
      
    </div>
  );
};

export default Carousel;
