import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { themeContext } from "../../Context";

import i1 from "../../assets/images/myPhotos/i1.jpg";
import i2 from "../../assets/images/myPhotos/i2.jpg";
import i3 from "../../assets/images/myPhotos/i3.jpg";
import i4 from "../../assets/images/myPhotos/i4.jpg";
import i5 from "../../assets/images/myPhotos/i5.jpg";
import i6 from "../../assets/images/myPhotos/i6.jpg";
import i7 from "../../assets/images/myPhotos/i7.jpg";
import i8 from "../../assets/images/myPhotos/i8.jpg";
import i9 from "../../assets/images/myPhotos/i9.jpg";
import i10 from "../../assets/images/myPhotos/i10.jpg";
import i11 from "../../assets/images/myPhotos/i11.jpg";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const images = [ i4, i7, i8,i10,i1,i6, i9, i2, i3,i5,i11  ];

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
        breakpoints={{
          0: {
            direction: "vertical",
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            direction: "vertical",
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            direction: "horizontal",
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}

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
