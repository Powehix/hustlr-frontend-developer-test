import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProductCard({ product, onAddToCart }) {
  const { title, price, image, description, rating } = product;

  const inStock = rating?.count > 0;

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />

      <div className="product-body">
        <h3 className="product-title">{title}</h3>
        <p className="product-desc">
          {description.length > 80
            ? description.substring(0, 80) + "..."
            : description}
        </p>
        <p className="product-price">${price}</p>

        <select className="product-variants">
          <option>Default</option>
          <option>Variant 1</option>
          <option>Variant 2</option>
        </select>

        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="btn btn-outline-dark">
            View
          </Link>
          {inStock ? (
            <button
              className="btn btn-dark"
              onClick={() => {
                toast.success("Added to cart");
                onAddToCart(product);
              }}
            >
              Add to Cart
            </button>
          ) : (
            <button className="btn btn-secondary" disabled>
              Out of Stock
            </button>
          )}
        </div>
      </div>
    </div>
  );
}