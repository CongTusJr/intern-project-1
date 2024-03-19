import {  InstagramOutlined, MailOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const Footer:React.FC = () => {
  // const navigate=useNavigate()
  // const handlenavigateHome=()=>{
  //   navigate('/')
  // }
  return (
    <div className=' text-[#cacdd1] bg-[#000] font-myriad l'>
      <div className='flex' >
        <div className='pb-[10px] mt-[30px] px-[15px] justify-center mx-[174.6px] w-[1174px]'>
          <Row className='gap-5 leading-[25px]'>
            <Col span={8} >
              <div className='w-[380px] px-[15px] font-myriad'>
              <h1 className=' text-h1 mb-[10px] font-medium'>Reyna Luxury Hotel</h1>
              <p className='mb-[10px] w-[350px] '>Địa chỉ: Số 34 Miếu Đầm, P. Mễ Trì, Q. Nam Từ Liêm, Hà Nội</p>
              <p className='mb-[10px] flex items-center'><i className=' py-[5px] px-2 w-[27px]'><BsTelephoneFill className='w-[11px] '/></i> Số điện thoại: 024 3359 3555</p>
              <p className='hover:text-goldlg cursor-pointer mb-[10px] text-white'><i className='px-[7px] py-[5px]'><MailOutlined /></i> Email: info@reynaluxuryhotel.com</p>
              <div className='text-[34px] h-[56px] flex py-[14px] ml-[-12px]'>
                <a href="https://www.facebook.com/congtus.1703" className='flex border-[1px] border-white hover:border-goldlg h-[32px] w-[34px] justify-center mx-[15px] p-[5px] items-center'>
                  <div className=' h-7 w-[22.9px] px-[6px] py-[5px] '>
                    <a href="https://www.facebook.com/congtus.1703" className='hover:text-goldlg'>
                      <FaFacebookF className="w-full h-full" />
                    </a>
                  </div>
                </a>
                <a href="https://www.facebook.com/congtus.1703" className='flex border-[1px] border-white hover:border-goldlg h-[32px] w-[34px] justify-center mx-[15px] p-[5px] items-center'>
                  <div className=' h-7 w-[22.9px] px-[3px] py-[5px] '>
                    <a href="https://www.facebook.com/congtus.1703" className='hover:text-goldlg'>
                    <FaTwitter  className="w-full h-full"/>
                    </a>
                  </div>
                </a>
                <a href="https://www.facebook.com/congtus.1703" className='flex border-[1px] border-white hover:border-goldlg h-[32px] w-[34px] justify-center mx-[15px] p-[5px] items-center'>
                  <div className=' h-7 w-[22.9px] '>
                    <a href="https://www.facebook.com/congtus.1703" className='hover:text-goldlg'>
                      <TfiYoutube className="w-full h-full" />
                    </a>
                  </div>
                </a>
                <a href="https://www.facebook.com/congtus.1703" className='flex border-[1px] border-white hover:border-goldlg h-[32px] w-[34px] justify-center mx-[15px] p-[5px] items-center'>
                  <div className=' h-7 w-[22.9px] px-[3px] py-[5px] '>
                    <a href="https://www.facebook.com/congtus.1703" className='hover:text-goldlg'>
                      <FaInstagram className="w-full h-full" />
                    </a>
                  </div>
                </a>

                {/* <a href="https://twitter.com/"className='hover:text-goldlg ml-4 '></a> */}
                {/* <a href="https://www.youtube.com/"className='hover:text-goldlg ml-4 mt-2 '>< /></a> */}
                {/* <a href="https://www.instagram.com/"className='hover:text-goldlg ml-4 '>< /></a> */}
              </div>
              </div>
            </Col>
            <Col span={6} className='inline-block font-myriad text-white'>
              <p className='text-[20px] text-[#cacdd1] my-[10px]'>VỀ CHÚNG TÔI</p> 
              <p className='mb-[10px] cursor-pointer'>Liên hệ</p>
              <p className='mb-[10px] cursor-pointer'>Địa chỉ & Bản đồ</p>
              <p className='mb-[10px] cursor-pointer'>Điều kiện & Điều khoản</p>
              <p className='mb-[10px] cursor-pointer'>Tin tức</p>
            </Col>
            <Col span={8}>
            <p className='text-[20px] text-[#cacdd1] my-[10px] font-myriad'>BÀI VIẾT</p> 
            </Col>
          </Row>
        </div>
      </div>
      <div className='mx-[174.6px] px-[15px]'>
        <p className='py-[10px]  text-white'> Copyright © Reyna Luxury Hotel. 2023 All Rights Reserved | <a href="https://www.facebook.com/congtus.1703" title="" className='hover:text-goldlg'> Design by webhotel </a> </p> 
      </div>
    </div>
  )
}

export default Footer
  // 