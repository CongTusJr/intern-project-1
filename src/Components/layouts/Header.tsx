import React, { useState } from 'react'
import { CaretDownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { CloseOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BsTelephoneFill } from "react-icons/bs";

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link target="_blank" rel="noopener noreferrer" to='/nha-hang-reyna-luxury'>
          NHÀ HÀNG REYNA LUXURY
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="/dich-vu-mat-xa">
          DỊCH VỤ MÁT SA
        </Link>
      ),
    },
    {
      key: '3',
      label: (
        <Link target="_blank" rel="noopener noreferrer" to="/phong-gym">
          PHÒNG GYM 
        </Link>
      ),
    },
  ];

const Header:React.FC = () => {
const navigate=useNavigate()
const handlenavigateHome=()=>{
    navigate('/')
}
const [isOpen, setIsOpen]=useState<boolean>(false)
  return ( 
    <div className='shadow-md w-full bg-[#000] h-[100px]'>
        <div className='flex justify-between px-[173px]' >
            <div className='font-bold  cursor-pointer flex items-center gap-1 px-[15px] w-48'>
                <img onClick={handlenavigateHome} src="https://reynaluxuryhotel.com/files/files/logo-reyna.png" alt="logo-reynal" className='w-[132px] h-[99px] md:w-18'/>
            </div>
            <div onClick={()=> setIsOpen(!isOpen)} className="w-8 h-8 absolute right-8 text-goldlg top-6 cursor-pointer md:hidden ">
                {
                    isOpen?<CloseOutlined/>:<UnorderedListOutlined/>
                }
            </div>
            {/* <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#000] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-[128   ]' : 'top-[-490px]'}`}> */}
            <div className='h-20 w-[840px] flex pl-[45px]'>
                    {/* <li className='font-bold  my-7 md:pl-0 md:ml-8'> */}
                    <span className='font-bold  px-[10px] pt-[45px] pb-[15px]'>
                        <Link to='/' className='text-goldlg hover:text-[#8d663A] text-[14px]'>TRANG CHỦ</Link>
                    </span>
                    <span className='font-bold  px-[10px] pt-[45px] pb-[15px]'>
                        <Link to='/about-us' className='text-goldlg hover:text-[#8D663A] text-[14px]'>GIỚI THIỆU</Link>
                    </span>
                    <span className='font-bold  px-[10px] pt-[45px] pb-[15px]'>
                        <Link to='/room' className='text-goldlg hover:text-[#8D663A] text-[14px]'>PHÒNG</Link>
                    </span>
                    <span className='font-bold  px-[10px] pt-[45px] pb-[15px] cursor-pointer'>
                        {/* <Link to='/room' className='text-goldlg hover:text-[#8D663A] text-[14px]'>DỊCH VỤ</Link> */}
                        <Dropdown menu={{ items }}>
                            <span onClick={(e) => e.preventDefault()}>
                            <Space className='text-goldlg hover:text-[#8D663A] text-[14px]'>
                                DỊCH VỤ
                                <CaretDownOutlined />
                            </Space>
                            </span>
                        </Dropdown>
                    </span>
                    <span className='font-bold  px-[10px] pt-[45px] pb-[15px]'>
                        <Link to='/room' className='text-goldlg hover:text-[#8D663A] text-[14px]'>HÌNH ẢNH</Link>
                    </span>
                    <span className='font-bold  px-[10px] pt-[45px] pb-[15px]'>
                        <Link to='/room' className='text-goldlg hover:text-[#8D663A] text-[14px]'>TOURS</Link>
                    </span>
                    <span className='font-bold  px-[10px] pt-[45px] pb-[15px]'>
                        <Link to='/room' className='text-goldlg hover:text-[#8D663A] text-[14px]'>LIÊN HỆ</Link>
                    </span>
            </div>
            
            <div >
                <div className='flex justify-end gap-3 pr-[15px] pt-4 mt-[30px]'>
                    <img src="https://reynaluxuryhotel.com/files/images/comment/English.png" alt="" />
                    <img src="https://reynaluxuryhotel.com/files/images/comment/vietnamese.png" alt="" />
                </div>
            </div>
            
        </div>
        <div className='text-white text-[14px] mt-1 top-0 justify-end z-10 absolute right-0 pr-[15px] xl:mr-[173px] lg:mr-[48px]'>
          <span className='flex'> <BsTelephoneFill className='mt-1 w-3'/>&nbsp;+84 976 328066 (call/zalo)</span>
        </div>
    </div>
  )
}

export default Header

