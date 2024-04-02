import React, { useState } from "react"; // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";

const Container: React.FC<{
  arrUrlRoom: string[];
  detailAmenities: string[];
  detailServices: string[];
}> = ({ arrUrlRoom, detailAmenities, detailServices }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="block w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto mt-[60px] px-[15px]">
      <div className="block md:grid grid-cols-12">
        <div className="col-span-7 md:px-[15px]">
          <Swiper
            spaceBetween={10}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
            modules={[Autoplay, FreeMode, Navigation, Thumbs]}
          >
            {arrUrlRoom.map((imageUrl, index) => (
              <SwiperSlide key={index}>
                <div className="w-full border-[4px] border-solid border-white">
                  <img src={imageUrl} alt="" className="w-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            slidesPerView={3.5}
            freeMode={true}
            pagination={false}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Pagination, Thumbs]}
            className="relative mb-[60px] overflow-x-auto border-[4px] border-solid border-white text-black"
            breakpoints={{
              1024: {
                slidesPerView: 4.6,
              },
            }}
          >
            {arrUrlRoom.map((imageUrl, index) => (
              <SwiperSlide key={index} className="w-[110px] mr-[5px]">
                <img src={imageUrl} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-5 px-[15px]">
          <h3 className="text-2xl relative mt-5 mb-[34px] leading-[18px] after:bg-[#b5876d] after:bg-opacity-50 after:bg-none after:bg-repeat after:bg-scroll after:bottom-[-10px] after:h-[1px] after:left-0 after:w-[90px] after:absolute">
            PHÒNG SUPERIOR
          </h3>
          <div className="text-justify text-[#333]">
            Phòng Superior có diện tích 28m2 được thiết kế hài hòa với nội thất
            sang trọng và đầy đủ tiện nghi hiện đại mang đến sự thoải mái, tiện
            lợi nhất cho quý khách.
            <br />
            Phòng Superior gồm 1 giường đôi và có cửa sổ.
          </div>
          <table className="w-full ">
            <tbody>
              <tr>
                <td className="w-[50%]">
                  <div className="text-[#333]">
                    <div>
                      <strong>Tiện nghi trong phòng:</strong>
                    </div>
                    <ul>
                      {detailAmenities.map((amenitie, index) => (
                        <li key={index}>• {amenitie}</li>
                      ))}
                    </ul>
                  </div>
                </td>
                <td className="w-[50%]">
                  <div className="text-[#333]">
                    <div>
                      <strong>Dịch vụ cung cấp:</strong>
                    </div>
                    <ul>
                      {detailServices.map((service, index) => (
                        <li key={index}>• {service}</li>
                      ))}
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="relative w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto  before:table px-[15px] text-center after:clear-both">
        <a
          href="/booking"
          className="text-textA hover:text-white mx-auto py-[10px] px-5 border border-solid border-textA hover:bg-textA hover:border-white"
        >
          Đặt phòng ngay
        </a>
      </div>
    </div>
  );
};

export default Container;
