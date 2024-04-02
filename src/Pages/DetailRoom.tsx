import React, { useEffect } from "react";
import Bannerdetail from "../Components/Details/Bannerdetail";
import Container from "../Components/Details/Container";
import RoomRelate from "../Components/Details/RoomRelate";
import { RoomDetails } from "../interface";

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

const imageDeyails: string[] = [
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
  "https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg",
];
const detailAmenities: string[] = [
  "Diện tích: 28m2",
  'TV truyền hình cab 50"',
  "Giường King",
  "Điều hòa",
  "Tủ mini bar",
  "Vòi sen",
  "Máy sấy tóc",
  "Két an toàn",
  "Hệ thống khóa tự động",
  "Hệ thống bơm nước nóng",
  "Điện thoại",
  "Wifi miễn phí",
];

const detailServices: string[] = [
  "Dọn phòng hằng ngày",
  "Miễn phí 2 chai nước uống hằng ngày",
  "Trà/ cà phê miễn phí",
  "Dịch vụ giặt là/ giặt nhanh (tính phí)",
  "Dịch vụ văn phòng (tính phí)",
  "Dịch vụ ăn uống phục vụ tại phòng (tính phí)",
  "Dịch vụ đón tiễn sân bay (tính phí)",
];

const DetailRoom: React.FC = () => {
  useEffect(() => {
    document.title = "Tiêu đề mới";
  }, []);
  return (
    <div className="relative">
      <Bannerdetail />
      <Container
        arrUrlRoom={imageDeyails}
        detailAmenities={detailAmenities}
        detailServices={detailServices}
      />
      <RoomRelate arrRooms={arrRooms} />
    </div>
  );
};

export default DetailRoom;
