import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../../../assets/style/Slider.css";
import img1 from "../../../assets/images/Client List/Logo-01.jpg";
import img2 from "../../../assets/images/Client List/Logo-02.jpg";
import img3 from "../../../assets/images/Client List/Logo-03.jpg";
import img4 from "../../../assets/images/Client List/Logo-04.jpg";
import img5 from "../../../assets/images/Client List/Logo-05.jpg";
import img6 from "../../../assets/images/Client List/Logo-06.jpg";
import img7 from "../../../assets/images/Client List/Logo-07.jpg";
import img8 from "../../../assets/images/Client List/Logo-08.jpg";
import img9 from "../../../assets/images/Client List/Logo-09.jpg";
import img10 from "../../../assets/images/Client List/Logo-10.jpg";
import img11 from "../../../assets/images/Client List/Logo-11.jpg";
import img12 from "../../../assets/images/Client List/Logo-12.jpg";
import img13 from "../../../assets/images/Client List/Logo-13.jpg";
import img14 from "../../../assets/images/Client List/Logo-14.jpg";
import img15 from "../../../assets/images/Client List/Logo-15.jpg";
import img16 from "../../../assets/images/Client List/Logo-16.jpg";
import img17 from "../../../assets/images/Client List/Logo-17.jpg";
import img18 from "../../../assets/images/Client List/Logo-18.jpg";
import img19 from "../../../assets/images/Client List/Logo-19.jpg";
import img20 from "../../../assets/images/Client List/Logo-20.jpg";
import img21 from "../../../assets/images/Client List/Logo-21.jpg";
import img22 from "../../../assets/images/Client List/Logo-22.jpg";
import img23 from "../../../assets/images/Client List/Logo-23.jpg";
import img24 from "../../../assets/images/Client List/Logo-24.jpg";
import img25 from "../../../assets/images/Client List/Logo-25.jpg";
import img26 from "../../../assets/images/Client List/Logo-26.jpg";
import img27 from "../../../assets/images/Client List/Logo-27.jpg";
import img28 from "../../../assets/images/Client List/Logo-28.jpg";
import img29 from "../../../assets/images/Client List/Logo-29.jpg";
import img30 from "../../../assets/images/Client List/Logo-30.jpg";
import img31 from "../../../assets/images/Client List/Logo-31.jpg";
import img32 from "../../../assets/images/Client List/Logo-32.jpg";
import img33 from "../../../assets/images/Client List/Logo-33.jpg";
import img34 from "../../../assets/images/Client List/Logo-34.jpg";
import img35 from "../../../assets/images/Client List/Logo-35.jpg";
import img36 from "../../../assets/images/Client List/Logo-36.jpg";
import img37 from "../../../assets/images/Client List/Logo-37.jpg";
import img38 from "../../../assets/images/Client List/Logo-38.jpg";
import img39 from "../../../assets/images/Client List/Logo-39.jpg";
import img40 from "../../../assets/images/Client List/Logo-40.jpg";
import img41 from "../../../assets/images/Client List/Logo-41.jpg";
import img42 from "../../../assets/images/Client List/Logo-42.jpg";
import img43 from "../../../assets/images/Client List/Logo-43.jpg";
import img44 from "../../../assets/images/Client List/Logo-44.jpg";
import img45 from "../../../assets/images/Client List/Logo-45.jpg";
import img46 from "../../../assets/images/Client List/Logo-46.jpg";
import img47 from "../../../assets/images/Client List/Logo-47.jpg";
import img48 from "../../../assets/images/Client List/Logo-48.jpg";

const Client = () => {
  const logos = [
    { id: 1, src: img1, alt: "Logo 1" },
    { id: 2, src: img2, alt: "Logo 2" },
    { id: 3, src: img3, alt: "KOTHARI" },
    { id: 4, src: img4, alt: "Logo 4" },
    { id: 5, src: img5, alt: "Logo 5" },
    { id: 6, src: img6, alt: "Logo 6" },
    { id: 7, src: img7, alt: "Logo 7" },
    { id: 8, src: img8, alt: "Logo 8" },
    { id: 9, src: img9, alt: "Logo 9" },
    { id: 10, src: img10, alt: "Logo 10" },
    { id: 11, src: img11, alt: "Logo 11" },
    { id: 12, src: img12, alt: "Logo 12" },
    { id: 13, src: img13, alt: "Logo 13" },
    { id: 14, src: img14, alt: "Logo 14" },
    { id: 15, src: img15, alt: "Logo 15" },
    { id: 16, src: img16, alt: "Logo 16" },
    { id: 17, src: img17, alt: "Logo 17" },
    { id: 18, src: img18, alt: "Logo 18" },
    { id: 19, src: img19, alt: "Logo 19" },
    { id: 20, src: img20, alt: "Logo 20" },
    { id: 21, src: img21, alt: "Logo 21" },
    { id: 22, src: img22, alt: "Logo 22" },
    { id: 23, src: img23, alt: "Logo 23" },
    { id: 24, src: img24, alt: "Logo 24" },
    { id: 25, src: img25, alt: "Logo 25" },
    { id: 26, src: img26, alt: "Logo 26" },
    { id: 27, src: img27, alt: "Logo 27" },
    { id: 28, src: img28, alt: "Logo 28" },
    { id: 29, src: img29, alt: "Logo 29" },
    { id: 30, src: img30, alt: "Logo 30" },
    { id: 31, src: img31, alt: "Logo 31" },
    { id: 32, src: img32, alt: "Logo 32" },
    { id: 33, src: img33, alt: "Logo 33" },
    { id: 34, src: img34, alt: "Logo 34" },
    { id: 35, src: img35, alt: "Logo 35" },
    { id: 36, src: img36, alt: "Logo 36" },
    { id: 37, src: img37, alt: "Logo 37" },
    { id: 38, src: img38, alt: "Logo 38" },
    { id: 39, src: img39, alt: "Logo 39" },
    { id: 40, src: img40, alt: "Logo 40" },
    { id: 41, src: img41, alt: "Logo 41" },
    { id: 42, src: img42, alt: "Logo 42" },
    { id: 43, src: img43, alt: "Logo 43" },
    { id: 44, src: img44, alt: "Logo 44" },
    { id: 45, src: img45, alt: "Logo 45" },
    { id: 46, src: img46, alt: "Logo 46" },
    { id: 47, src: img47, alt: "Logo 47" },
    { id: 48, src: img48, alt: "Logo 48" },
  ];
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4 trusted">Trusted clients</h3>
      <Swiper
        freeMode={true}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        slidesPerView={5.5}
        //  slidesPerView="auto"
        spaceBetween={30}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000}
        loop={true}
        allowTouchMove={false}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile screens
          640: { slidesPerView: 3, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 40 }, // Larger screens
        }}
      >
        {logos.map((logo) => (
          <SwiperSlide key={logo.id}>
            <div className="logo-wrapper">
              <img src={logo.src} alt={logo.alt} className="logo-img" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Client;
