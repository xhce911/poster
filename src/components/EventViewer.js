
import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../Assets/1.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

export default class EventViewer extends Component {
  render() {
    return (
        <>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper is-hidden-desktop">
            <SwiperSlide>
                <div class="card p-2 is-mobile" >
                    <div class="card-image">
                        <figure class="image is-9by16">
                        <img src={image1} alt="Placeholder image" />
                        </figure>
                    </div>
                    
                    
                </div>
            </SwiperSlide>






            <SwiperSlide>Slide 2</SwiperSlide>
            
        </Swiper>
        
        </>
    )
  }
}
