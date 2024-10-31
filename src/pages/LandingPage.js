import React from "react";
import Cola from "../assets/Cola.webp"
function LandingPage() {
    const products = [
      {
        image: Cola,
        title: "Gold Dust",
        msrp: "57.99",
        salePrice: "44.88"
      },
      {
        image: Cola,
        title: "Gold Dust",
        msrp: "57.99",
        salePrice: "44.88"
      },
      {
        image: Cola,
        title: "Gold Dust",
        msrp: "57.99",
        salePrice: "44.88"
      },
      {
        image: Cola,
        title: "Gold Dust",
        msrp: "57.99",
        salePrice: "44.88"
      },
      {
        image: Cola,
        title: "Gold Dust",
        msrp: "57.99",
        salePrice: "44.88"
      },
    ];
  
    return (
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              msrp={product.msrp}
              salePrice={product.salePrice}
            />
          ))}
        </div>
      </div>
    );
  }
  
  function ProductCard({ image, title, msrp, salePrice }) {
    return (
      <div className="text-center">
        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-0 ">
            <span className="bg-black text-white text-sm px-2 py-1 ">Sale!</span>
          </div>
          <img src={image} className="w-full h-48 object-cover" alt={title} />
          <div className="p-4">
            <h5>{title}</h5>
            <p className="text-sm flex justify-center items-center">
              <span className="line-through text-gray-500 mr-2">Rs {msrp}</span>
              <span>Rs {salePrice}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  

export default LandingPage;
