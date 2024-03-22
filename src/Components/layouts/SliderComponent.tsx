import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from 'react-slick';
import { SliderItem } from '../Interface/interface';

const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="flex absolute left-5 top-1/2 transform -translate-y-1/2 w-[54px] h-[54px] bg-white opacity-50 z-10 cursor-pointer p-3 rounded-full items-center justify-center transition-colors duration-300 hover:opacity-100" onClick={onClick}>
        <FaAngleLeft className="text-[38px] text-center text-[#ae8746]"  />
    </div>
);

const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="flex absolute right-5 top-1/2 transform -translate-y-1/2 w-[54px] h-[54px] bg-white opacity-50 z-10 cursor-pointer p-3 rounded-full items-center justify-center transition-colors duration-300 hover:opacity-100" onClick={onClick}>
        <FaAngleRight className="text-[38px] text-center text-[#ae8746]"  />
    </div>
);
const SliderComponent:React.FC<{arrImages:SliderItem[]}> = ({arrImages}) => {
    const settings = {
        dots: false,
        fade: true,
        autoplay: true,
        autoplayspeed:3000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
      };
  return (
    <div>
        <div className='w-full'>
            <Slider {...settings}>
                {arrImages.map((image)=>(
                    <div key={image.key}>
                        <img src={image.url} alt={image.name}  className='w-full'/>
                    </div>
                ))}
            </Slider>   
        </div>
    </div>
  )
}

export default SliderComponent