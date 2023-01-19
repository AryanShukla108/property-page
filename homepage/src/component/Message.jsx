import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { MdStarOutline } from 'react-icons/md'

import './message.css'

function Message() {
  return (
    <div className='message'>

      <h2 className='Test'>TestiMonials</h2>
      
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        

        <SwiperSlide>

          <div className='review'>

            <h1 className='more-logo'> <MdStarOutline />  <MdStarOutline /> <MdStarOutline /> <MdStarOutline /> <MdStarOutline />  </h1>

            <h1 className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci similique aliquid odit a nobis, amet ratione atque perspiciatis dolorum?</h1>
            <img className='aryan' src="./images/aryan1.jpg" alt="" />
            <h1 className='self'>Aryan Shukla</h1>

          </div>

          </SwiperSlide>

        <SwiperSlide>
          <div className='review'>

            <h1 className='more-logo'> <MdStarOutline />  <MdStarOutline /> <MdStarOutline /> <MdStarOutline /> <MdStarOutline />  </h1>

            <h1 className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci similique aliquid odit a nobis, amet ratione atque perspiciatis dolorum?</h1>
            <img className='aryan' src="./images/aryan1.jpg" alt="" />
            <h1 className='self'>Aryan Shukla</h1>

          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='review'>

            <h1 className='more-logo'> <MdStarOutline />  <MdStarOutline /> <MdStarOutline /> <MdStarOutline /> <MdStarOutline />  </h1>

            <h1 className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci similique aliquid odit a nobis, amet ratione atque perspiciatis dolorum?</h1>
            <img className='aryan' src="./images/aryan1.jpg" alt="" />
            <h1 className='self'>Aryan Shukla</h1>

          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='review'>

            <h1 className='more-logo'> <MdStarOutline />  <MdStarOutline /> <MdStarOutline /> <MdStarOutline /> <MdStarOutline />  </h1>

            <h1 className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci similique aliquid odit a nobis, amet ratione atque perspiciatis dolorum?</h1>
            <img className='aryan' src="./images/aryan1.jpg" alt="" />
            <h1 className='self'>Aryan Shukla</h1>

          </div>
        </SwiperSlide>


        
      </Swiper>



      </div>
  )
}

export default Message