import React, { useState } from "react";
import { IoCalendarSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import CalendarComponent from "./CalendarComponent";
import { Dayjs } from "dayjs";

// import { ImCalendar } from "react-icons/im";
const optionPeoples = [
  {
    key: 0,
    value: "Người lớn",
    lable: "Người lớn",
  },
  {
    key: 1,
    value: "1",
    lable: "1",
  },
  {
    key: 2,
    value: "2",
    lable: "2",
  },
  {
    key: 3,
    value: "3",
    lable: "3",
  },
  {
    key: 4,
    value: "4",
    lable: "4",
  },
  {
    key: 5,
    value: "5",
    lable: "5",
  },
  {
    key: 6,
    value: "6",
    lable: "6",
  },
];
const optionChilds = [
  {
    key: 0,
    value: "Trẻ em",
    lable: "Trẻ em",
  },
  {
    key: 1,
    value: "1",
    lable: "1",
  },
  {
    key: 2,
    value: "2",
    lable: "2",
  },
  {
    key: 3,
    value: "3",
    lable: "3",
  },
  {
    key: 4,
    value: "4",
    lable: "4",
  },
  {
    key: 5,
    value: "5",
    lable: "5",
  },
  {
    key: 6,
    value: "6",
    lable: "6",
  },
];
const BookNow: React.FC = () => {
  const [showCheckinCalendar, setShowCheckinCalendar] =
    useState<boolean>(false);
  const [checkinDate, setCheckinDate] = useState<Dayjs | null>(null);
  const [showCheckoutCalendar, setShowCheckoutCalendar] =
    useState<boolean>(false);
  const [checkoutDate, setCheckoutDate] = useState<Dayjs | null>(null);

  const toggleCheckinCalendar = () => {
    setShowCheckinCalendar(!showCheckinCalendar);
  };

  const toggleCheckoutCalendar = () => {
    setShowCheckoutCalendar(!showCheckoutCalendar);
  };

  const handleCheckinSelect = (date: Dayjs) => {
    setCheckinDate(date);
    toggleCheckinCalendar();
  };

  const handleCheckoutSelect = (date: Dayjs) => {
    setCheckoutDate(date);
    toggleCheckoutCalendar();
  };
  const disabledDateCheckout = (current: Dayjs) => {
    if (checkinDate) {
      return current.isBefore(checkinDate, "day");
    }
    return false;
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
              name="DateIn"
              className="py-[6px] px-3 w-full text-[#333] border border-solid border-[#333] h-10"
            >
              {optionPeoples.map((optionPeople) => (
                <option value={optionPeople.value} key={optionPeople.key}>
                  {optionPeople.lable}
                </option>
              ))}
            </select>
          </div>
        </div>
        {/* Check in */}
        <div className="relative px-[15px] xl:left-[10px]">
          <div className="mt-[25px] relative">
            <input
              type="text"
              name="Checkin"
              className="pl-[10px] pr-[30px] w-full text-[#333] border border-solid border-[#333] h-10"
              placeholder="Ngày đến"
              value={checkinDate ? checkinDate.format("DD/MM/YYYY") : ""}
              onClick={toggleCheckinCalendar}
              readOnly
            />
            <IoCalendarSharp className="absolute text-[#333] right-[10px] top-[32%] text-sm pointer-events-none inline-block" />
            {showCheckinCalendar && (
              <div>
                <CalendarComponent onSelect={handleCheckinSelect} />
              </div>
            )}
          </div>
        </div>

        {/* Check out */}
        <div className="relative px-[15px]">
          <div className="mt-[25px] relative">
            <input
              type="text"
              name="Checkout"
              className="pl-[10px] pr-[30px] w-full text-[#333] border border-solid border-[#333] h-10"
              placeholder="Ngày đi"
              value={checkoutDate ? checkoutDate.format("DD/MM/YYYY") : ""}
              onClick={toggleCheckoutCalendar}
              readOnly
            />
            <IoCalendarSharp className="absolute right-[10px] text-[#333] top-[32%] text-sm pointer-events-none inline-block" />
            {showCheckoutCalendar && (
              <div>
                <CalendarComponent
                  onSelect={handleCheckoutSelect}
                  disabledDate={disabledDateCheckout}
                />
              </div>
            )}
          </div>
        </div>

        <div className="relative px-[15px] xl:right-[10px]">
          <div className="mt-[25px]">
            <select
              name="DateOut"
              className="py-[6px] px-3 w-full text-[#333] border border-solid border-[#333] h-10"
            >
              {optionChilds.map((optionChild) => (
                <option value={optionChild.value} key={optionChild.key}>
                  {optionChild.lable}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative px-[15px]">
          <button
            type="submit"
            className="overflow-visible transform-none cursor-pointer relative block w-full h-full text-center py-[28.5px] bg-[#755727] border border-solid border-[#755727]"
          >
            <span className="mt-[9px] block text-white ">KIỂM TRA</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
