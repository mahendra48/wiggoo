import React from "react";
import {
  polishingCat,
  ScubberWalkBehind,
  ScubberRideOn,
  RideOnSweepers,
  WalkBehindSweepers,
  carpetClean,
  vaccum,
} from "./productList";
import { useLocation, Link } from "react-router-dom";

function List() {
  const location = useLocation();

  const productMapping = {
    "/category/polishing-machine": polishingCat,
    "/category/scrubber": {
      walkBehind: ScubberWalkBehind,
      rideOn: ScubberRideOn,
    },
    "/category/sweeper": {
      walkBehind: WalkBehindSweepers,
      rideOn: RideOnSweepers,
    },
    "/category/carpet-cleaners": carpetClean,
    "/category/vacuum": vaccum,
  };

  const currentCategory = location.pathname;
  const products = productMapping[currentCategory] || [];

  const isScrubberOrSweeper =
    currentCategory === "/category/scrubber" ||
    currentCategory === "/category/sweeper";

  return (
    <div className="col-md-9">
      {isScrubberOrSweeper ? (
        <>
          {/* Walk-Behind Section */}
          <div className="p-2">
            <h2 className="text-center fw-bold">Walk-Behind</h2>
            <p className="text-center" style={{color:'#585852'}}>
              Extremely productive and easy to use in all small and medium
              areas.
            </p>
            <div className="row justify-content-start">
              {products.walkBehind && products.walkBehind.length > 0 ? (
                products.walkBehind.map((product, index) => (
                  <div
                    key={index}
                    className="col-md-4 mb-4 product-lists product-box2"
                  >
                    <Link
                      to={`${location.pathname}/${product.id}`}
                      className="text-decoration-none"
                    >
                      {" "}
                      {/* Adjust link based on category */}
                      <div className="card shadow h-100">
                        <img
                          src={product.image}
                          className="card-img-top img-fluid"
                          alt={product.alt}
                        />
                        <div className="card-body">
                          <p className="card-text no-link-color">
                            <small>{product.productName}</small>
                          </p>
                        </div>
                        {/* <div className="card-body text-center product-list-title">
                          <p className="card-title text-sm m-0">
                            <small>{product.productName}</small>
                          </p>
                        </div> */}
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center">
                  No Walk-Behind products available.
                </p>
              )}
            </div>
          </div>
          <hr className="hr-lg mt-1" />

          {/* Ride-On Section */}
          <div className="p-2">
            <h2 className="text-center fw-bold">Ride-On</h2>
            <p className="text-center">
              Maximum performance and productivity for all medium and large
              surfaces.
            </p>
            <div className="row justify-content-start">
              {products.rideOn && products.rideOn.length > 0 ? (
                products.rideOn.map((product, index) => (
                  <div
                    key={index}
                    className="col-md-4 mb-4 product-lists product-box2"
                  >
                    <Link
                      to={`${location.pathname}/${product.id}`}
                      className="text-decoration-none"
                    >
                      <div className="card shadow h-100">
                        <img
                          src={product.image}
                          className="card-img-top img-fluid"
                          alt={product.alt}
                        />
                        <div className="card-body">
                          <p className="card-text no-link-color">
                            <small>{product.productName}</small>
                          </p>
                        </div>
                        {/* <div className="card-body text-center product-list-title">
                          <p className="card-title text-sm m-0">
                            <small>{product.productName}</small>
                          </p>
                        </div> */}
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p className="text-center">No Ride-On products available.</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="p-0">
          <div className="row justify-content-start">
            {products.length > 0 ? (
              products.map((product, index) => (
                <div
                  key={index}
                  className="col-md-4 mb-4 product-lists product-box2"
                >
                  <Link
                    to={`${currentCategory}/${product.id}`}
                    className="text-decoration-none"
                  >
                    <div className="card shadow h-100">
                      <img
                        src={product.image}
                        className="card-img-top img-fluid"
                        alt={product.alt}
                      />
                      <div className="card-body">
                        <p className="card-text no-link-color">
                          <small>{product.productName}</small>
                        </p>
                      </div>
                      {/* <div className="card-body text-center product-list-title">
                          <p className="card-title text-sm m-0">
                            <small>{product.productName}</small>
                          </p>
                        </div> */}
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center">
                No products available for this category.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
