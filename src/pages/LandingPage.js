import React from "react";
import ProductList from "../components/ProductLists/ProductList";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import img from "../assets/La_Dolce.webp";
import fun from "../assets/Fun&Festire.webp"
import weddingShops from "../assets/WeddingBox.webp"
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <Header />
      <div className="my-28">
  <div className="text-center">
  <h3 className="text-2xl font-normal my-2">NEW ARRIVALS</h3>
  <Link to="/shop" class=" bg-transparent text-black p-1 border-2 text-xs">
                  VIEW ALL
                </Link>
  </div>
        <ProductList />
      </div>
      {/* La Dolce Vita */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <img
              src={img}
              alt="Description"
              className="col-span-6 w-full h-auto object-cover"
            />
          </div>
          <div className="col-span-6">
            <div className="p-6">
              <h2 className="col-span-6 text-2xl font-normal">La Dolce Vita</h2>
              <p className="col-span-6 py-4">
                For the past few years, us sisters had been dreaming of an
                Italian vacation together. We were always enamoured by the
                country’s stunning landscapes, pristine beaches and
                awe-inspiring history and culture. After months of planning, we
                visited Italy and we couldn’t be more thrilled!
                <br />
                <br />
                For this special trip, we wanted to pack with us some fun pair
                of sandals that were both versatile and comfortable to bring to
                Italy. And that is how the idea of our “La Dolce Vita”
                collection was born.
                <br />
                <br />
                We are so excited to introduce this collection to you, with the
                hope that it takes you on journeys unforgettable! ❤️
              </p>
              <button class=" bg-black text-white py-2 px-6 transition duration-300 hover:bg-gray-900">
                  Show More
                </button>
            </div>
          </div>
        </div>
      </div>


<div className="my-20">
<h3 className="text-2xl font-normal my-8 text-center">FESTIVE FAVOURITES</h3>
<ProductList/>

</div>


{/* Fun & Festire  */}
<Link to="/shop">
<img
              src={fun}
              alt="Description"
              className="col-span-6 w-full h-auto object-cover my-20"
            />
</Link>

{/* Wedding Shops */}
<div className="my-20 text-center">
  <h3 className="text-xl font-normal my-4">THE WEDDING SHOP</h3>
  <p className="text-sm italic">Beautiful jutti's in gorgeous packaging for your special day</p>
</div>
<div>
<Link to="/shop">
<img
              src={weddingShops}
              alt="Description"
              className="col-span-6 w-full h-auto object-cover"
            />
</Link>
</div>
      <Footer />
    </>
  );
};

export default LandingPage;
