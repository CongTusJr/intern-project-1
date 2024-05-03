import React, { useState } from "react";
import { IoCalendarSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import dayjs from "dayjs";
import "dayjs/locale/vi";
import "./booknow.css";

const optionPeoples = [
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

const BookNow: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [selectedValueIn, setSelectedValueIn] = useState("");
  const [selectedValueOut, setSelectedValueOut] = useState("");

  const handleCheckInChange = (date: Date | null) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date: Date | null) => {
    setCheckOutDate(date);
  };

  const navigate = useNavigate();

  const handleBooking = () => {
    if (checkInDate && checkOutDate) {
      const formattedCheckInDate = dayjs(checkInDate).format("MM%2FDD%2FYYYY");
      const formattedCheckOutDate =
        dayjs(checkOutDate).format("MM%2FDD%2FYYYY");

      navigate(
        `/booking/Adult=${selectedValueIn}&Checkin=${formattedCheckInDate}&Checkout=${formattedCheckOutDate}&Child=${selectedValueOut}`
      );
    } else {
      alert("Vui lòng chọn ngày đến và ngày đi trước khi đặt phòng.");
    }
  };

  return (
    <div className="block text-center relative mt-[-88px] bg-textA z-10">
      <div className="md:grid grid-cols-1 md:grid-cols-6  align-middle w-full">
        <div className=" text-white bg-black left py-[17px] px-[15px]">
          <div className="text-[25px] font-bold">Đặt phòng ngay</div>
          <div>Ưu đãi giá tốt nhất</div>
          <div className=" hidden md:flex justify-center items-center absolute top-[17%] bg-white w-[40px] h-[40px] rounded-full left-[15.5%] mt-2 z-20">
            <FaAngleRight className="text-[#ae8545] h-4 " />
          </div>
        </div>

        <div className="relative px-[15px] xl:left-5">
          <div className="mt-[25px]">
            <select
              name="Adult"
              className="py-[6px] px-3 w-full text-[#333] border border-solid border-[#333] h-10"
              value={selectedValueIn}
              onChange={(event) => setSelectedValueIn(event.target.value)}
            >
              <option value="" disabled>
                Người lớn
              </option>

              {optionPeoples.map((optionPeople) => (
                <option value={optionPeople.value} key={optionPeople.key}>
                  {optionPeople.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative px-[15px] xl:left-[10px]">
          <div className="mt-[25px] relative">
            <DatePicker
              selected={checkInDate}
              onChange={handleCheckInChange}
              className="w-full pl-[10px] pr-[30px] text-[#333] border border-solid border-[#333] h-10"
              dateFormat="dd/MM/yyyy"
              placeholderText="Ngày đến"
            />
            <IoCalendarSharp className="absolute text-[#333] right-[10px] top-[32%] text-sm pointer-events-none inline-block" />
          </div>
        </div>

        <div className="relative px-[15px]">
          <div className="mt-[25px] relative">
            <DatePicker
              selected={checkOutDate}
              onChange={handleCheckOutChange}
              className="pl-[10px] pr-[30px] w-full text-[#333] border border-solid border-[#333] h-10"
              dateFormat="dd/MM/yyyy"
              placeholderText="Ngày đi"
            />
            <IoCalendarSharp className="absolute text-[#333] right-[10px] top-[32%] text-sm pointer-events-none inline-block" />
          </div>
        </div>

        <div className="relative px-[15px] xl:right-[10px]">
          <div className="mt-[25px]">
            <select
              name="Child"
              className="py-[6px] px-3 w-full text-[#333] border border-solid border-[#333] h-10"
              onChange={(event) => setSelectedValueOut(event.target.value)}
              value={selectedValueOut}
            >
              <option value="" disabled>
                Trẻ em
              </option>

              {optionPeoples.map((optionChild) => (
                <option value={optionChild.value} key={optionChild.key}>
                  {optionChild.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative px-[15px]">
          <button
            type="submit"
            className="overflow-visible transform-none cursor-pointer relative block w-full h-full text-center py-[28.5px] bg-[#755727] border border-solid border-[#755727]"
            onClick={handleBooking}
          >
            <span className="mt-[9px] block text-white ">KIỂM TRA</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
