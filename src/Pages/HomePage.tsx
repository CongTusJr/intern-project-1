import React from 'react';
import Slider from "react-slick";
// import { Select } from 'antd';
// import { useNavigate } from 'react-router';
import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-datepicker/dist/react-datepicker.css';
import SliderComponent from '../Components/layouts/SliderComponent';
import { SliderItem } from '../Components/Interface/interface';
import SliderImages from '../Components/layouts/SliderImages';



// const CustomPrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
//     <div className="flex absolute left-5 top-1/2 transform -translate-y-1/2 w-[54px] h-[54px] bg-white opacity-50 z-10 cursor-pointer p-3 rounded-full items-center justify-center transition-colors duration-300 hover:opacity-100" onClick={onClick}>
//         <FaAngleLeft className="text-[38px] text-center text-[#ae8746]"  />
//     </div>
// );

// const CustomNextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
//     <div className="flex absolute right-5 top-1/2 transform -translate-y-1/2 w-[54px] h-[54px] bg-white opacity-50 z-10 cursor-pointer p-3 rounded-full items-center justify-center transition-colors duration-300 hover:opacity-100" onClick={onClick}>
//         <FaAngleRight className="text-[38px] text-center text-[#ae8746]"  />
//     </div>
// );
const CustomPrevArrowA: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="flex absolute left-[-100px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#4a535c] opacity-50 z-10 cursor-pointer p-3  items-center justify-center transition-colors duration-300 hover:bg-[#ae8746] hover:opacity-100" onClick={onClick}>
        <FaAngleLeft className="text-[17.6px] text-center text-[#fff]"  />
    </div>
);

const CustomNextArrowA: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <div className="flex absolute right-[-100px] top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[#4a535c] opacity-50 z-10 cursor-pointer p-3  items-center justify-center transition-colors duration-300 hover:bg-[#ae8746] hover:opacity-100" onClick={onClick}>
        <FaAngleRight className="text-[17.6px] text-center text-[#fff]"  />
    </div>
);

const HomePage: React.FC =()  => {
    
// const navigate=useNavigate()
const onChangeIn: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

const onChangeOut: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};
    // const handleRoomPage =()=>{
    //     navigate('/room')
    // }
    // const handleProduct=()=>{
    //     navigate('/detail-room')
    // }
//     const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
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
    // const settings = {
    //     dots: false,
    //     fade: true,
    //     autoplay: true,
    //     autoplayspeed:3000,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     prevArrow: <CustomPrevArrow />,
    //     nextArrow: <CustomNextArrow />
    //   };
    const settingsDetail = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrowA />,
        nextArrow: <CustomNextArrowA />
    };
    const settingsComments = {
        // dots: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <></>,
        nextArrow: <></>,
      };
    const RoomDetails=[
        {
            key:'SUPERIOR',
            url:'https://reynaluxuryhotel.com/files/images/DSC_0272-min.jpg',
            name:'PHÒNG SUPERIOR',
            bio:'Phòng Superior có diện tích 28m2 được thiết kế hài hòa với nội thất sang trọng và đầy đủ tiện nghi hiện đại mang đến sự thoải mái, tiện lợi nhất cho quý khách.'
        },
        {
            key:'DELUXE',
            url:'https://reynaluxuryhotel.com/files/images/DSC_0249-min.jpg',
            name:'PHÒNG DELUXE',
            bio:'Phòng Deluxe với thiết kế hài hòa, nội thất sang trọng với đầy đủ tiện nghi hiện đại. Diện tích khoảng 26 - 28m2 với hướng nhìn ra phía thành phố giúp quý khách có thể ngắm nhìn khung cảnh xung quanh.'
        },
        {
            key:'EXECUTIVE',
            url:'https://reynaluxuryhotel.com/files/images/DSC_0258-min.jpg',
            name:'PHÒNG EXECUTIVE',
            bio:'Phòng Executive có tầm nhìn bao quát, có diện tích khoảng 32m2 được trang bị giường ngủ king size đem lại sự thoải mái và thư giãn nhất cho quý khách, với lối kiến trúc độc đáo và nội thất sang trọng sẽ mang đến cho bạn cảm giác thoải mái, như lạc vào không gian sang trọng, đẳng cấp.'
        },
        {
            key:'JUNIORSUITE',
            url:'https://reynaluxuryhotel.com/files/images/DSC_0303-min.jpg',
            name:'PHÒNG JUNIOR SUITE',
            bio:'Phòng Junior suite có tầm nhìn bao quát, có diện tích khoảng 40m2 được trang bị giường ngủ king size và ghế sofa đem lại sự thoải mái và thư giãn nhất cho quý khách, với lối kiến trúc độc đáo và nội thất sang trọng và tầm nhìn trên cao sẽ mang đến cho bạn cảm giác thoải mái, lạc vào 1 không gian sang trọng, đẳng cấp'
        },
    ]
    const outServices=[
        {
            key:'RESTAURANT',
            name:'NHÀ HÀNG REYNA',
            url:'https://reynaluxuryhotel.com/files/images/DSC_8673-min.jpg',
            bio:'Nhà hàng Reyna Hà Nội phục vụ tiệc buffet quốc tế vào buổi sáng và A la carte suốt cả ngày. Nhà hàng của chúng tôi mang đến những trải nghiệm ẩm thực đáng nhớ thông qua các hương vị mang bản sắc quốc tế và địa phương.'
        },
        {
            key:'MASSAGE',
            name:'DỊCH VỤ MÁT XA',
            url:'https://reynaluxuryhotel.com/files/images/Restaurant/nh.jpg',
            bio:'Chúng tôi cung cấp dịch vụ mát-xa chất lượng cao, đặt lịch linh hoạt và cam kết cung cấp dịch vụ chăm sóc chất lượng. Cho dù bạn đang muốn tìm cảm giác cân bằng và yên bình hay giảm đau, chúng tôi đều có thể đáp ứng nhu cầu trị liệu xoa bóp của bạn.'
        },
        {
            key: 'GYM',
            name: 'PHÒNG GYM',
            url: 'https://reynaluxuryhotel.com/files/images/DSC_8637-min.jpg',
            bio: (
                <div className='text-center'>
                    - Địa điểm: Tầng hầm <br />
                    - Thời gian phục vụ: 06:00-22:00 <br />
                    Miễn phí phục vụ cho Quý khách hàng lưu trú tại khách sạn
                </div>
            )
        }
    ]
    const comments=[
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

        {/* <div className='w-full'>
            <Slider {...settings}>
                {sliders.map((slider)=>(
                    <div key={slider.key}>
                        <img src={slider.url} alt={slider.name}  className='w-full'/>
                    </div>
                ))}
            </Slider>   
        </div> */}
        <SliderComponent arrImages={sliders}/>
 {/* đặt phòng  */}

        <div className='grid grid-cols-6 w-full h-[89px] bg-[#000] mt-[-88px] mb-[60px] absolute'>
            <div className='flex text-white font-bold py-[17px] px-[15px] justify-center z-40 bg-black'>
                <div className='block justify-center text-center text-white font-bold  z-40 bg-black'>
                    <h1 className='text-2xl'>Đặt phòng ngay</h1>
                    <span>Ưu đãi giá thấp nhất</span>
                </div>
                <div className='flex justify-center items-center absolute bg-white w-[40px] h-[40px] rounded-full left-[233px] mt-2 z-20'>
                    <FaAngleRight className='text-[#ae8545] h-4 '/>
                </div>
            </div>
            <div className='justify-center px-[15px] bg-goldlg z-10'>
                
                <select name="DateIn" id="DateIn" className='border-0 h-10 w-[224px] mt-[25px] ml-3'>
                    <option value='1'>Người lớn</option>
                    <option value='1'>1</option>
                    <option value='1'>1</option>
                    <option value='1'>1</option>
                </select>
            </div>
            <div className='justify-center px-[15px] bg-goldlg z-40 '>
                <Space direction="vertical">
                    <DatePicker onChange={onChangeIn}  placeholder="Ngày đến" className='text-center h-10 w-[224px] mt-[25px] ml-3 placeholder-black' style={{ color: 'black' }}/>
                </Space>
            </div>
            <div className='justify-center px-[15px] bg-goldlg z-40 '>
                <Space direction="vertical">
                    <DatePicker  onChange={onChangeOut} placeholder="Ngày đi" className='text-center h-10 w-[224px] mt-[25px] ml-3' />
                </Space>
            </div>
            <div className='justify-center px-[15px] bg-goldlg z-40 '>
            <select name="DateIn" id="DateIn" className='border-0 h-10 w-[224px] mt-[25px] ml-3'>
                    <option value='1'>Trẻ em</option>
                    <option value='1'>1</option>
                    <option value='1'>1</option>
                    <option value='1'>1</option>
                </select>
            </div>
            <div className='justify-center px-[15px] bg-goldlg z-40 text-white items-center text-center '>
                {/* <Button className='bg-[#8e6729] h-[96px] px-12 text-white border-none hover:text-goldlg'>KIỂM TRA</Button> */}
                <button className='py-[28.5px] bg-[#755727] h-full w-[223.19px]'>
                    <span className='mt-[9px]'>KIỂM TRA
                    </span></button>

            </div>
        </div>

{/* Về chũng tôi */}

        <div>
            <div className='flex justify-center py-[60px] bg-white'>
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

{/* Phòng khách sạn */}

        <div className='pb-10'>
            <div className='mx-[174.6px]'>
                <h4 className='text-h2 text-center text-white my-[30px] mt-[40px]'>
                    PHÒNG KHÁCH SẠN
                </h4>
                <div className="">
                    <Slider {...settingsDetail}  className='left-[10px] '>
                        {RoomDetails.map((RoomDetail)=>(
                            <div key={RoomDetail.key}>
                                <img src={RoomDetail.url} alt={RoomDetail.name} className='w-[360px]'/>
                                <div className='p-5 bg-background w-[360px]'>
                                    <h4 className='text-center mt-[5px] mb-[10px] hover:text-[#C52D2F] text-textA pl-[5px] text-lg font-bold'>{RoomDetail.name}</h4>
                                    <div className='text-justify' >
                                        {RoomDetail.bio}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>

{/* dịch vụ  */}

        <div className='bg-white py-[25px] '>
            <div className='mx-[174.6px]'>
                <div className='px-[15px]'>
                    <h4 className='text-h2 text-center text-[#333] my-[10px]'>
                        DỊCH VỤ
                    </h4>
                    <div className='text-base text-center text-[#333d21]'>
                        Hãy đến với chúng tôi bạn sẽ nhận được những dịch vụ và ưu đãi tốt nhất
                    </div>
                </div>
                <div>
                    <div className='flex justify-center gap-[30px] mt-5'>
                        {outServices.map((outService)=>(
                            <div key={outService.key} className='w-[360px] '>
                                <img src={outService.url} alt={outService.name} className='w-[360px]'/>
                                <div className='w-360px p-5 text-center'>
                                    <div className='text-[#132E45] text-xl font-bold '>{outService.name}</div>
                                    <div className='text-[#333d21] text-base text-justify mt-[10px] mb-[25px]'>{outService.bio}</div>
                                    <a href="https://reynaluxuryhotel.com/Gioi-thieu/61/khach-san-reyna-luxury" className='py-[15px] px-[30px] bg-[#ae8545] text-white hover:bg-white hover:text-[#ae8545] hover:border-[1px]'>Chi tiết</a>
                                </div>
                            </div>
                        ))}
                    </div>           
                </div>
            </div>
        </div>                    

{/* Phản hồi */}

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
                <Slider {...settingsComments}>
                    {comments.map((comment)=>(
                        <div key={comment.key}>
                            <h4 className='text-3xl my-[10px] text-white' >{comment.name}</h4>
                            <p className='mt-[10px] mb-[30px] text-lg text-white text-center'>{comment.cmt}</p>
                        </div>
                    ))}
                </Slider>
                </div>
                            
            </div>
        </div>
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
