import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import InputComponent from "./InputComponent";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const qualitys = [
  {
    key: 0,
    value: "0",
    lable: "0",
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
const Container: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<any>(null);
  const [checkOutDate, setCheckOutDate] = useState<any>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const params = useParams();
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleCheckInChange = (
    date: Date | null,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckInDate(date);
    setShowAlert(false);
  };

  const handleCheckOutChange = (
    date: Date | null
    // event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckOutDate(date); // Set checkOutDate with date parameter
    if (dayjs(date).isBefore(checkInDate)) {
      // Compare dates directly with date parameter
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
  };
  useEffect(() => {
    if (params.value) {
      const value: string = params.value;
      const parts: string[] = value.split("&");
      const variables: { [key: string]: string } = {};

      parts.forEach((part) => {
        const [variable, value] = part.split("=");
        variables[variable] = value;
      });

      setAdult(variables.Adult);
      setChild(variables.Child);
      console.log(
        new Date(variables.Checkin).getDate(),
        dayjs(new Date(variables.Checkin)).format("DD/MM/YYYY")
      );
      setCheckInDate(dayjs(variables.Checkin, "DD/MM/YYYY").toDate());
      setCheckOutDate(dayjs(variables.Checkout, "DD/MM/YYYY").toDate());
    }
  }, [params]);

  const handleSelectChangeAdult = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAdult(event.target.value);
    // console.log(event);
  };
  const handleSelectChangeChild = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setChild(event.target.value);
    // console.log(event);
  };

  return (
    <div className="block w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto mt-[60px] px-[15px] text-darkBlue">
      <div>
        <div className="py-5">
          <form action="/">
            <div className="bolck lg:grid lg:grid-cols-2">
              <div className="col-span-1 px-[15px]">
                <div className="block mb-[15px] ">
                  <label htmlFor="CheckIn" className="mb-[5px] font-bold">
                    Ngày đến
                    <span aria-required="true">*</span>
                  </label>
                  {checkInDate?.toString()}
                  <DatePicker
                    // value={"10/04/2024"}
                    selected={checkInDate}
                    onChange={handleCheckInChange}
                    className="px-3 py-[6px] w-full h-[50px] text-darkBlue border border-solid border-darkBlue "
                    dateFormat="dd/MM/YYYY"
                  />
                </div>
                <div>
                  <div className="block mb-[15px]">
                    <label htmlFor="CheckIn" className="mb-[5px] font-bold">
                      Người lớn
                      <span aria-required="true">*</span>
                    </label>
                    <select
                      name="DateIn"
                      className="py-[6px] px-3 w-full h-[50px] text-darkBlue border border-solid border-darkBlue "
                      value={adult}
                      onChange={handleSelectChangeAdult}
                    >
                      {/* <option value={""} disabled selected></option> */}
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
                <div className="block mb-[15px]">
                  <label htmlFor="CheckIn" className="mb-[5px] font-bold">
                    Ngày đi
                    <span aria-required="true">*</span>
                  </label>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={handleCheckOutChange}
                    className="px-3 py-[6px] w-full h-[50px] text-darkBlue border border-solid border-darkBlue"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
                {showAlert && (
                  <p className="text-red-500">
                    Ngày đi không được trước ngày đến!
                  </p>
                )}
                <div>
                  <div className="block mb-[15px]">
                    <label htmlFor="CheckIn" className="mb-[5px] font-bold">
                      Trẻ em
                      <span aria-required="true">*</span>
                    </label>
                    <select
                      name="DateOut"
                      className="py-[6px] px-3 w-full h-[50px] text-darkBlue border border-solid border-darkBlue"
                      value={child}
                      onChange={handleSelectChangeChild}
                    >
                      {/* <option value={""} disabled selected></option> */}

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
                  <tr className="grid grid-cols-12">
                    <td className="col-span-4 p-2 border border-solid border-[#ddd] font-bold underline hover:no-underline text-[#0e385d] uppercase">
                      <Link to="/room/details">PHÒNG SUPERIOR</Link>
                    </td>
                    <td className=" col-span-3 p-2 border border-solid text-[#333] border-[#ddd]">
                      1850000
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
                  <label htmlFor="CheckIn" className="mb-[5px]  text-[#333]">
                    Giới tính
                    <span aria-required="true">*</span>
                  </label>
                  <select className="py-[6px] px-3 w-full h-[50px] text-darkBlue border border-solid border-dtext-darkBlue ">
                    <option value="" disabled selected>
                      Lựa chọn
                    </option>
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
                <div className="block mb-[15px]">
                  <label htmlFor="CheckIn" className="mb-[5px] text-[#333]">
                    Quốc gia
                    <span aria-required="true">*</span>
                  </label>
                  <select className="py-[6px] px-3 w-full h-[50px] text-darkBlue border border-solid border-dtext-darkBlue ">
                    <option value="" disabled selected>
                      Lựa chọn quốc gia
                    </option>
                    <option value="Việt Nam">Việt Nam</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                  </select>
                </div>

                <InputComponent lable="Đến với chuyến bay" span="*" />

                <InputComponent lable="Thời gian đến" span="" />
                <div className="block mb-[15px]">
                  <label htmlFor="CheckIn" className="mb-[5px] text-[#333]">
                    Yêu cầu khác
                    {/* <span aria-required="true">*</span> */}
                  </label>
                  <textarea
                    cols={40}
                    rows={8}
                    className="py-[6px] px-3 w-full text-darkBlue border border-solid border-dtext-darkBlue h-[230px]"
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
