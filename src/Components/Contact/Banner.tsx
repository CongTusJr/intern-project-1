import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="mt-[99px] relative">
      <div
        className="py-[150px] bg-center bg-cover relative bg-no-repeat bg-image bg-scroll bg-origin-initial bg-clip-initial"
        style={{
          backgroundImage:
            'url("https://reynaluxuryhotel.com/Content/Img/baner1.jpg")',
        }}
      >
        <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto ">
          <div className="text-center py-[18px] px-[60px] border border-[#fff] w-[290px] text-white mx-auto">
            <h4 className="mt-[10px] mb-[19px] font-medium text-[32px] uppercase">
              Liên Hệ
            </h4>
            <ul className="flex mb-[10px]">
              <li>
                <a
                  href="/"
                  className="uppercase text-[15px] mr-[10px] hover:text-red"
                >
                  Trang chủ
                </a>
              </li>
              <div className="mr-[10px]">/</div>
              <li className="uppercase">Liên hệ</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
