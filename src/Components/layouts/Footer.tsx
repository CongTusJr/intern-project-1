import { MailOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const ListIcons = [
    {
      key: "facebook",
      url: "https://www.facebook.com/congtus.1703",
      icon: <FaFacebookF className="w-full h-full" />,
    },
    {
      key: "twitter",
      url: "https://www.facebook.com/congtus.1703",
      icon: <FaTwitter className="w-full h-full" />,
    },
    {
      key: "youtube",
      url: "https://www.facebook.com/congtus.1703",
      icon: <TfiYoutube className="w-full h-full" />,
    },
    {
      key: "instagram",
      url: "https://www.facebook.com/congtus.1703",
      icon: <FaInstagram className="w-full h-full" />,
    },
  ];
  const menuFt = [
    {
      key: "lienhe",
      name: "Liên hệ",
    },
    {
      key: "diachi",
      name: "Địa chỉ & Bản đồ",
    },
    {
      key: "dieukien",
      name: "Điều kiện & Điều khoản",
    },
    {
      key: "tintuc",
      name: "Tin tức",
    },
  ];

  return (
    <div className=" text-[#cacdd1] bg-[#000] font-myriad">
      <div className="sm:flex ">
        <div className="pb-[10px] mt-[30px] px-[15px] justify-center mx-auto sm:w-[750px] lg:w-[970px] xl:[1170px]">
          <Row className="gap-5 leading-[25px]">
            <Col span={8}>
              <div className="w-[380px] px-[15px] font-myriad">
                <h1 className=" text-h1 mb-[10px] font-medium">
                  Reyna Luxury Hotel
                </h1>
                <p className="mb-[10px] w-[350px] ">
                  Địa chỉ: Số 34 Miếu Đầm, P. Mễ Trì, Q. Nam Từ Liêm, Hà Nội
                </p>
                <p className="mb-[10px] flex items-center">
                  <i className=" py-[5px] px-2 w-[27px]">
                    <BsTelephoneFill className="w-[11px] " />
                  </i>{" "}
                  Số điện thoại: 024 3359 3555
                </p>
                <p className="hover:text-goldlg cursor-pointer mb-[10px] text-white">
                  <i className="px-[7px] py-[5px]">
                    <MailOutlined />
                  </i>{" "}
                  Email: info@reynaluxuryhotel.com
                </p>
                <div className="text-[34px] h-[56px] flex py-[14px] ml-[-12px]">
                  {ListIcons.map((icons) => (
                    <a
                      key={icons.key}
                      href={icons.url}
                      className="flex border-[1px] border-white hover:border-goldlg h-[32px] w-[34px] justify-center mx-[15px] p-[5px] items-center"
                    >
                      <div className=" h-7 w-[22.9px] px-[3px] py-[5px] ">
                        <div className="hover:text-goldlg">{icons.icon}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Col>
            <Col span={1}></Col>
            <Col
              span={6}
              className="inline-block left-[100px] sm:left-[90px] md:left-[60px] lg:left-0 font-myriad text-white"
            >
              <p className="text-[20px] text-[#cacdd1] my-[10px]">
                VỀ CHÚNG TÔI
              </p>
              {menuFt.map((menu) => (
                <p className="mb-[10px] cursor-pointer" key={menu.key}>
                  {menu.name}
                </p>
              ))}
            </Col>
            <Col span={7} className="hidden md:block">
              <p className="text-[20px] text-[#cacdd1] my-[10px] font-myriad">
                BÀI VIẾT
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="mx-auto sm:w-[750px] lg:w-[970px] xl:[1170px] px-[15px]">
        <p className="py-[10px]  text-white">
          {" "}
          Copyright © Reyna Luxury Hotel. 2023 All Rights Reserved |{" "}
          <a
            href="https://www.facebook.com/congtus.1703"
            title=""
            className="hover:text-goldlg"
          >
            {" "}
            Design by webhotel{" "}
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
