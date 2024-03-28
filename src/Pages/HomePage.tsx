import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-datepicker/dist/react-datepicker.css";
import SliderComponent from "../Components/layouts/Homepage/SliderComponent";
import { Feedback, RoomDetails, SliderItem, outServices } from "../interface";
import SliderImages from "../Components/layouts/Homepage/SliderImages";
import BookNow from "../Components/layouts/Homepage/BookNow";
import Service from "../Components/layouts/Homepage/Service";
import SliderFeedback from "../Components/layouts/Homepage/SliderFeedback";
import AboutComponent from "../Components/layouts/Homepage/AboutComponent";
import RoomSwipers from "../Components/layouts/Homepage/RoomSwiper";

const HomePage: React.FC = () => {
  const sliders: SliderItem[] = [
    {
      key: 1,
      url: "https://reynaluxuryhotel.com/files/images/banner/bn6.jpg",
      name: "Skider1",
    },
    {
      key: 2,
      url: "https://reynaluxuryhotel.com/files/images/banner/bn8.jpg",
      name: "Skider2",
    },
    {
      key: 3,
      url: "https://reynaluxuryhotel.com/files/images/banner/bn2.jpg",
      name: "Skider3",
    },
    {
      key: 4,
      url: "https://reynaluxuryhotel.com/files/images/banner/bn1.jpg",
      name: "Skider4",
    },
  ];
  const Feedbacks: Feedback[] = [
    {
      key: 1,
      name: "Hoàng Anh",
      cmt: "Dịch vụ rất tốt và chuyên nghiệp, rất cảm ơn các bạn và chúc các bạn thành công hơn nữa",
    },
    {
      key: 2,
      name: "Minh Quốc",
      cmt: "Rất ấn tượng với dịch vụ và nhân viên phục vụ ở đây, sẽ ghé thăm các bạn vào lần sau",
    },
  ];
  const images: SliderItem[] = [
    {
      key: 1,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 2,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 3,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 4,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 5,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 6,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 7,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 8,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
    {
      key: 9,
      url: "https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg",
      name: "image1",
    },
  ];
  const arrRooms: RoomDetails[] = [
    {
      key: "SUPERIOR",
      image: "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
      name: "PHÒNG SUPERIOR",
      bio: "Phòng Superior có diện tích 28m2 được thiết kế hài hòa với nội thất sang trọng và đầy đủ tiện nghi hiện đại mang đến sự thoải mái, tiện lợi nhất cho quý khách.",
      url: "/room/details",
    },
    {
      key: "DELUXE",
      image: "https://reynaluxuryhotel.com/files/images/DSC_0249-min.jpg",
      name: "PHÒNG DELUXE",
      bio: "Phòng Deluxe với thiết kế hài hòa, nội thất sang trọng với đầy đủ tiện nghi hiện đại. Diện tích khoảng 26 - 28m2 với hướng nhìn ra phía thành phố giúp quý khách có thể ngắm nhìn khung cảnh xung quanh.",
      url: "",
    },
    {
      key: "EXECUTIVE",
      image: "https://reynaluxuryhotel.com/files/images/DSC_0258-min.jpg",
      name: "PHÒNG EXECUTIVE",
      bio: "Phòng Executive có tầm nhìn bao quát, có diện tích khoảng 32m2 được trang bị giường ngủ king size đem lại sự thoải mái và thư giãn nhất cho quý khách, với lối kiến trúc độc đáo và nội thất sang trọng sẽ mang đến cho bạn cảm giác thoải mái, như lạc vào không gian sang trọng, đẳng cấp.",
      url: "",
    },
    {
      key: "JUNIORSUITE",
      image: "https://reynaluxuryhotel.com/files/images/DSC_0303-min.jpg",
      name: "PHÒNG JUNIOR SUITE",
      bio: "Phòng Junior suite có tầm nhìn bao quát, có diện tích khoảng 40m2 được trang bị giường ngủ king size và ghế sofa đem lại sự thoải mái và thư giãn nhất cho quý khách, với lối kiến trúc độc đáo và nội thất sang trọng và tầm nhìn trên cao sẽ mang đến cho bạn cảm giác thoải mái, lạc vào 1 không gian sang trọng, đẳng cấp",
      url: "",
    },
  ];
  const outServices: outServices[] = [
    {
      key: "RESTAURANT",
      name: "NHÀ HÀNG REYNA",
      url: "https://reynaluxuryhotel.com/files/images/Restaurant/nh.jpg",
      bio: "Nhà hàng Reyna Hà Nội phục vụ tiệc buffet quốc tế vào buổi sáng và A la carte suốt cả ngày. Nhà hàng của chúng tôi mang đến những trải nghiệm ẩm thực đáng nhớ thông qua các hương vị mang bản sắc quốc tế và địa phương.",
    },
    {
      key: "MASSAGE",
      name: "DỊCH VỤ MÁT XA",
      url: "https://reynaluxuryhotel.com/files/images/DSC_8673-min.jpg",
      bio: "Chúng tôi cung cấp dịch vụ mát-xa chất lượng cao, đặt lịch linh hoạt và cam kết cung cấp dịch vụ chăm sóc chất lượng. Cho dù bạn đang muốn tìm cảm giác cân bằng và yên bình hay giảm đau, chúng tôi đều có thể đáp ứng nhu cầu trị liệu xoa bóp của bạn.",
    },
    {
      key: "GYM",
      name: "PHÒNG GYM",
      url: "https://reynaluxuryhotel.com/files/images/DSC_8637-min.jpg",
      bio: (
        <div className="text-center">
          - Địa điểm: Tầng hầm <br />
          - Thời gian phục vụ: 06:00-22:00 <br />
          Miễn phí phục vụ cho Quý khách hàng lưu trú tại khách sạn
        </div>
      ),
    },
  ];
  return (
    <div className="relative mt-[99px]">
      {/* slider */}
      <SliderComponent arrImages={sliders} />

      {/* Book Now  */}
      <BookNow />
      <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto">
        {/* About us */}
        <AboutComponent />
      </div>
      {/* Room */}
      <RoomSwipers arrRooms={arrRooms} />
      <div className="md:w-[750px] lg:w-[970px] xl:w-[1170px] mx-auto">
        {/* service  */}
        <Service arrServices={outServices} />
      </div>
      {/* Feedback */}
      <SliderFeedback arrFeedback={Feedbacks} />

      {/* Image */}
      <SliderImages arrImages={images} />
    </div>
  );
};

export default HomePage;
