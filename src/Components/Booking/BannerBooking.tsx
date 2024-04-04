import React from "react";

const BannerBooking = () => {
  return (
    <div className="mt-[99px] relative">
      <div
        className="py-[150px] bg-center bg-cover relative bg-no-repeat bg-image bg-scroll bg-origin-initial bg-clip-initial"
        style={{
          backgroundImage:
            'url("https://reynaluxuryhotel.com/Content/Img/baner.jpg")',
        }}
      >
        <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto ">
          <div className="text-center py-[18px] px-[60px] border border-[#fff] w-[233px] text-white mx-auto">
            <h4 className="mt-[10px] mb-[19px] font-medium text-[32px] uppercase">
              {" "}
            </h4>
            <ul className="flex relative mb-[10px] ư">
              <li className="flex relative text-[15px] uppercase">
                <a href="/" className="mr-5 ">
                  trang chủ
                </a>
                <p className="absolute right-0">/</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBooking;
