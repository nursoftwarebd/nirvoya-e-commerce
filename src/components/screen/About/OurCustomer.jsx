"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import leftArrow from "../../../assets/icons/sl-left-arrow.svg";
import "../../../styles/customswiper.css";
import SliderCard from "./SliderCard";

// import required modules

const OurCustomer = () => {
  return (
    <div className="pt-[100px] pb-[140px]">
      {/* title */}
      <div className="flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl md:text-heading30 xl:text-heading35 text-blackPrimary leading-[30px] font-semibold">
            Our Customer say about us
          </h1>
          <h4 className="max-w-[584px] leading-6 text-black/60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h4>
        </div>
      </div>
      <div className="pt-11 pl-3 lg:pl-12 relative">
        <div className="">
          <Swiper
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1365: {
                slidesPerView: 2.5,
                spaceBetween: 0,
              },
            }}
            navigation={{
              enabled: true,
              prevEl: ".customer_pre_button",
              nextEl: ".customer_next_button",
            }}
            modules={[Navigation]}
            className=""
          >
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard />
            </SwiperSlide>
          </Swiper>

          <button className="customer_pre_button w-[57px] h-[57px] bg-white flex items-center justify-center rounded-full shadow-lg">
            <Image src={leftArrow} alt="left-arrow" />
          </button>
          <button className="customer_next_button w-[57px] h-[57px] bg-white flex items-center justify-center rounded-full shadow-lg">
            <Image src={leftArrow} alt="left-arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
