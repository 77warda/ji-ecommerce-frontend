import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { BsHeart } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us ", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Deals", href: "/deals" },
  { name: "contact us", href: "/" },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="px-5 py-5">
      <div className="px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Sports Hub</span>
              <img className="h-8" src={Logo} alt="logo" />
            </Link>
            <p className="px-3 font-bold uppercase text-xl text-[#432818]">
              Sports Hub
            </p>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="px-4 py-1 text-sm font-semibold leading-6 text-[#432818] hover:bg-[#a48971] hover:text-white "
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="mx-1.5 rounded-full bg-[#a48971] h-7 w-7 flex justify-center items-center text-[#ede0d4] hover:bg-opacity-95 border-0 text-1xl">
              <BsHeart className="fill-[#ede0d4]" />
            </button>
            <Link
              to="/cart"
              className="text-sm font-semibold leading-6 text-gray-900 relative"
            >
              <button className="relative mx-1.5 rounded-full bg-[#a48971] h-7 w-7 flex justify-center items-center text-[#ede0d4] hover:bg-opacity-95 border-0 ">
                <ShoppingCartIcon className="h-5 w-5 inline-block" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-[#432818] text-[#ede0d4] rounded-full px-1 text-xs">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </Link>
            <button className="mx-1.5 rounded-full bg-[#a48971] h-7 w-7 flex justify-center items-center text-[#ede0d4] hover:bg-opacity-95 border-0 text-[1.1rem]">
              <BiUser className="stroke-1.5" />
            </button>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel
            focus="true"
            className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Sports Hub</span>
                <img
                  className="h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {/* <div className="py-6">
                  <Link
                    to="/cart"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                  >
                    Cart
                  </Link>
                </div> */}
                <div className="py-6 flex justify-start">
                  <button className="mx-1.5 rounded-full bg-[#a48971] h-7 w-7 flex justify-center items-center text-[#ede0d4] hover:bg-opacity-95 border-0 text-1xl">
                    <BsHeart className="fill-[#ede0d4]" />
                  </button>
                  <Link
                    to="/cart"
                    className="text-sm font-semibold leading-6 text-gray-900 relative"
                  >
                    <button className="relative mx-1.5 rounded-full bg-[#a48971] h-7 w-7 flex justify-center items-center text-[#ede0d4] hover:bg-opacity-95 border-0 ">
                      <ShoppingCartIcon className="h-5 w-5 inline-block" />
                      {cartItems.length > 0 && (
                        <span className="absolute -top-1 -right-2 bg-[#432818] text-[#ede0d4] rounded-full px-1 text-xs">
                          {cartItems.length}
                        </span>
                      )}
                    </button>
                  </Link>
                  <button className="mx-1.5 rounded-full bg-[#a48971] h-7 w-7 flex justify-center items-center text-[#ede0d4] hover:bg-opacity-95 border-0 text-[1.1rem]">
                    <BiUser className="stroke-1.5" />
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  );
}
export default Header;
