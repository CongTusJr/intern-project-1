import React from "react";
import { RoomDetails } from "../../interface";
import { Link } from "react-router-dom";

const qualitys = [
  {
    key: 0,
    value: "0",
    label: "0",
  },
  {
    key: 1,
    value: "1",
    label: "1",
  },
  {
    key: 2,
    value: "2",
    label: "2",
  },
  {
    key: 3,
    value: "3",
    label: "3",
  },
  {
    key: 4,
    value: "4",
    label: "4",
  },
  {
    key: 5,
    value: "5",
    label: "5",
  },
  {
    key: 6,
    value: "6",
    label: "6",
  },
];

const RoomList: React.FC<{ roomList: RoomDetails[] }> = ({ roomList }) => {
  return (
    <div>
      <table className=" w-full max-w-full border border-solid border-[#ddd] border-collapse my-5">
        <thead>
          <tr className="grid grid-cols-12">
            <td className="col-span-4 p-2 border border-solid  text-[#333] border-[#ddd]">
              <strong>Loại Phòng</strong>
            </td>
            <td className=" col-span-3 p-2 border border-solid text-[#333]  border-[#ddd]">
              <strong>Giá/Đêm</strong>
            </td>
            <td className=" col-span-3 p-2 border border-solid text-[#333]  border-[#ddd]">
              <strong>Số người tối đa</strong>
            </td>
            <td className="col-span-2 p-2 border border-solid  text-[#333] border-[#ddd]">
              <strong> </strong>
            </td>
          </tr>
        </thead>
        <tbody>
          {roomList.map((room) => (
            <tr className="grid grid-cols-12" key={room.id}>
              <td className="col-span-4 p-2 border border-solid border-[#ddd] font-bold underline hover:no-underline text-[#0e385d] uppercase">
                <Link to={"/room/details"}>
                  <div className="cursor-pointer">{room.name}</div>
                </Link>
              </td>
              <td className=" col-span-3 p-2 border border-solid text-[#333] border-[#ddd]">
                {room.price}
              </td>
              <td className=" col-span-3 p-2 border border-solid text-[#333] border-[#ddd]">
                {room.maxPeople}
              </td>
              <td className="col-span-2 p-2 border border-solid  text-[#333] border-[#ddd]">
                <select className="p-1 border border-solid border-[#333]">
                  {qualitys.map((quality) => (
                    <option value={quality.value} key={quality.key}>
                      {quality.label}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomList;
