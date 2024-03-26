import React from 'react'
import { Feedback } from '../../../interface'
import Slider from 'react-slick';

const SliderFeedback:React.FC<{arrFeedback:Feedback[]}> = ({arrFeedback})  => {
    const settingsFeedback = {
        // dots: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <></>,
        nextArrow: <></>,
      };
  return (
    
    
        <Slider {...settingsFeedback}>
            {arrFeedback.map((Feedback)=>(
                <div key={Feedback.key}>
                    <h4 className='text-3xl my-[10px] text-white' >{Feedback.name}</h4>
                    <p className='mt-[10px] mb-[30px] text-lg text-white text-center'>{Feedback.cmt}</p>
                </div>
            ))}
        </Slider>
  )
}

export default SliderFeedback