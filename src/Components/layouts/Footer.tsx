import { FacebookOutlined, InstagramOutlined, MailOutlined, PhoneFilled, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const Footer:React.FC = () => {
  // const navigate=useNavigate()
  // const handlenavigateHome=()=>{
  //   navigate('/')
  // }
  return (
    <div className=' text-white bg-black'>
      <div className='flex' >
        <div className='pb-[10px] mt-[30px] px-[15px] justify-center mx-[174.6px] w-[1174px]'>
          <Row className='gap-5'>
            <Col span={8} >
              <h1 className='text-[30px] mb-[10px] text-[#cacdd1]'>Reyna Luxury Hotel</h1>
              <p className='mb-[10px]'>Địa chỉ: Số 34 Miếu Đầm, P. Mễ Trì, Q. Nam Từ Liêm, Hà Nội</p>
              <p className='mb-[10px]'><PhoneFilled /> +84 976 328066 (call/zalo)</p>
              <p className='hover:text-goldlg cursor-pointer mb-[10px]'><MailOutlined /> Email: info@reynaluxuryhotel.com</p>
              <div className='text-[34px]'>
                <a href="https://www.facebook.com/congtus.1703" className='hover:text-goldlg '><FacebookOutlined /></a>
                <a href="https://twitter.com/"className='hover:text-goldlg ml-4 '><TwitterOutlined /></a>
                <a href="https://www.youtube.com/"className='hover:text-goldlg ml-4 '><YoutubeOutlined /></a>
                <a href="https://www.instagram.com/"className='hover:text-goldlg ml-4 '><InstagramOutlined /></a>
              </div>
            </Col>
            <Col span={6} className='inline-block'>
              <p className='text-[20px] text-[#cacdd1] my-[10px]'>VỀ CHÚNG TÔI</p> 
              <p className='mb-[10px] cursor-pointer'>Liên hệ</p>
              <p className='mb-[10px] cursor-pointer'>Địa chỉ & Bản đồ</p>
              <p className='mb-[10px] cursor-pointer'>Điều kiện & Điều khoản</p>
              <p className='mb-[10px] cursor-pointer'>Tin tức</p>
            </Col>
            <Col span={8}>
            <p className='text-[20px] text-[#cacdd1] my-[10px]'>BÀI VIẾT</p> 
            </Col>
          </Row>
        </div>
      </div>
      <div className='mx-[174.6px] pb-[10px]'>
        <p> Copyright © Reyna Luxury Hotel. 2023 All Rights Reserved | <a href="https://www.facebook.com/congtus.1703" title="" className='hover:text-goldlg'> Design by... </a> </p> 
      </div>
    </div>
  )
}

export default Footer
  // 