import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Core styles
import 'swiper/css/navigation'; // Navigation module styles
import './Carousel.css';
// import LeftArrow from './LeftArrow'; // Import the left navigation button component
// import RightArrow from './RightArrow'; // Import the right navigation button component
import { Navigation } from 'swiper/modules';

const Carousel = ({ items, renderItem }) => {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
                prevEl: '.left-arrow',
                nextEl: '.right-arrow',
            }}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
        >
            {items.map((item, index) => (
                <SwiperSlide key={index}>{renderItem(item)}</SwiperSlide>
            ))}
            {/* <LeftArrow className="left-arrow" /> */}
            {/* <RightArrow className="right-arrow" /> */}
        </Swiper>
    );
};

export default Carousel;
