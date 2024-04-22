import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RoomDetails } from "../../interface";

const RoomRelate: React.FC<{ arrRooms: RoomDetails[] }> = ({ arrRooms }) => {
  return (
    <div>
      <div className="relative w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto text-[#333] px-[15px]">
        <h3 className="relative mt-5 mb-[34px] text-2xl  after:bg-[#b5876d] after:bg-none after:bg-repeat after:bg-scroll after:bottom-[-10px] after:h-[1px] after:left-0 after:w-[90px] after:absolute uppercase">
          phòng liên quan
        </h3>
        <Swiper
          slidesPerView={1}
          navigation={false}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {arrRooms.map((arrRoom) => (
            <SwiperSlide key={arrRoom.id} className="w-[262.5px] ">
              <img
                src={arrRoom.image}
                alt={arrRoom.name}
                className="w-full px-[15px]"
              />
              <div className="p-5 w-full">
                {/* <a href={arrRoom.url}> */}
                <a href={`/room/details/${arrRoom.id}`}>
                  <h4 className="text-center mt-[5px] mb-[10px] hover:text-[#C52D2F] text-textA pl-[5px] text-lg font-bold">
                    {arrRoom.name}
                  </h4>
                </a>
                {/* </a> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomRelate;
