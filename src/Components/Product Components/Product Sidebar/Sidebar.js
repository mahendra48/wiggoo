import React, { useState, useEffect } from "react";
import { ArrowDown2, ArrowRight2 } from "iconsax-react";
import { Link, useLocation, useParams } from "react-router-dom";
import {
  polishingCat,
  ScubberWalkBehind,
  ScubberRideOn,
  RideOnSweepers,
  WalkBehindSweepers,
  carpetClean,
  vaccum,
} from "../Product List/productList";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const { productId } = useParams();

  const productCategories = [
    {
      id: 1,
      name: "polishing-machine",
      displayName: "Polishing Machine",
      count: polishingCat.length,
      products: polishingCat.map((product) => ({
        id: product.id,
        productName: product.productName,
      })),
    },
    {
      id: 2,
      name: "scrubber",
      displayName: "Scrubber",
      count: ScubberWalkBehind.length + ScubberRideOn.length,
      products: [
        ...ScubberWalkBehind.map((product) => ({
          id: product.id,
          productName: product.productName,
        })),
        ...ScubberRideOn.map((product) => ({
          id: product.id,
          productName: product.productName,
        })),
      ],
    },
    {
      id: 3,
      name: "sweeper",
      displayName: "Sweeper",
      count: WalkBehindSweepers.length + RideOnSweepers.length,
      products: [
        ...WalkBehindSweepers.map((product) => ({
          id: product.id,
          productName: product.productName,
        })),
        ...RideOnSweepers.map((product) => ({
          id: product.id,
          productName: product.productName,
        })),
      ],
    },
    {
      id: 4,
      name: "carpet-cleaners",
      displayName: "Carpet Cleaners",
      count: carpetClean.length,
      products: carpetClean.map((product) => ({
        id: product.id,
        productName: product.productName,
      })),
    },
    {
      id: 5,
      name: "vacuum",
      displayName: "Vacuum",
      count: vaccum.length,
      products: vaccum.map((product) => ({
        id: product.id,
        productName: product.productName,
      })),
    },
  ];

  useEffect(() => {
    const currentCategory = location.pathname.split("/")[2];
    const matchedCategory = productCategories.find(
      (cat) => cat.name === currentCategory
    );

    if (matchedCategory) {
      setOpenDropdown(matchedCategory.id);
    } else {
      setOpenDropdown(null);
    }
  }, [location.pathname]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="col-md-3">
      <div className="sidebar">
        <div className="bg-warning text-white py-2 px-3">
          <h5 className="m-0 fw-bold">PRODUCT CATEGORIES</h5>
        </div>

        {productCategories.map((category) => (
          <div
            key={category.id}
            style={{ fontSize: "14px", textAlign: "left" }}
          >
            <div
              className="category-item d-flex justify-content-start align-items-center m-2"
              onClick={() => toggleDropdown(category.id)}
              style={{ cursor: "pointer" }}
            >
              {openDropdown === category.id ? (
                <ArrowDown2 size="20" className="me-1 text-warning" />
              ) : (
                <ArrowRight2 size="20" className="me-1" />
              )}
              <span
                className={openDropdown === category.id ? "text-warning" : ""}
              >
                <Link
                  className={
                    openDropdown === category.id
                      ? "text-warning text-decoration-none fw-bold"
                      : "text-decoration-none text-black fw-bold"
                  }
                  to={`/category/${category.name}`}
                >
                  {category.displayName} ({category.count}){" "}
                </Link>
              </span>
            </div>
            <hr className="m-0" />

            <div
              className={`dropdown-content w-100 ${
                openDropdown === category.id ? "show" : ""
              }`}
            >
              <ul className="list-group list-group-flush w-100 border-bottom text-center">
                {category.products.map((product) => (
                  <li
                    key={product.id}
                    className="list-group-item product-sidebar-list"
                  >
                    <Link
                      to={`/category/${category.name}/${product.id}`}
                      className={
                        productId == product.id
                          ? "text-decoration-none selected-product-name"
                          : "text-decoration-none product-name"
                      }
                    >
                      {product.productName}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
