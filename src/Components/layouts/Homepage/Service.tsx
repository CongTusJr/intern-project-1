import React from 'react'

const outServices=[
    {
        key:'RESTAURANT',
        name:'NHÀ HÀNG REYNA',
        url:'https://reynaluxuryhotel.com/files/images/Restaurant/nh.jpg',
        bio:'Nhà hàng Reyna Hà Nội phục vụ tiệc buffet quốc tế vào buổi sáng và A la carte suốt cả ngày. Nhà hàng của chúng tôi mang đến những trải nghiệm ẩm thực đáng nhớ thông qua các hương vị mang bản sắc quốc tế và địa phương.'
    },
    {
        key:'MASSAGE',
        name:'DỊCH VỤ MÁT XA',
        url:'https://reynaluxuryhotel.com/files/images/DSC_8673-min.jpg',
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
const Service:React.FC = () => {
  return (
    <div className='bg-white pb-[25px] '>
    <div className='mx-[174.6px]'>
        <div className='px-[15px]'>
            <h4 className='text-h2 text-center text-[#333] my-[10px]'>
                DỊCH VỤ
            </h4>
            <div className='text-base text-center text-[#333d21]'>
                Hãy đến với chúng tôi bạn sẽ nhận được những dịch vụ và ưu đãi tốt nhất
            </div>
        </div>
        <div >
            <div className='flex justify-center mt-5'>
                {outServices.map((outService)=>(
                    <div key={outService.key} className='w-[390px] px-[15px]'>
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
  )
}

export default Service