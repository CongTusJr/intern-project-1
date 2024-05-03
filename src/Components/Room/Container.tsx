import React, { useEffect } from "react";
import { RoomDetails } from "../../interface";

const Container: React.FC<{ arrRooms: RoomDetails[] }> = ({ arrRooms }) => {
  useEffect(() => {
    document.title = "PHÒNG";
  }, []);
  return (
    <div className="block  w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto mt-[60px]">
      <div className="block md:grid grid-cols-2">
        {arrRooms.map((arrRoom) => (
          <div className="px-[15px] mb-[30px] " key={arrRoom.id}>
            <div className="border border-[#ddd]">
              <a href="/#">
                <img
                  src={arrRoom.image}
                  alt={arrRoom.name}
                  className="w-full"
                />
              </a>{" "}
              <div className="px-[15px] py-[10px]">
                <a href={`/room/details/${arrRoom.id}`}>
                  <span className="uppercase text-[22px] text-[#263e5b] font-bold ">
                    {arrRoom.name}
                  </span>
                </a>
                <div className="text-justify text-[#666]">{arrRoom.bio}</div>
              </div>
              <div className="flex justify-between items-center border-t border-[#ddd] px-[15px] py-[5px ] text-[#828c95] text-[15px] ">
                <div>
                  Bắt đầu từ:{" "}
                  <span className="text-[34px] text-[#263e5b] font-bold ">
                    {arrRoom.price} ++
                  </span>{" "}
                  VND / Ngày
                </div>
                <a
                  href={`/room/details/${arrRoom.id}`}
                  className="text-[#ff3d54] uppercase text-[14px] border-b pt-4"
                >
                  Chi tiết
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container;
