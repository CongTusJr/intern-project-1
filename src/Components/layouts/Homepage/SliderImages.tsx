import React from "react";
import Slider from "react-slick";
import { SliderItem } from "../../../interface";
import { FaPlus } from "react-icons/fa";

const SliderImages: React.FC<{ arrImages: SliderItem[] }> = ({ arrImages }) => {
  const settings = {
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white py-10">
      <h4 className="text-h2 text-[#000] text-center mb-[15px] mt-[10px]">
        HÌNH ẢNH
      </h4>
      <div>
        <Slider {...settings}>
          {arrImages.map((arrImage) => (
            <div key={arrImage.key} className="relative">
              <img src={arrImage.url} alt={arrImage.name} className="w-full" />
              <div className="absolute inset-0 bg-black bg-opacity-50 m-[10px] flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="border-[1px] border-white border-solid py-12 px-16">
                  <h3 className="text-white text-center text-2xl">
                    {arrImage.key}
                  </h3>
                  <FaPlus className="text-white text-center text-2xl mt-[15px] cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderImages;
