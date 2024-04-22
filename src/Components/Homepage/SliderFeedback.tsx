import React from "react";
import { Feedback } from "../../interface";
import Slider from "react-slick";

const SliderFeedback: React.FC<{ arrFeedback: Feedback[] }> = ({
  arrFeedback,
}) => {
  const settingsFeedback = {
    // dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <></>,
    nextArrow: <></>,
  };
  return (
    <div className="bg-black sm:flex">
      <div className="bg-black sm:flex sm:w-[750px] lg:w-[970px] xl:[1170px] mx-auto">
        <div className="bg-black sm:w-[50%] ">
          <div className="py-[30px] px-[47px] max-w-[600px] sm:pt-5 sm:pb-[30px] sm:pl-[15px] sm:pr-20 ">
            <h4 className="text-h2 text-[#fff] my-[10px]">
              PHẢN HỒI KHÁCH HÀNG
            </h4>
            <div className="mt-[15px] mb-[30px] text-white text-lg">
              Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum
              has been the great font.
            </div>
            <a href="https://www.tripadvisor.com.vn/Hotel_Review-g27469010-d20319119-Reviews-Reyna_Hotel_Hanoi-Nam_T_Liem_Tu_Liem_Hanoi.html">
              <img
                src="https://reynaluxuryhotel.com/Content/Img/tripad_certificate.png"
                alt="ok"
              />
            </a>
          </div>
        </div>
        <div className="bg-[#ae8545] sm:w-[50%] sm:z-10">
          <div className="py-[30px] px-[47px] max-w-[600px] sm:py-5 sm:pr-[15px] sm:pl-20">
            <Slider {...settingsFeedback}>
              {arrFeedback.map((Feedback) => (
                <div key={Feedback.id}>
                  <h4 className="text-3xl my-[10px] text-white">
                    {Feedback.name}
                  </h4>
                  <p className="mt-[10px] mb-[30px] text-lg text-white text-center">
                    {Feedback.cmt}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className=" hidden sm:block w-[50%] absolute bg-textA h-[313.8px] z-[0] right-0"></div>
    </div>
  );
};

export default SliderFeedback;
