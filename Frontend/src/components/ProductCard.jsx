import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal";

export const ProductCard = ({
  productId,
  productName,
  image,
  description,
  quantity,
  price,
  discount,
  specialPrice,
}) => {
  const [openProductViewModal, setOpenProductViewModal] = useState(false);
  const btnLoader = false;
  const [selectedViewProduct, setSelectedViewProduct] = useState("");
  const isAvailabele = quantity && Number(quantity) > 0;

  const handleProdictView = (product) => {
    setSelectedViewProduct(product);
    setOpenProductViewModal(true);
  };
  return (
    <div className="border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
      <div
        onClick={() => {
          handleProdictView({
            id: productId,
            productName,
            image,
            description,
            quantity,
            price,
            discount,
            specialPrice,
          });
        }}
        className="w-full overflow-hidden aspect-3/2"
      >
        <img
          src={image}
          alt={productName}
          className="w-full h-full cursor-pointer transition-transform duration-300 transform hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h2
          onClick={() => {
            handleProdictView({
              id: productId,
              productName,
              image,
              description,
              quantity,
              price,
              discount,
              specialPrice,
            });
          }}
          className="text-lg font-semibold mb-2 cursor-pointer"
        >
          {productName}
        </h2>
        <div className="min-h-20 max-h-20">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="flex items-center justify-between">
          {specialPrice ? (
            <div className="flex flex-col">
              <span className="text-gray-400 line-through">
                ${Number(price).toFixed(2)}
              </span>
              <span className="text-xl font-bold text-slate-700">
                ${Number(specialPrice).toFixed(2)}
              </span>
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-700">
                {"  "}${Number(price).toFixed(2)}
              </span>
            </div>
          )}
          <button
            disabled={!isAvailabele || btnLoader}
            onClick={() => {}}
            className={`w-36 flex items-center justify-center rounded-lg py-2 px-3 text-white transition-colors duration-300
              ${isAvailabele ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-500 opacity-70"}`}
          >
            <FaShoppingCart className="mr-2" />
            {isAvailabele ? "Add to Cart" : "Stock Out"}
          </button>
        </div>
      </div>
      <ProductViewModal
        open={openProductViewModal}
        setOpen={setOpenProductViewModal}
        product={selectedViewProduct}
        isAvailabele={isAvailabele}
      />
    </div>
  );
};
