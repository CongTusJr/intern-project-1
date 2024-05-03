import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import React, { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import { LuMenuSquare } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          to="/nha-hang-reyna-luxury"
        >
          NHÀ HÀNG REYNA LUXURY
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="/dich-vu-mat-xa">
          DỊCH VỤ MÁT SA
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="/phong-gym">
          PHÒNG GYM
        </Link>
      ),
    },
  ];
  const menus = [
    {
      key: "trangchu",
      label: "TRANG CHỦ",
      url: "/",
    },
    {
      key: "gioithieu",
      label: "GIỚI THIỆU",
      url: "/about-us",
    },
    {
      key: "phong",
      label: "PHÒNG",
      url: "/room",
    },
    {
      key: "dichvu",
      label: "DỊCH VỤ",
      child: items,
    },
    {
      key: "hinhanh",
      label: "HÌNH ẢNH",
      url: "",
    },
    {
      key: "tours",
      label: "TOURS",
      url: "",
    },
    {
      key: "lienhe",
      label: "LIÊN HỆ",
      url: "/contact",
    },
  ];
  const images = [
    {
      key: 1,
      url: "https://reynaluxuryhotel.com/files/images/comment/English.png",
      name: "English",
    },
    {
      key: 2,
      url: "https://reynaluxuryhotel.com/files/images/comment/vietnamese.png",
      name: "VietNam",
    },
  ];
  let [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handlenavigateHome = () => {
    navigate("/");
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-30 bg-black ">
      <div className="md:flex items-center   text-goldlg  sm:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto">
        {/* logo section */}
        <div className="md:w-1/6 w-1/3 cursor-pointer flex items-center ">
          <img
            onClick={handlenavigateHome}
            src="https://reynaluxuryhotel.com/files/files/logo-reyna.png"
            alt="logo-reynal"
            className="xl:w-[132px] h-[99px] w-full md:w-72px]"
          />
        </div>
        <div className="flex xl:w-5/6 lg:w-4/6">
          <ul
            className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-[99px]" : "top-[-490px]"
            }`}
          >
            {menus.map((menu) => (
              <li
                className="md:ml-8 md:my-0 my-7 font-semibold hover:text-[#8D663A]"
                key={menu.key}
              >
                {menu.child ? (
                  <Dropdown menu={{ items }}>
                    <div
                      onClick={(e) => e.preventDefault()}
                      className="text-goldlg hover:text-[#8D663A] text-[14px] cursor-pointer"
                    >
                      {menu.label}
                      <CaretDownOutlined />
                    </div>
                  </Dropdown>
                ) : (
                  <a href={menu.url}>{menu.label}</a>
                )}
              </li>
            ))}
            <li></li>
          </ul>
        </div>
        <div className="w-1/6 h-[99px]z-[-1] hidden md:block"></div>
        <div className="flex z-20 absolute top-0 mt-[30px] gap-3 pr-[15px] pt-4 right-1/3 md:right-0 lg:right-[10%] xl:right-[16%] ">
          {images.map((image) => (
            <img src={image.url} alt={image.name} key={image.key} />
          ))}
        </div>
        <div className="text-white h-full text-[14px] mt-1 right-0 lg:right-[10%] xl:right-[16%] absolute top-0 justify-end z-10 whitespace-nowrap pr-[15px] ">
          <span className="flex">
            {" "}
            <BsTelephoneFill className="mt-1 w-3" />
            &nbsp;+84 976 328066 (call/zalo)
          </span>
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 z-10 cursor-pointer md:hidden text-goldlg hover:text-textA text-[30px]"
          >
            {/* {open ? <XMarkIcon /> : <Bars3BottomRightIcon />} */}
            {open ? <FaRegWindowClose /> : <LuMenuSquare />}
          </div>
        </div>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
