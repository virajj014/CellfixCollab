import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile3.jpg"
import profilePic2 from "../../img/profile4.jpg"
import profilePic3 from "../../img/profile5.jpg"
import profilePic4 from "../../img/profile6.jpg"
import { Pagination } from 'swiper'
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at error illum sed, esse magnam quae, odit laudantium doloribus voluptate repudiandae sit harum. Nisi, nostrum?"
        },
        {
            img: profilePic2,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at error illum sed, esse magnam quae, odit laudantium doloribus voluptate repudiandae sit harum. Nisi, nostrum?"
        },
        {
            img: profilePic3,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at error illum sed, esse magnam quae, odit laudantium doloribus voluptate repudiandae sit harum. Nisi, nostrum?"
        },
        {
            img: profilePic4,
            review:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at error illum sed, esse magnam quae, odit laudantium doloribus voluptate repudiandae sit harum. Nisi, nostrum?"
        }

    ]

  return (
    <div className="t-wrapper" id='Testinomials'>
        <div className="t-heading">
            <span>Client always get&nbsp;&nbsp;</span>
            <span>Exceptional Work&nbsp;&nbsp;</span>
        </div>

        {/* SLIDER  */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial" >
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonials