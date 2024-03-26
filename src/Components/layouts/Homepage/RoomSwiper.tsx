// import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const RoomDetails = [
  {
    key: 'SUPERIOR',
    url: 'https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg',
    name: 'PHÒNG SUPERIOR',
    bio: 'Phòng Superior có diện tích 28m2 được thiết kế hài hòa với nội thất sang trọng và đầy đủ tiện nghi hiện đại mang đến sự thoải mái, tiện lợi nhất cho quý khách.'
  },
  {
    key: 'DELUXE',
    url: 'https://reynaluxuryhotel.com/files/images/DSC_0249-min.jpg',
    name: 'PHÒNG DELUXE',
    bio: 'Phòng Deluxe với thiết kế hài hòa, nội thất sang trọng với đầy đủ tiện nghi hiện đại. Diện tích khoảng 26 - 28m2 với hướng nhìn ra phía thành phố giúp quý khách có thể ngắm nhìn khung cảnh xung quanh.'
  },
  {
    key: 'EXECUTIVE',
    url: 'https://reynaluxuryhotel.com/files/images/DSC_0258-min.jpg',
    name: 'PHÒNG EXECUTIVE',
    bio: 'Phòng Executive có tầm nhìn bao quát, có diện tích khoảng 32m2 được trang bị giường ngủ king size đem lại sự thoải mái và thư giãn nhất cho quý khách, với lối kiến trúc độc đáo và nội thất sang trọng sẽ mang đến cho bạn cảm giác thoải mái, như lạc vào không gian sang trọng, đẳng cấp.'
  },
  {
    key: 'JUNIORSUITE',
    url: 'https://reynaluxuryhotel.com/files/images/DSC_0303-min.jpg',
    name: 'PHÒNG JUNIOR SUITE',
    bio: 'Phòng Junior suite có tầm nhìn bao quát, có diện tích khoảng 40m2 được trang bị giường ngủ king size và ghế sofa đem lại sự thoải mái và thư giãn nhất cho quý khách, với lối kiến trúc độc đáo và nội thất sang trọng và tầm nhìn trên cao sẽ mang đến cho bạn cảm giác thoải mái, lạc vào 1 không gian sang trọng, đẳng cấp'
  },
]

const RoomSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {RoomDetails.map((RoomDetail) => (
          <SwiperSlide key={RoomDetail.key} className='mr-[10px]'>
            <img src={RoomDetail.url} alt={RoomDetail.name} className='w-[360px]' />
            <div className='p-5 bg-background w-[360px]'>
              <h4 className='text-center mt-[5px] mb-[10px] hover:text-[#C52D2F] text-textA pl-[5px] text-lg font-bold'>{RoomDetail.name}</h4>
              <div className='text-justify' >
                {RoomDetail.bio}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default RoomSwiper;
