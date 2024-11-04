import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

const items = [
  {
    name: "SIENA",
    size: "35",
    price: 54.09,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "MONTE",
    size: "40",
    price: 64.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "MONTE",
    size: "40",
    price: 64.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "MONTE",
    size: "40",
    price: 64.99,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More items...
];

const Cart = () => {
  return (
    <>
      <Header />
      <div className="pt-[100px] container mx-auto px-5 lg:px-3 md:px-3 p-6">
        <h1 className="text-3xl font-semibold text-center mb-2">Cart</h1>
        <p className="text-center text-sm text-gray-500 underline mb-6 cursor-pointer">
          Continue shopping
        </p>

        {/* Desktop Cart */}
        <div className="hidden lg:block md:block px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-top sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th className="py-3.5 pl-4 pr-3 text-left text-sm font-normal text-black sm:pl-0">
                        Item
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-normal text-black">
                        Price
                      </th>
                      <th className="px-3 py-3.5 text-left text-sm font-normal text-black">
                        Quantity
                      </th>
                      <th className="px-3 py-3.5 text-right text-sm font-normal text-black">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {items.map((item, index) => (
                      <tr key={index} className="align-top">
                        <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0 align-top">
                          <div className="flex items-start">
                            <div className="w-36 h-44 flex-shrink-0">
                              <img
                                alt={item.name}
                                src={item.image}
                                className="w-full h-full object-cover mr-5 lg:mr-2 mb-4"
                              />
                            </div>
                            <div className="ml-4">
                              <h2 className="text-sm font-light text-black">
                                {item.name}
                              </h2>
                              <p className="text-xs font-light text-black">
                                Size: {item.size}
                              </p>
                              <button className="uppercase mt-2 font-light text-xs border border-opacity-60 px-2 py-1">
                                Remove
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 align-top">
                          <p className="text-xs font-normal text-black">
                            ${item.price.toFixed(2)}
                          </p>
                        </td>
                        <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 align-top">
                          <input
                            type="number"
                            defaultValue={item.quantity}
                            className="ring-opacity-60 p-3 w-16 block border-0 py-1.5 text-gray-900 ring-1 outline-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-500 sm:text-sm/6"
                          />
                        </td>
                        <td className="text-right whitespace-nowrap px-3 py-5 text-sm align-top">
                          <p className="text-xs font-normal text-black">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Cart */}
        <div className="block lg:hidden md:hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 py-5 flex items-start"
            >
              <div className="w-44 h-60 flex-shrink-0">
                <img
                  alt={item.name}
                  src={item.image}
                  className="w-full h-full object-cover mr-5 lg:mr-2 mb-4"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-base font-light text-black">{item.name}</h2>
                <p className="mt-2 text-sm font-light text-black">
                  Size: {item.size}
                </p>
                <p className="mt-2 text-sm font-light text-black">
                  Price: ${item.price.toFixed(2)}
                </p>
                <div className="mt-2">
                  <span className="text-sm font-light text-black">QTY: </span>
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    className="ring-opacity-60 p-3 w-16 border-0 py-1 text-gray-900 ring-1 outline-0 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-500 text-sm"
                  />
                </div>
                <p className="mt-2 text-sm font-light text-black">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button className="mt-2 uppercase font-light text-xs border-b border-gray-700 border-opacity-60 pt-1">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =====Rest of the code ===========  */}
        <div className="border-0 md:border-t md:border-gray-300 lg:border-t lg:border-gray-300 pt-5 flex flex-col md:flex-row lg:flex-row items-start justify-between">
          <div className="space-y-2 mb-6">
            <label className="flex items-center text-xs text-gray-600 tracking-wide uppercase">
              <input type="checkbox" className="mr-2" /> Gift Wrap $0.99
            </label>
            <label className="flex items-center text-xs text-gray-600 tracking-wide uppercase">
              <input type="checkbox" className="mr-2" /> Add a Greeting Card
              (Free)
            </label>
          </div>

          {/* Subtotal and Buttons */}
          <div className="mb-6">
            <div className="text-center lg:text-left">
              <div className="mb-4 flex items-center justify-between font-semibold text-xl">
                <p className="text-gray-800 text-sm uppercase font-semibold">
                  SUBTOTAL:
                </p>
                <span className="text-gray-800 text-sm font-semibold">
                  $127.92
                </span>
              </div>
              <p className="text-right my-3 text-xs text-gray-600">
                Shipping, taxes, and discounts codes calculated at checkout.
                <br />
                Orders will be processed in INR.
              </p>
            </div>
            <div className="flex space-x-2 mt-4 lg:mt-0">
              <button className="py-2 px-4 border border-gray-300 uppercase text-xs tracking-wide border-opacity-60 ">
                Continue Shopping
              </button>
              <button className="py-2 px-4 border border-gray-300 uppercase text-xs tracking-wide border-opacity-60 ">
                Update Cart
              </button>
              <button className="py-2 px-4 uppercase text-xs tracking-wide bg-black text-white ">
                Check Out
              </button>
            </div>
          </div>
        </div>
        {/* Information Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center bg-gray-200 bg-opacity-40 p-6">
          <div className="lg:border-r lg:border-b-0 border-b border-gray-600 p-4">
            <h3 className="font-normal tracking-wide text-black">
              FREE SHIPPING
            </h3>
            <p className="text-sm text-gray-700">
              We offer free shipping on all prepaid orders in India when you
              spend Rs 1500. <Link className="underline italic">Details</Link>
            </p>
          </div>
          <div className="lg:border-r lg:border-b-0 border-b border-gray-600 p-4">
            <h3 className="font-normal tracking-wide text-black">
              EASY EXCHANGE
            </h3>
            <p className="text-sm text-gray-700">
              Easily return your purchase by mail to exchange for a different
              size or style. <Link className="underline italic">Details</Link>
            </p>
          </div>
          <div className="p-4">
            <h3 className="font-normal tracking-wide text-black">
              SECURE PAYMENT
            </h3>
            <p className="text-sm text-gray-700">
              We offer safe and secure payment options for Visa and MasterCard.{" "}
              <Link className="underline italic">Details</Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
