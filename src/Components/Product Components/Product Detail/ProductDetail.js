import React, { useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./ProductDetail.css";
import certi1 from "../../../assets/ProductDetail/CE.png";
import certi2 from "../../../assets/ProductDetail/ISO.png";
import { ProductDetailList } from "./ProductDetailList";
import { useParams } from "react-router";

import { Tabs, Tab, Container, Row, Col, Button, Table } from "react-bootstrap";
import { ArrowDown, ArrowDown2, DocumentDownload } from "iconsax-react";
import {
  producttechData,
  producttechData2,
  productTechDataById,
} from "./TechnicalData";
import ContactModal from "../../ContactUs Modal/ContactModal ";
// import { Document } from 'react-pdf'

function ProductDetail() {
  const { productId } = useParams();
  const [modalShow, setModalShow] = useState(false);

  const productData = productTechDataById[productId];
  const product = ProductDetailList.find((p) => Number(productId) === p.id);

  const images = [
    {
      original: product.imageg,
      thumbnail: product.imageg,
    },
  ];

  const getPdfFileName = (pdfUrl) => {
    if (pdfUrl) {
      const pdfName = pdfUrl.split("/").pop();
      return pdfName.split(".")[0];
    }
    return "Unknown File";
  };
  return (
    <>
      <div className="col-md-9">
        <div className="row">
          <div className="col-md-6 product-image-section">
            <ImageGallery items={images} />
          </div>

          <div className="col-md-6">
            <div className="product-info-section">
              <div className="product-info-wrapper">
                <h2>{product.productName}</h2>
                <div className="row">
                  <div className="col-3">
                    <img
                      src={certi1}
                      className="img-fluid"
                      alt="CE Certification"
                    />
                  </div>
                  <div className="col-3">
                    <img
                      src={certi2}
                      className="img-fluid"
                      alt="ISO Certification"
                    />
                  </div>
                </div>

                {/* Text Section */}
                <div className="product-text-section mt-4">
                  <h5>Affordable Pricing Without Compromise</h5>
                  <p>
                    We offer top-quality industrial cleaning solutions at
                    competitive prices, ensuring you get the best value for your
                    investment without compromising on performance or
                    reliability.
                  </p>

                  <h5>Fast and Reliable Delivery Across India</h5>
                  <p>
                    Our streamlined logistics network guarantees prompt and
                    secure delivery of your cleaning equipment, no matter where
                    you are located in India, ensuring minimal downtime for your
                    business.
                  </p>

                  <h5>Unmatched After-Sales Support</h5>
                  <p>
                    Our dedicated after-sales support team is always ready to
                    assist you with any queries or maintenance needs, providing
                    industry-leading service that ensures your equipment runs
                    smoothly.
                  </p>

                  <h5>Comprehensive 1-Year Warranty</h5>
                  <p>
                    We stand behind the durability and quality of our products,
                    offering a 1-year warranty on all our equipment for your
                    peace of mind and operational continuity.
                  </p>

                  <h5>Pan-India Service Network</h5>
                  <p>
                    With service centers spread across the country, our expert
                    technicians are always close by, ready to provide
                    maintenance and support whenever you need it.
                  </p>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-around action-buttons mt-4">
              <Button
                variant="primary"
                className="me-2 text-uppercase"
                onClick={() => setModalShow(true)}
              >
                Inquiry
              </Button>
              <Button variant="success" className="text-uppercase">Chat with Us</Button>
            </div>
          </div>
        </div>
        <Row className="mt-4">
          <Col className="w-100">
            {" "}
            {/* Ensure Col takes full width */}
            <Tabs
              defaultActiveKey="description"
              id="product-detail-tabs"
              className="product-tabs w-100 nav-fill" // Custom class to style the tabs
            >
              {/* Description Tab */}
              <Tab eventKey="description" title="Description" className="w-100">
                <img
                  src={product.image}
                  alt={product.productName}
                  fluid
                  className="mb-4 w-100"
                />
                <div
                  className="mt-3"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </Tab>

              {/* Technical Data Tab */}
              <Tab
                eventKey="technicalData"
                title="Technical Data"
                className="w-100"
              >
                <div className="technical-data-section">
                  {productData.map((product, index) => (
                    <div key={index} className="product-section mb-3">
                      <h3
                        style={{
                          color: "#f28c00",
                          fontSize: "24px",
                          fontWeight: "bold",
                        }}
                      >
                        {product.model}
                      </h3>
                      <hr className="text-warning m-0" />
                      <Table striped hover variant="light" className="my-2">
                        <tbody>
                          {product.details.map((detail, idx) => {
                            const rowIdx = Math.floor(idx / 2);
                            const colIdx = idx % 2;

                            if (colIdx === 0) {
                              return (
                                <tr key={rowIdx}>
                                  <td style={{ width: "50%", padding: "10px" }}>
                                    <span
                                      style={{
                                        color: "#000",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      {detail.label}:
                                    </span>{" "}
                                    <span style={{ color: "#555" }}>
                                      {detail.value}
                                    </span>
                                  </td>
                                  {product.details[idx + 1] && (
                                    <td
                                      style={{ width: "50%", padding: "10px" }}
                                    >
                                      <span
                                        style={{
                                          color: "#000",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {product.details[idx + 1].label}:
                                      </span>{" "}
                                      <span style={{ color: "#555" }}>
                                        {product.details[idx + 1].value}
                                      </span>
                                    </td>
                                  )}
                                </tr>
                              );
                            }
                            return null; // Only the first detail of each pair will render the row
                          })}
                        </tbody>
                      </Table>
                    </div>
                  ))}
                </div>
              </Tab>

              <Tab eventKey="download" title="Download" className="w-100">
                <div className="mt-4 px-3 py-2 download-section">
                  <Row className="align-items-center justify-content-between">
                    <Col xs="auto" className="d-flex align-items-center">
                      <div className="download-icon-circle d-flex justify-content-center align-items-center">
                        <DocumentDownload size="24" variant="Bold" />
                      </div>
                      <a
                        href={product.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-3"
                      >
                        {getPdfFileName(product.pdf)}
                      </a>
                    </Col>
                    <Col xs="auto">
                      <a href={product.pdf} download>
                        <ArrowDown size="35" variant="Bold" color="#fbaf33" />
                      </a>
                    </Col>
                  </Row>
                </div>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </div>
      <ContactModal show={modalShow} handleClose={() => setModalShow(false)} />
    </>
  );
}

export default ProductDetail;
