import React, { useState } from 'react';
import Slider from "react-slick";
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import { Button, Card, Rate } from 'antd';
import { useNavigate } from 'react-router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'react-datepicker/dist/react-datepicker.css';

const HomePage: React.FC =()  => {
const navigate=useNavigate()

  const [selectedDateIn, setSelectedDateIn] = useState<Date | null>(null);
    const [selectedDateOut, setSelectedDateOut] = useState<Date | null>(null);
    const handleRoomPage =()=>{
        navigate('/room')
    }
    const handleProduct=()=>{
        navigate('/detail-room')
    }
    const handleChangeIn = (date:Date) => {
        setSelectedDateIn(date);
    };const handleChangeOut = (date:Date) => {
        setSelectedDateOut(date);
    };
    const sliders:string[] = [
        'https://khachsan3.migoda.vn/wp-content/uploads/2019/11/CortonaInn-AboutUs-Hero-5bf5845edceef.jpg',
        'https://khachsan3.migoda.vn/wp-content/uploads/2019/11/slider-2.jpg',
        'https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/06/rosamia-da-nang-hotel-be-boi-ngoai-troi-1.jpg'
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: false // Ẩn các nút điều hướng
    };
  return (
    <div className='relative bg-background' >
        <Slider {...settings} >
            {sliders.map((slider, index) => (
                <div key={index} className='h-full'>
                    <img src={slider} alt={`slider-${index}`} className='md:h-[500px] md:hidden w-full object-cover' />
                </div>
            ))}
        </Slider>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <Slider {...settings}></Slider>
        </div>
        <div className='grid grid-cols-6 w-full h-24 bg-[#000] mt-[-5.6px]'>
            <div className='text-white font-bold py-[17px] px-[15px] text-center'>
                <h1 className='text-2xl'>
                Đặt phòng ngay
                </h1>
                <span>Ưu đãi giá thấp nhất</span>
            </div>
            <div className='justify-center px-[15px] bg-goldlg '>
                <Form.Select aria-label="Default select example" className='text-center h-10 w-[224px] mt-[25px]' >
                    <option>Người lớn</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">3</option>
                    <option value="3">3</option>
                    <option value="3">3</option>
                </Form.Select>
            </div>
            <div className='justify-center px-[15px] bg-goldlg '>
                <DatePicker
                    selected={selectedDateIn}
                    onChange={handleChangeIn}
                    dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
                    placeholderText="Ngày đến"
                    className='text-center h-10 w-[224px] mt-[25px]'
                />
            </div>
            <div className='justify-center px-[15px] bg-goldlg '>
                <DatePicker
                    selected={selectedDateOut}
                    onChange={handleChangeOut}
                    dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
                    placeholderText="Ngày đi"
                    className='text-center h-10 w-[224px] mt-[25px]'
                />
            </div>
            <div className='justify-center px-[15px] bg-goldlg'>
                <Form.Select aria-label="Default select example" className='text-center h-10 w-[224px] mt-[25px]' >
                    <option>Trẻ em</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">3</option>
                    <option value="3">3</option>
                    <option value="3">3</option>
                </Form.Select>
            </div>
            <div className='justify-center px-[15px] bg-goldlg text-white items-center text-center '>
                <Button className='bg-[#8e6729] h-[96px] px-12 text-white border-none hover:text-goldlg'>KIỂM TRA</Button>
            </div>
        </div>
        <div className='px-48'>
            <div className=' mt-7 px-3 pb-5 '>
                <div className='text-center'>
                    <h2 className='mx-4 font-bold text-2xl'>CÁC PHÒNG SẴN CÓ TẠI KHÁCH SẠN</h2>
                </div>
                <div className='flex items-center justify-center '>
                    <img 
                    className='w-[280px] h-[45px]]'
                    src="https://moscowballetlc.com/wp-content/uploads/2017/11/razdelitel1.png" alt="" />
                </div>
            </div>
            <div>
                <div className='flex grid-cols-3 gap-5'>
                    <Card
                        onClick={handleProduct}
                        hoverable
                        className='w-[367px] text-center '
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }>
                        <h2 className='text-[#AC964B] text-xl text-center font-serif hover:text-[#987C1f]'>Superior Twin City View Room</h2>
                        <div>
                            <Rate className='text-black p-3' disabled defaultValue={1} />
                        </div>
                        <span className='text-[#ff5722] text-[19px] text-center'>1.000.000₫/đêm</span>
                    </Card>
                    
                </div>
                <div className='flex justify-center my-4'>
                    <Button onClick={handleRoomPage} danger>Xem thêm</Button>
                </div>
            </div>
        </div>
        <div className='px-48'>
            <div className='bg-white mt-7 pt-3'>
                <div className='  px-3 pb-5 '>
                    <div className='text-center'>
                        <h2 className='mx-4 font-bold text-2xl'>GREAT VALUE IN AN IDEAL LOCATION</h2>
                    </div>
                    <div className='flex items-center justify-center '>
                        <img 
                        className='w-[280px] h-[45px]]'
                        src="https://moscowballetlc.com/wp-content/uploads/2017/11/razdelitel1.png" alt="" />
                    </div>
                </div>
                <div className='flex grid-cols-3 gap-5 '>
                    <div className='col-span-2'>
                    Khách sạn Reyna Luxury là thành viên tiếp theo của hệ thống khách sạn Reyna, được quản lý bởi tập đoàn 22 Land.<br/>
                    Khách sạn tọa lạc tại vị trí 34 Phố Miếu Đầm, phường Mễ Trì, Nam Từ Liêm, Hà Nội - Nơi trung tâm hành chính quan trọng của quốc gia. 
                    Tiếp giáp với nhiều vị trí quan trọng: cách sân bay Nội Bài 25km, cách Trung tâm hội nghị quốc gia 3 phút đi bộ, gần sân vận động Quốc gia 
                    Mỹ Đình chỉ vài phút lái xe, đối diện với khách sạn JW Marriott, quý khách có thể dễ dàng di chuyển đến các tòa nhà văn phòng cũng như các 
                    khu công nghiệp lớn ở Hà Nội. Với vị trí thuận tiện di chuyển đến các Khu công nghiệp lân cận, gần các tòa nhà văn phòng và trung tâm thương mại, 
                    khách sạn Reyna Luxury hứa hẹn sẽ trở thành điểm dừng chân, nghỉ ngơi lý tưởng cho những chuyến đi công tác hay du lịch của khách hàng trong nước 
                    và quốc tế.
                    </div>
                    <div className='col-span-2'>
                        <img src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'/>
                    </div>
                </div>   
            </div>
        </div>
    </div>
  );
};

export default HomePage;
