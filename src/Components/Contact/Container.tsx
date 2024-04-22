import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
const Container: React.FC = () => {
  const [value, setValue] = useState<string>("Ông");

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="block md:grid grid-cols-2 w-full md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto mt-[60px] mb-[50px]">
      <div className="px-[15px] py-5 mb-10">
        <Radio.Group onChange={onChange} value={value} className="mb-[15px]">
          <Radio value={"Ông"} className="text-base text-[#0e385d]">
            Ông
          </Radio>
          <Radio value={"Bà"} className="text-base text-[#0e385d]">
            Bà
          </Radio>
        </Radio.Group>
        <input
          placeholder="Họ và Tên"
          className="w-full h-[50px] px-3 py-[6px] mb-5 border border-[#0e385d] text-[#0e385d]"
        />
        <input
          placeholder="Email"
          className="w-full h-[50px] px-3 py-[6px] mb-5 border border-[#0e385d] text-[#0e385d]"
        />
        <input
          placeholder="Điện thoại"
          className="w-full h-[50px] px-3 py-[6px] mb-5 border border-[#0e385d] text-[#0e385d]"
        />
        <input
          placeholder="Địa chỉ"
          className="w-full h-[50px] px-3 py-[6px] mb-5 border border-[#0e385d] text-[#0e385d]"
        />
        <textarea
          placeholder="Ghi chú"
          className="w-full h-[148px] px-3 py-[6px] mb-5 border border-[#0e385d] text-[#0e385d]"
        />
        <input
          placeholder="Mã kiểm tra"
          className="w-[150px] h-[50px] mr-[30px] mb-5 px-3 py-[6px]  border border-[#0e385d] text-[#0e385d]"
        />
        <div className="pt-5">
          <button className="mt-[15px] px-3 py-[6px] bg-textA text-white">
            Gửi
          </button>
        </div>
      </div>
      <div className="px-[15px]">
        <h1 className="mt-5 b-[10px] text-[#333] text-3xl font-medium uppercase">
          REYNA LUXURY HOTEL
        </h1>
        <ul className="text-lg  text-textA ">
          <li>
            <p className="my-[6px] flex items-center ">
              <FaMapMarkerAlt />
              Địa chỉ
              <strong className="text-[#000] text-sm">
                : Số 34 Miếu Đầm, P. Mễ Trì, Q. Nam Từ Liêm, Hà Nội
              </strong>
            </p>
          </li>
          <li className="flex items-center">
            <h3 className="flex my-[5px] items-center">
              <FaPhone /> Số điện thoại&nbsp;
            </h3>
            <p className="text-[#000] text-sm">: 024 3359 3555</p>
          </li>
          <li className="flex items-center">
            <h3 className="flex my-[5px] items-center">
              <GoMail /> Email&nbsp;
            </h3>
            <a
              href="mailto:info@reynaluxuryhotel.com"
              className="text-[#000] text-sm hover:text-textA hover:underline"
            >
              : info@reynaluxuryhotel.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Container;
