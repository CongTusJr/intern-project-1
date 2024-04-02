import React, { useState } from "react";
import dayjs from "dayjs";
import InputComponent from "./InputComponent";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

const qualitys = [
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
const Container: React.FC = () => {
  const [selectedDateIn, setSelectedDateIn] = useState<string>("");
  const [selectedDateOut, setSelectedDateOut] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleDateChangeIn = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDateIn(event.target.value);
    setShowAlert(false);
  };
  const handleDateChangeOut = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (dayjs(event.target.value).isBefore(selectedDateIn)) {
      setShowAlert(true);
      return;
    }
    setSelectedDateOut(event.target.value);
    setShowAlert(false);
  };
  return (
    <div className="block w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto mt-[60px] px-[15px] text-darkBlue">
      <div>
        <div className="py-5">
          <form action="/">
            <div className="bolck lg:grid lg:grid-cols-2">
              <div className="col-span-1 px-[15px]">
                <div className="block mb-[15px] font-bold">
                  <label htmlFor="CheckIn" className="mb-[5px]">
                    Ngày đến
                    <span aria-required="true">*</span>
                  </label>
                  <input
                    type="date"
                    value={selectedDateIn} // Assign selectedDate to value
                    onChange={handleDateChangeIn} // Handle date change
                    className="px-3 py-[6px] w-full text-darkBlue border border-solid border-darkBlue"
                  />
                </div>
                <div>
                  <div className="block mb-[15px] font-bold">
                    <label htmlFor="CheckIn" className="mb-[5px]">
                      Người lớn
                      <span aria-required="true">*</span>
                    </label>
                    <select
                      name="DateIn"
                      className="py-[6px] px-3 w-full text-darkBlue border border-solid border-darkBlue h-10"
                    >
                      {qualitys.map((optionPeople) => (
                        <option
                          value={optionPeople.value}
                          key={optionPeople.key}
                        >
                          {optionPeople.lable}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-span-1 px-[15px]">
                <div className="block mb-[15px] font-bold">
                  <label htmlFor="CheckIn" className="mb-[5px]">
                    Ngày đi
                    <span aria-required="true">*</span>
                  </label>
                  <input
                    type="date"
                    value={selectedDateOut} // Assign selectedDate to value
                    onChange={handleDateChangeOut} // Handle date change
                    className="px-3 py-[6px] w-full text-darkBlue border border-solid border-darkBlue"
                  />
                </div>
                {showAlert && (
                  <p className="text-red-500">
                    Ngày đi không được trước ngày đến!
                  </p>
                )}
                <div>
                  <div className="block mb-[15px] font-bold">
                    <label htmlFor="CheckIn" className="mb-[5px]">
                      Trẻ em
                      <span aria-required="true">*</span>
                    </label>
                    <select
                      name="DateOut"
                      className="py-[6px] px-3 w-full text-darkBlue border border-solid border-darkBlue h-10"
                    >
                      {qualitys.map((optionPeople) => (
                        <option
                          value={optionPeople.value}
                          key={optionPeople.key}
                        >
                          {optionPeople.lable}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative px-[15px]">
              <table className=" w-full max-w-full border border-solid border-[#ddd] border-collapse my-5">
                <tbody>
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
                  <tr className="grid grid-cols-12">
                    <td className="col-span-4 p-2 border border-solid border-[#ddd] font-bold underline hover:no-underline   text-[#0e385d] uppercase">
                      PHÒNG SUPERIOR
                    </td>
                    <td className=" col-span-3 p-2 border border-solid text-[#333] border-[#ddd]">
                      18500000
                    </td>
                    <td className=" col-span-3 p-2 border border-solid text-[#333] border-[#ddd]">
                      2
                    </td>
                    <td className="col-span-2 p-2 border border-solid  text-[#333] border-[#ddd]">
                      <select className="p-1 border border-solid border-[#333]">
                        {qualitys.map((quality) => (
                          <option value={quality.value} key={quality.key}>
                            {quality.lable}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br />
            <br />
            <div className="block lg:grid lg:grid-cols-2">
              <div className="col-span-1 px-[15px]">
                <div className="block mb-[15px]">
                  <label htmlFor="CheckIn" className="mb-[5px]">
                    Giới tính
                    <span aria-required="true">*</span>
                  </label>
                  <select className="py-[6px] px-3 w-full text-[#333] border border-solid border-[#333] h-10">
                    <option>Lựa chọn</option>
                    <option value="Ông">Ông</option>
                    <option value="Cô">Cô</option>
                    <option value="bà">Bà</option>
                  </select>
                </div>
                <InputComponent lable="Họ tên" span="*" />

                <InputComponent lable="Số điện thoại" span="" />

                <InputComponent lable="Email" span="*" />

                <InputComponent lable="Địa chỉ" span="" />

                <InputComponent lable="Thành Phố" span="" />
              </div>
              <div className="col-span-1 px-[15px]">
                <InputComponent lable="Quốc gia" span="*" />

                <InputComponent lable="Đến với chuyến bay" span="*" />

                <InputComponent lable="Thời gian đến" span="" />
                <div className="block mb-[15px]">
                  <label htmlFor="CheckIn" className="mb-[5px]">
                    Yêu cầu khác
                    {/* <span aria-required="true">*</span> */}
                  </label>
                  <textarea
                    cols={40}
                    rows={8}
                    className="py-[6px] px-3 w-full text-[#333] border border-solid border-[#333] h-[230px]"
                  />
                </div>
              </div>
            </div>
            <div className="px-[15px] text-[#333]">
              <Checkbox onChange={onChange}>
                <span>
                  Tôi đã đọc và đồng ý với các điều khoản và điều kiện của khách
                  sạn Reyna Luxury Hotel
                </span>
              </Checkbox>
            </div>
          </form>
          <div className="px-[15px] mt-5">
            <input
              type="submit"
              className="py-[15px] px-10 bg-[#9e7f4c] text-white text-lg"
              value={"Gửi"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;

// <div className="block mb-[15px] font-bold">
//   <label htmlFor="CheckIn" className="mb-[5px]">
//     Đến với chuyến bay
//     <span aria-required="true">*</span>
//   </label>
//   <input className="py-[6px] px-3 w-full text-darkBlue border border-solid border-darkBlue h-10" />
// </div>;
