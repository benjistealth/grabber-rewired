import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Cube.css";

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { EffectCube, Pagination, Navigation, Autoplay } from 'swiper';

import slide_image_1 from '../../assets/images/food_1.jpg';
import slide_image_2 from '../../assets/images/food_2.jpg';
import slide_image_3 from '../../assets/images/food_3.jpg';
import slide_image_4 from '../../assets/images/food_4.jpg';
import slide_image_5 from '../../assets/images/food_5.jpg';



function Cube() {

    return (
        <div className="container is-centered carousel-container">
            <h1 className="carousel-heading has-text-centered"> {'<Grabber Rewired />'} </h1>
            <Swiper
                autoplay={{ delay: 2000, disableOnInteraction: "true" }}
                effect={'cube'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                cubeEffect={{
                    shadows: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.8,
                    fade: true,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[ EffectCube, Pagination, Navigation, Autoplay]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_4} alt="slide_image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_5} alt="slide_image" />
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-next slider-arrow"></div>
                    <div className="swiper-button-prev slider-arrow"></div>
                </div>

            </Swiper>
        </div>
    );
}

export default Cube;
