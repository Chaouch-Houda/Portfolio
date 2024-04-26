import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";

import i1 from "../../img/myPhotos/i1.jpg";
import i2 from "../../img/myPhotos/i2.jpg";
import i3 from "../../img/myPhotos/i3.jpg";
import i4 from "../../img/myPhotos/i4.jpg";
// import i5 from "../../img/myPhotos/i5.jpg";
import i6 from "../../img/myPhotos/i6.jpg";
import i7 from "../../img/myPhotos/i7.jpg";
import i8 from "../../img/myPhotos/i8.jpg";
import i9 from "../../img/myPhotos/i9.jpg";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const images = [ i4, i7, i8,i1,i6, i9, i2, i3,  ];

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Social activities</span>
      <span>Memories</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {images.map((i, id) => (
          <SwiperSlide key={id} style={{width:'19rem'}}>
            <img src={i} alt={id} style={{maxWidth:'100%',height:"100%"}}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
