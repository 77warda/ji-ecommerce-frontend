import React, { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaAngleDown, FaTruck, FaAngleUp } from "react-icons/fa";
import GalleryImages from "../components/GalleryImages";
import { Link } from "react-router-dom";
import { LiaBullhornSolid } from "react-icons/lia";
import { TfiAngleDown, TfiAngleUp } from "react-icons/tfi";

function Shop() {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <>
      <Header />
      <div className="pt-[100px] container mx-auto px-5 lg:px-3 md:px-3">
        <h1 className="my-5 flex items-center font-light text-sm">
          Home
          <MdKeyboardArrowRight />
          Sandals <MdKeyboardArrowRight /> Seina
        </h1>
        <div className="my-10 grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6">
            <GalleryImages />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div class="mx-auto p-6 space-y-4">
              {/* <!-- Product Title and Price --> */}
              <div class="space-y-1">
                <h1 class="text-xl font-light">Siena</h1>
                <div class="flex space-x-2 text-gray-500">
                  <span class="line-through text-sm">$61.06</span>
                  <span class="text-sm font-normal text-gray-800">$54.44</span>
                </div>
              </div>

              {/* <!-- Divider --> */}
              <hr class="border-gray-300" />

              {/* <!-- Size Selection --> */}
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <span class="font-semibold text-gray-800">Size</span>
                  <a href="#" class="text-sm text-gray-500 underline">
                    Size Chart
                  </a>
                </div>
                <div class="grid grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
                  <button class="w-10 h-10 border border-gray-300 bg-black text-white">
                    35
                  </button>
                  <button class="w-10 h-10 border border-gray-300">36</button>
                  <button class="w-10 h-10 border border-gray-300">37</button>
                  <button class="w-10 h-10 border border-gray-300">38</button>
                  <button class="w-10 h-10 border border-gray-300">39</button>
                  <button class="w-10 h-10 border border-gray-300">40</button>
                  <button class="w-10 h-10 border border-gray-300">41</button>
                  <button class="w-10 h-10 border border-gray-300">42</button>
                </div>
              </div>

              {/* <!-- Quantity Selection --> */}
              <div class="space-y-2">
                <label class="font-semibold text-gray-800">Quantity</label>
                <div class="w-28 flex items-center border border-gray-300">
                  <button class="hover:bg-gray-100 w-10 h-10 text-gray-500">
                    -
                  </button>
                  <span class="w-10 h-10 flex items-center justify-center border-l border-r border-gray-300">
                    1
                  </span>
                  <button class="hover:bg-gray-100 w-10 h-10 text-gray-500">
                    +
                  </button>
                </div>
              </div>

              {/* <!-- Additional Option --> */}
              <div class="flex items-center space-x-2">
                <input type="checkbox" class="text-gray-800" />
                <label class="text-gray-800">Add Monogram Bag +</label>
              </div>

              {/* <!-- Buttons --> */}
              <div class="flex space-x-4">
                <button class="flex-1 bg-black text-white py-3">
                  Add to Cart
                </button>
                <button class="flex-1 bg-black text-white py-3">
                  Buy It Now
                </button>
              </div>

              {/* <!-- Product Description --> */}
              <div class="text-gray-700">
                <p>
                  Immerse yourself in the rustic allure of Siena with our
                  Bohemian Sandals, featuring cloud-like cushioning for
                  unparalleled comfort.
                </p>
                <a href="#" class="text-gray-500 underline text-sm">
                  Read more
                </a>
              </div>

              {/* <!-- Shipping Info --> */}
              <div class="flex items-center space-x-4 border border-gray-300 bg-gray-100 p-4 text-gray-700">
                <FaTruck className="text-black" size={20} />
                <span>Estimated Shipping Time (5-7 working days)</span>
              </div>
              <div className="border border-gray-400 group">
                <div className="py-2">
                  <button
                    className="w-full flex justify-between items-center text-left focus:outline-none"
                    onClick={toggleAccordion}
                  >
                    <span className="uppercase p-1.5 ml-3 text-xs font-light text-gray-700">
                      CARE and PACKAGING
                    </span>
                    <span className="pr-5 mt-0.5 ml-2 text-gray-800 text-lg group-hover:text-gray-800">
                      {open ? <TfiAngleUp /> : <TfiAngleDown />}
                    </span>
                  </button>
                </div>
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    open ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="py-2 mx-4 group-hover:bg-transparent">
                    <div className="py-1 px-4">
                      <Link
                        to="/campaigns/add"
                        className="text-sm font-medium text-gray-600 px-3"
                      >
                        Add Campaigns
                      </Link>
                    </div>
                    <div className="py-1 px-4">
                      <Link
                        to="/campaigns"
                        className="text-sm font-medium text-gray-600 px-3"
                      >
                        Campaigns
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
