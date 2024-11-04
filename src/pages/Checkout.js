import React from "react";

function Checkout() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full bg-white shadow-lg rounded-lg flex">
        {/* Form Section */}
        <div className="w-3/5 p-8 border-r border-gray-300">
          {/* Contact Section */}
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <div className="flex items-center mb-8">
            <input type="checkbox" id="news-offers" className="mr-2" />
            <label htmlFor="news-offers" className="text-gray-600 text-sm">
              Email me with news and offers
            </label>
          </div>

          {/* Delivery Section */}
          <h2 className="text-lg font-semibold mb-4">Delivery</h2>
          <select
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg text-gray-700"
            defaultValue="India"
          >
            <option value="India">India</option>
            {/* Additional countries can be added */}
          </select>
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="State"
              className="w-1/4 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="PIN code"
              className="w-1/4 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <div className="flex items-center mb-8">
            <input type="checkbox" id="save-info" className="mr-2" />
            <label htmlFor="save-info" className="text-gray-600 text-sm">
              Save this information for next time
            </label>
          </div>

          {/* Shipping Method */}
          <h2 className="text-lg font-semibold mb-4">Shipping method</h2>
          <div className="w-full p-2 border border-gray-300 rounded-lg text-gray-500">
            Enter your shipping address to view available shipping methods.
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="w-2/5 p-8 bg-white shadow-lg rounded-lg">
          {/* Order Items */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-start gap-4">
                <img
                  src="siena-image.jpg"
                  alt="Siena"
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">Siena</p>
                  <p className="text-xs text-gray-500">35</p>
                </div>
              </div>
              <span className="text-gray-700 font-medium">₹3,290.00</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <img
                  src="celebration-image.jpg"
                  alt="CELEBRATION"
                  className="w-12 h-12 rounded-md object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-gray-700">
                    CELEBRATION : Pastels and Pop X Anushree Reddy
                  </p>
                  <p className="text-xs text-gray-500">36</p>
                </div>
              </div>
              <span className="text-gray-700 font-medium">₹4,490.00</span>
            </div>
          </div>

          {/* Discount Code */}
          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="Discount code or gift card"
              className="w-full p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-200"
            />
            <button className="bg-gray-200 px-4 py-2 text-gray-700 font-medium border border-gray-300 rounded-r-md">
              Apply
            </button>
          </div>

          {/* Subtotal and Shipping */}
          <div className="mb-2 flex justify-between text-sm font-medium text-gray-700">
            <span>Subtotal · 2 items</span>
            <span>₹7,780.00</span>
          </div>
          <div className="mb-6 flex justify-between text-sm font-medium text-gray-700">
            <span>Shipping</span>
            <span className="text-gray-500">Enter shipping address</span>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mb-2 text-lg font-semibold text-gray-800">
            <span>Total</span>
            <div className="text-right">
              <span className="block text-xs text-gray-500">INR</span>
              <span className="text-2xl">₹7,780.00</span>
            </div>
          </div>
          <p className="text-xs text-gray-500">Including ₹1,186.78 in taxes</p>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
