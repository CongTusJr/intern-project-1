import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer:React.FC = () => {
  const navigate=useNavigate()
  const handlenavigateHome=()=>{
    navigate('/')
  }
  return (
    <div className='py-4 bg-black'>
      <div className='flex text-white justify-between items-center mx-44 px-4'>
        <div className='cursor-pointer'>
          <img onClick={handlenavigateHome} src="https://reynaluxuryhotel.com/files/files/logo-reyna.png" alt="logo-reynal" className='w-24 md:w-18'/> 
        </div>
        <div>
          <div className='text-right'>
          CongTusJr
          </div>
          <div>
            admin@gmail.com - 0999.999.999
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer