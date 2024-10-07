import React from "react";
import Sidebar from "./Product Sidebar/Sidebar";
import List from "./Product List/List";
import { Route, Routes, useParams } from "react-router";
import ProductDetail from "./Product Detail/ProductDetail";

function ProductMain() {

  const { productId } = useParams();

  return (
    <div className="container p-4">
      <div className="row">
        <Sidebar />
        {productId ? <ProductDetail /> : <List />}
      </div>
    </div>
  );
}

export default ProductMain;
