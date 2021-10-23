import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Product = ({product}) => {
  return (
    <div className="product-wrap">
    <GatsbyImage image={product.featuredImage.gatsbyImageData} alt="thing"/>
    <h2>{product.title}</h2>
    <p>{product.description}</p>
    <button>Buy for {product.variants[0].price}</button>
  </div>
  )
};

export default Product;
