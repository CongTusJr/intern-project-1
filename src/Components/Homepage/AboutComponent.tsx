import React from "react";

const AboutComponent = () => {
  return (
    <div>
      <div>
        <div className="xl:flex justify-center mt-[60px] bg-white">
          <div className="px-[15px]  xl:w-[50%] ">
            <h4 className="text-h2 my-[10px] text-[#333]">VỀ CHÚNG TÔI</h4>
            <div className="text-[16px] leading-h4 text-justify text-textCl ">
              <strong>Khách sạn Reyna </strong>
              <strong>Luxury</strong>&nbsp; "là thành viên tiếp theo của&nbsp;hệ
              thống khách sạn Reyna, được quản lý bởi tập đoàn 22 Land.
              <br />
              Khách sạn tọa lạc tại vị trí 34 Phố Miếu Đầm, phường Mễ Trì, Nam
              Từ Liêm, Hà Nội - Nơi&nbsp;trung tâm hành chính quan trọng của
              quốc gia. Tiếp giáp với nhiều vị trí quan trọng:&nbsp;cách sân bay
              Nội Bài 25km, cách Trung tâm hội nghị quốc gia 3 phút đi bộ, gần
              sân vận động Quốc gia Mỹ Đình chỉ vài phút lái xe, đối diện với
              khách sạn JW Marriott,&nbsp;quý khách có thể dễ dàng di chuyển đến
              các tòa nhà văn phòng&nbsp;cũng như các khu công nghiệp lớn ở Hà
              Nội. Với vị trí thuận tiện di chuyển đến các Khu công nghiệp lân
              cận, gần các tòa nhà văn phòng và trung tâm thương mại, khách sạn
              Reyna Luxury hứa hẹn sẽ trở thành điểm dừng chân, nghỉ ngơi lý
              tưởng&nbsp;cho những chuyến đi công tác hay du lịch của khách hàng
              trong nước và quốc tế."
            </div>
            <div className="my-[50px]">
              <a
                href="https://reynaluxuryhotel.com/Gioi-thieu/61/khach-san-reyna-luxury"
                className="py-[15px] px-[30px] bg-[#ae8545] text-white hover:bg-white hover:text-[#ae8545] hover:border-[1px]"
              >
                Xem thêm
              </a>
            </div>
          </div>
          <div className="px-[15px] ">
            <img
              src="https://reynaluxuryhotel.com/files/images/Article/about.jpg"
              alt=""
              className="xl:w-[555px] xl:h-[370px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
