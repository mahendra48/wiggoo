import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TestimonialImg from "../../../assets/images/Home/testimonial.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function TestimonialSlider() {
  return (
    <div
      className="testimonial-section py-5 mt-4"
      style={{
        backgroundImage: `url(${TestimonialImg})`,
        // backgroundSize: "cover",
        backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        position: "relative",
        color: "#fff",
      }}
    >
      <div className="container text-center mt-4">
        <h2 className="mb-4" style={{ fontSize: "48px", fontWeight: "bold" }}>
          What Our Clients Say
        </h2>
        <p className="mb-5 customers-text" style={{ fontSize: "20px" }}>
          Join our 15,910+ happy customers who are consistently satisfied by
          beautifully responsive and powerfully functional.
        </p>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay enabled here
          loop={true}
          spaceBetween={30}
          speed={1000}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <div
              className="card p-4 text-center"
              style={{ backgroundColor: "#fff" }}
            >
              <p className="mb-4" style={{ color: "#000" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <div className="testimonial-user d-flex align-items-center justify-content-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-circle me-3"
                />
                <div>
                  <h5 className="mb-0" style={{ color: "#000" }}>
                    John Doe
                  </h5>
                  <p className="mb-0" style={{ color: "#f8b400" }}>
                    ⭐⭐⭐⭐⭐
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 2 */}
          <SwiperSlide>
            <div
              className="card p-4 text-center"
              style={{ backgroundColor: "#fff" }}
            >
              <p className="mb-4" style={{ color: "#000" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <div className="testimonial-user d-flex align-items-center justify-content-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-circle me-3"
                />
                <div>
                  <h5 className="mb-0" style={{ color: "#000" }}>
                    Jane Smith
                  </h5>
                  <p className="mb-0" style={{ color: "#f8b400" }}>
                    ⭐⭐⭐⭐⭐
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial 3 */}
          <SwiperSlide>
            <div
              className="card p-4 text-center"
              style={{ backgroundColor: "#fff" }}
            >
              <p className="mb-4" style={{ color: "#000" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <div className="testimonial-user d-flex align-items-center justify-content-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-circle me-3"
                />
                <div>
                  <h5 className="mb-0" style={{ color: "#000" }}>
                    Alex Johnson
                  </h5>
                  <p className="mb-0" style={{ color: "#f8b400" }}>
                    ⭐⭐⭐⭐
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="card p-4 text-center"
              style={{ backgroundColor: "#fff" }}
            >
              <p className="mb-4" style={{ color: "#000" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <div className="testimonial-user d-flex align-items-center justify-content-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-circle me-3"
                />
                <div>
                  <h5 className="mb-0" style={{ color: "#000" }}>
                    Alex Johnson
                  </h5>
                  <p className="mb-0" style={{ color: "#f8b400" }}>
                    ⭐⭐⭐⭐
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="card p-4 text-center"
              style={{ backgroundColor: "#fff" }}
            >
              <p className="mb-4" style={{ color: "#000" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard.
              </p>
              <div className="testimonial-user d-flex align-items-center justify-content-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-circle me-3"
                />
                <div>
                  <h5 className="mb-0" style={{ color: "#000" }}>
                    Alex Johnson
                  </h5>
                  <p className="mb-0" style={{ color: "#f8b400" }}>
                    ⭐⭐⭐⭐
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <div className="swiper-button-prev"></div> */}
          {/* <div className="swiper-button-next"></div> */}
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialSlider;
