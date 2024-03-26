import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-datepicker/dist/react-datepicker.css';
import SliderComponent from '../Components/layouts/Homepage/SliderComponent';
import { Feedback, SliderItem } from '../interface';
import SliderImages from '../Components/layouts/Homepage/SliderImages';
import BookNow from '../Components/layouts/Homepage/BookNow';
import Service from '../Components/layouts/Homepage/Service';
import SliderFeedback from '../Components/layouts/Homepage/SliderFeedback';
import RoomSwiper from '../Components/layouts/Homepage/RoomSwiper';

const HomePage: React.FC =()  => {
    
    const sliders:SliderItem[] = [
        {
            key: 1,
            url: 'https://reynaluxuryhotel.com/files/images/banner/bn6.jpg',
            name:'Skider1'
        },
        {
            key: 2,
            url: 'https://reynaluxuryhotel.com/files/images/banner/bn8.jpg',
            name: 'Skider2'
        },
        {
            key: 3,
            url: 'https://reynaluxuryhotel.com/files/images/banner/bn2.jpg',
            name: 'Skider3'
        },
        {
            key: 4,
            url: 'https://reynaluxuryhotel.com/files/images/banner/bn1.jpg',
            name: 'Skider4'
        },
    ];

    const Feedbacks:Feedback[]=[
        {
            key:1,
            name:'Hoàng Anh',
            cmt:'Dịch vụ rất tốt và chuyên nghiệp, rất cảm ơn các bạn và chúc các bạn thành công hơn nữa'
        },
        {
            key:2,
            name:'Minh Quốc',
            cmt:'Rất ấn tượng với dịch vụ và nhân viên phục vụ ở đây, sẽ ghé thăm các bạn vào lần sau'
        }
    ]
    const images:SliderItem[]=[
        {
            key:1,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
        {
            key:2,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
        {
            key:3,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
        {
            key:4,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
        {
            key:5,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
        {
            key:6,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
        {
            key:7,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
        {
            key:8,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
        {
            key:9,
            url:'https://reynaluxuryhotel.com/files/images/gallery/DSC_0359.jpg',
            name:'image1'
        },
    ]

  return (
    <div className='relative ' >

{/* slider */}
        <SliderComponent arrImages={sliders}/>

{/* Book Now  */}
        <BookNow />

{/* About us */}

        <div>
            <div className='flex justify-center mt-[60px] bg-white'>
                <div className='px-[15px] w-[585px]'>
                    <h4 className='text-h2 my-[10px] text-[#333]'>
                        VỀ CHÚNG TÔI
                    </h4>
                    <div className='text-[16px] leading-h4 text-justify text-textCl'>
                        <strong>Khách sạn Reyna </strong>
                        <strong>Luxury</strong>&nbsp;
                            "là thành viên tiếp theo của&nbsp;hệ thống khách sạn Reyna, được quản lý bởi tập đoàn 22 Land.<br/>
                            Khách sạn tọa lạc tại vị trí 34 Phố Miếu Đầm, phường Mễ Trì, Nam Từ Liêm, Hà Nội - Nơi&nbsp;trung tâm hành chính quan trọng của quốc gia. 
                            Tiếp giáp với nhiều vị trí quan trọng:&nbsp;cách sân bay Nội Bài 25km, cách Trung tâm hội nghị quốc gia 3 phút đi bộ, gần sân vận động Quốc gia 
                            Mỹ Đình chỉ vài phút lái xe, đối diện với khách sạn JW Marriott,&nbsp;quý khách có thể dễ dàng di chuyển đến các tòa nhà văn phòng&nbsp;cũng như 
                            các khu công nghiệp lớn ở Hà Nội. Với vị trí thuận tiện di chuyển đến các Khu công nghiệp lân cận, gần các tòa nhà văn phòng và trung tâm thương mại, 
                            khách sạn Reyna Luxury hứa hẹn sẽ trở thành điểm dừng chân, nghỉ ngơi lý tưởng&nbsp;cho những chuyến đi công tác hay du lịch của khách hàng trong nước và quốc tế."
                    </div>
                    <div className='my-[50px]'>
                        <a href="https://reynaluxuryhotel.com/Gioi-thieu/61/khach-san-reyna-luxury" className='py-[15px] px-[30px] bg-[#ae8545] text-white hover:bg-white hover:text-[#ae8545] hover:border-[1px]'>Xem thêm</a>
                    </div>
                </div>
                <div className='px-[15px]'>
                    <img src="https://reynaluxuryhotel.com/files/images/Article/about.jpg" alt="" className='w-[555px] h-[370px]'/>
                </div>
            </div>
        </div>

{/* Room */}

        <div className="flex bg-center justify-center bg-cover pb-10 bg-no-repeat mt-[60px] mb-10" style={{backgroundImage: 'url("https://reynaluxuryhotel.com/Content/Img/bgr-room.jpg")', backgroundAttachment: 'fixed'}}>
            <div className='w-[1170px] px-[15px]'>
                <h4 className='text-h2 text-center text-white my-[30px] mt-[40px]'>
                    PHÒNG KHÁCH SẠN
                </h4>
                <div className="">
                    <RoomSwiper />
                </div>
            </div>
        </div>

{/* service  */}
       <Service />                

{/* Feedback */}
        <div className='bg-black flex '>
            <div className=' w-[50%] '>
                <div className='ml-[174.6px] pt-5 pb-[30px] pl-[15px] pr-20 '>
                    <h4 className='text-h2 text-[#fff] my-[10px]'>
                        PHẢN HỒI KHÁCH HÀNG
                    </h4>
                    <div className='mt-[15px] mb-[30px] text-white text-lg'>
                        Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the great font.
                    </div>
                    <a href="https://www.tripadvisor.com.vn/Hotel_Review-g27469010-d20319119-Reviews-Reyna_Hotel_Hanoi-Nam_T_Liem_Tu_Liem_Hanoi.html"> 
                        <img src="https://reynaluxuryhotel.com/Content/Img/tripad_certificate.png" alt="ok" />
                    </a>
                </div>
            </div>
            <div className='bg-[#ae8545] w-[50%]'>                
                <div className='mr-[174.6px] py-5 pr-[15px] pl-20'>
                <SliderFeedback arrFeedback={Feedbacks}/>
                </div>
                            
            </div>
        </div>

{/* Image */}

        <div className='bg-white py-10'>
            <h4 className='text-h2 text-[#000] text-center mb-[15px] mt-[10px]'>
                HÌNH ẢNH
            </h4>
            <div>
                <SliderImages arrImages={images} />
            </div>
        </div>
    </div>
  );
};

export default HomePage;
