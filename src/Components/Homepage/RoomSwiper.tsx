// import React from 'react'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { RoomDetails } from "../../interface";
import { Link } from "react-router-dom";

const RoomSwipers: React.FC<{ arrRooms: RoomDetails[] }> = ({ arrRooms }) => {
  return (
    <div
      className="flex bg-center justify-center bg-cover pb-10 bg-no-repeat mt-[60px] mb-10"
      style={{
        backgroundImage:
          'url("https://reynaluxuryhotel.com/Content/Img/bgr-room.jpg")',
        backgroundAttachment: "fixed",
      }}
    >
      <div className=" sm:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto px-[15px] w-full ">
        <h4 className="text-h2 text-center text-white my-[30px] mt-[40px]">
          PHÒNG KHÁCH SẠN
        </h4>
        <div className="">
          <Swiper
            slidesPerView={1}
            navigation={false}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            className="left-[15px]"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
          >
            {arrRooms.map((arrRoom) => (
              <SwiperSlide key={arrRoom.id} className="mr-[10px]">
                <img
                  src={arrRoom.image}
                  alt={arrRoom.name}
                  className="w-[93%]"
                />
                <div className="p-5 bg-background w-[93%]">
                  <div className="cursor-pointer">
                    <Link to={`/room/details/${arrRoom.id}`}>
                      <h4 className="text-center mt-[5px] mb-[10px] hover:text-[#C52D2F] text-textA pl-[5px] text-lg font-bold">
                        {arrRoom.name}
                      </h4>
                    </Link>
                  </div>
                  <div className="text-justify">{arrRoom.bio}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default RoomSwipers;
