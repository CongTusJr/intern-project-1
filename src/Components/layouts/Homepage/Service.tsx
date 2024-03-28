import React from "react";
import { outServices } from "../../../interface";

const Service: React.FC<{ arrServices: outServices[] }> = ({ arrServices }) => {
  return (
    <div className="bg-white pb-[25px] ">
      <div className="">
        <div className="px-[15px]">
          <h4 className="text-h2 text-center text-[#333] my-[10px]">DỊCH VỤ</h4>
          <div className="text-base text-center text-[#333d21]">
            Hãy đến với chúng tôi bạn sẽ nhận được những dịch vụ và ưu đãi tốt
            nhất
          </div>
        </div>
        <div>
          <div className="sm:flex justify-center mt-5">
            {arrServices.map((outService) => (
              <div
                key={outService.key}
                className="w-full sm:w-[390px] px-[15px]"
              >
                <img
                  src={outService.url}
                  alt={outService.name}
                  className="w-[100%]"
                />
                <div className="w-360px p-5 text-center">
                  <div className="text-[#132E45] text-xl font-bold ">
                    {outService.name}
                  </div>
                  <div className="text-[#333d21] text-base text-justify mt-[10px] mb-[25px]">
                    {outService.bio}
                  </div>
                  <a
                    href="https://reynaluxuryhotel.com/Gioi-thieu/61/khach-san-reyna-luxury"
                    className="py-[15px] px-[30px] bg-[#ae8545] text-white hover:bg-white hover:text-[#ae8545] hover:border-[1px]"
                  >
                    Chi tiết
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
