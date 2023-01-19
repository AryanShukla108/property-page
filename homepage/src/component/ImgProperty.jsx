import React from 'react'

import './imgproperty.css'

// import 'bootstrap/dist/css/bootstrap.min.css';

// import Carousel from 'react-bootstrap/Carousel';

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import { MdLocalOffer } from 'react-icons/md'



function ImgProperty() {
  return (

    


<div className="slider">

  <h1 className='one'>My Listings</h1>
  <h2 className='two'>See All</h2>



      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >


        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexels1.jpg"
              alt="First slide" />
              <h3 className='big-h3'>Sunrise Charkop</h3>
              <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer/> Exclusive</h5>
          </div>
            
          </SwiperSlide>


        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexel2.jpg"
              alt="First slide" />
            <h3 className='big-h3'>Sunrise Charkop</h3>
            <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer /> Exclusive</h5>
          </div>

          </SwiperSlide>


        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexels3.jpg"
              alt="First slide" />
            <h3 className='big-h3'>Sunrise Charkop</h3>
            <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer /> Exclusive</h5>
          </div>
          </SwiperSlide>

        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexel4.jpg"
              alt="First slide" />
            <h3 className='big-h3'>Sunrise Charkop</h3>
            <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer /> Exclusive</h5>
          </div>
          </SwiperSlide>


        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexel5.jpg"
              alt="First slide" />
            <h3 className='big-h3'>Sunrise Charkop</h3>
            <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer /> Exclusive</h5>
          </div>
          </SwiperSlide>


        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexel4.jpg"
              alt="First slide" />
            <h3 className='big-h3'>Sunrise Charkop</h3>
            <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer /> Exclusive</h5>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexel4.jpg"
              alt="First slide" />
            <h3 className='big-h3'>Sunrise Charkop</h3>
            <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer /> Exclusive</h5>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexels1.jpg"
              alt="First slide" />
            <h3 className='big-h3'>Sunrise Charkop</h3>
            <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer /> Exclusive</h5>
          </div>
          </SwiperSlide>

        <SwiperSlide>
          <div className='slider-bhai'>
            <img
              className="  first d-block "
              src="./images/pexels1.jpg"
              alt="First slide" />
            <h3 className='big-h3'>Sunrise Charkop</h3>
            <h5 className='small-h5'>Kandivali Mumbai 400067</h5>
            <h5 className='h5-logo'> <MdLocalOffer /> Exclusive</h5>
          </div>
          </SwiperSlide>

      </Swiper>

      {/* <Carousel className='slider2'>

        <Carousel.Item>
          <img
            className="  first d-block "
            src="./images/pexels1.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>




        <Carousel.Item>
          <img
            className=" secound d-block "
            src="./images/pexel2.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>






        <Carousel.Item>
          <img
            className="third d-block "
            src="./images/pexels3.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>




        <Carousel.Item>
          <img
            className=" four  d-block "
            src="./images/pexel4.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>


        <Carousel.Item>
          <img
            className=" five  d-block "
            src="./images/pexel5.jpg"
            alt="First slide"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>

        </Carousel.Item>



      </Carousel> */}




    </div>
  )
}

export default ImgProperty