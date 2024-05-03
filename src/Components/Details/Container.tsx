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
import { RoomDetails } from "../../interface";

const Container: React.FC<{
  arrUrlRoom: string[];
  amenitiesArray: string[] | undefined;
  servicesArray: string[] | undefined;
  roomDetails: RoomDetails | RoomDetails[];
}> = ({ arrUrlRoom, roomDetails, amenitiesArray, servicesArray }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const roomDetailsArray = Array.isArray(roomDetails)
    ? roomDetails
    : [roomDetails];
  const amenities = Array.isArray(amenitiesArray) ? amenitiesArray : [];
  const services = Array.isArray(servicesArray) ? servicesArray : [];

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
        {roomDetailsArray?.map((roomDetail) => (
          <div className="col-span-5 px-[15px]" key={roomDetail.id}>
            <h3 className="text-2xl relative mt-5 mb-[34px] leading-[18px] after:bg-[#b5876d] after:bg-opacity-50 after:bg-none after:bg-repeat after:bg-scroll after:bottom-[-10px] after:h-[1px] after:left-0 after:w-[90px] after:absolute">
              {roomDetail.name}
            </h3>
            <div className="text-justify text-[#333]">{roomDetail.bio}</div>
            <table className="w-full ">
              <tbody>
                <tr>
                  <td className="w-[50%]">
                    <div className="text-[#333]">
                      <div>
                        <strong>Tiện nghi trong phòng:</strong>
                      </div>
                      <ul>
                        {amenities.map((amenity, index) => (
                          <li key={index}>• {amenity}</li>
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
                        {services.map((service, index) => (
                          <li key={index}>• {service}</li>
                        ))}
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
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
