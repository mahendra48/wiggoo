import React, { useState } from "react";
import {
  polishingCat,
  ScubberWalkBehind,
  RideOnSweepers,
  carpetClean,
  vaccum,
} from "../../../Components/Product Components/Product List/productList";
import "../../../assets/style/Homecat.css"; // Custom styles for active/inactive images
import { Link, redirect } from "react-router-dom";
import cat1bw from "../../../assets/HomeCatSection/Black and White/Polishing-Machine-Black-and-White.png";
import cat2bw from "../../../assets/HomeCatSection/Black and White/Scrubber-Black-and-White.png";
import cat3bw from "../../../assets/HomeCatSection/Black and White/Sweeper-Black-and-White.png";
import cat4bw from "../../../assets/HomeCatSection/Black and White/Carpet-Cleaner-Black-and-White.png";
import cat5bw from "../../../assets/HomeCatSection/Black and White/Vacuum.png";
import cat1ori from "../../../assets/HomeCatSection/Original/Polishing-Machin-Original.png";
import cat2ori from "../../../assets/HomeCatSection/Original/Scrubber-Original.png";
import cat3ori from "../../../assets/HomeCatSection/Original/Sweeper-Original.png";
import cat4ori from "../../../assets/HomeCatSection/Original/Carpet-Cleaner-Original.png";
import cat5ori from "../../../assets/HomeCatSection/Original/Vacuum-Original.png";
import sideCatImg1 from "../../../assets/HomeCatSection/Banner/Polishing-Machine-Banner.jpg";
import sideCatImg2 from "../../../assets/HomeCatSection/Banner/Scrubber-Banner.jpg";
import sideCatImg3 from "../../../assets/HomeCatSection/Banner/Sweeper-Banner.jpg";
import sideCatImg4 from "../../../assets/HomeCatSection/Banner/Carpet-Cleaner-Banner.jpg";
import sideCatImg5 from "../../../assets/HomeCatSection/Banner/Vacuum-Banner.jpg";
import { ArrowRight } from "iconsax-react";

const categories = [
  {
    id: 1,
    name: "polishing-machine",
    displayName: "Polishing Machine",
    inactiveImage: cat1bw,
    activeImage: cat1ori,
    description1: "Polish to Perfection, Every Time!",
    description2:
      "Our advanced polishing machines deliver flawless, long-lasting shine with ease. Designed for both commercial and industrial use, they ensure precision and durability.",
    products: polishingCat,
    bannerImg: sideCatImg1,
    redirectURL:'/category/polishing-machine'
  },
  {
    id: 2,
    name: "scrubber",
    displayName: "Scrubber",
    inactiveImage: cat2bw,
    activeImage: cat2ori,
    description1: "Powerful Scrubbing, Quick Dry Results!",
    description2:
      "Our scrubber driers are designed to tackle tough dirt while leaving floors dry and ready for use. Perfect for commercial and industrial spaces, they provide deep cleaning with efficient drying in one go.",
    products: ScubberWalkBehind,
    bannerImg: sideCatImg2,
    redirectURL:'/category/scrubber'
  },
  {
    id: 3,
    name: "sweeper",
    displayName: "Sweeper",
    inactiveImage: cat3bw,
    activeImage: cat3ori,
    description1: "Powerful Sweeping for Pristine Floors!",
    description2:
      "Our sweepers deliver high-performance cleaning, tackling dust and debris with ease for spotless floors in commercial and industrial spaces.",
    products: RideOnSweepers,
    bannerImg: sideCatImg3,
    redirectURL:'/category/sweeper'
  },
  {
    id: 4,
    name: "carpet-cleaners",
    displayName: "Carpet Cleaners",
    inactiveImage: cat4bw,
    activeImage: cat4ori,
    description1: "Triple Action for Flawless Carpets!",
    description2:
      "Our three-in-one carpet cleaner is designed to deep clean, remove tough stains, and dry quickly, ensuring your carpets look and feel like new. Ideal for both residential and commercial use, it delivers superior results with ease and efficiency in every clean.",
    products: carpetClean,
    bannerImg: sideCatImg4,
    redirectURL:'/category/carpet-cleaners'
  },
  {
    id: 5,
    name: "vacuum",
    displayName: "Vacuum",
    inactiveImage: cat5bw,
    activeImage: cat5ori,
    description1: "Suck Up Dirt, Live Clean!",
    description2:
      "Our powerful vacuum cleaner effortlessly removes dust and debris from every corner, ensuring a spotless environment. Enjoy cleaner air and a healthier home with ease!",
    products: vaccum,
    bannerImg: sideCatImg5,
    redirectURL:'/category/vacuum'
  },
];

const TabCategoryDetail = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="container-fluid p-4">
      <div className="row">
        {/* Left Side Menu */}
        <div className="col-md-3">
          <nav className="nav flex-column">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`categories-main-section nav-item my-1 category-item  d-flex justify-content-start align-items-center ${
                  activeCategory.id === category.id
                    ? "active-category"
                    : "Inactive-category border"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                <img
                  src={
                    activeCategory.id === category.id
                      ? category.activeImage
                      : category.inactiveImage
                  }
                  alt={category.displayName}
                  className="img-fluid category-img"
                />
                <Link
                  className={`nav-link ms-3 text-reset text-decoration-none ${
                    activeCategory.id === category.id
                      ? "active-link fw-bold"
                      : "inactive-link"
                  }`}
                >
                  {category.displayName}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Right Side Details */}
        <div className="col-md-9">
          <div className="position-relative text-center">
            <img
              src={activeCategory.bannerImg}
              alt={activeCategory.displayName}
              className="img-fluid main-category-img"
            />
            <div className="overlay-content">
              <h2 className="my-4 text-uppercase">
                {activeCategory.displayName}
              </h2>
              <h5 className="font-weight-bold mb-3">
                {activeCategory.description1}
              </h5>
              <small>{activeCategory.description2}</small>
              <div>
                <Link className="btn btn-warning mt-4" to={`${activeCategory.redirectURL}`}>
                  Explore More <ArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCategoryDetail;
