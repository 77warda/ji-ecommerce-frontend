import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const navigation = {
  "About Us": [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  "Get Help": [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  "Reach Us": [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  Policies: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  "Join the Pastels and Pop Tribe": [
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       {/* Facebook SVG path */}
    //     </svg>
    //   ),
    // },
    // other social links...
    {
      description:
        "Get first dibs on new styles, promotions, events and other magical updates right in your inbox.",
      emailPlaceholder: "you@example.com",
      buttonText: "SignUp",
    },
  ],
};

function Footer() {
  const [inputValue, setInputValue] = useState("");

  // Handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <footer className="border-t border-gray-300 lg:text-left">
      <div className="py-5 px-1 lg:px-10 md:px-10">
        <div className="mx-6 pb-5 pt-3">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {Object.entries(navigation).map(([section, links]) => (
              <div key={section}>
                <h5 className="text-sm uppercase tracking-widest mb-4 font-semibold text-dark">
                  {section}
                </h5>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.icon ? (
                        <a
                          href={link.href}
                          className="text-dark text-sm flex items-center space-x-2"
                        >
                          <link.icon className="h-5 w-5" />
                          <span>{link.name}</span>
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm tracking-wider font-normal text-dark"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                  {section === "Join the Pastels and Pop Tribe" && (
                    <div className="">
                      <p className="text-sm tracking-wider font-normal text-dark">
                        Get first dibs on new styles, promotions, events and
                        other magical updates right in your inbox.
                      </p>
                      <div className="mt-5 relative md:mb-6">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={inputValue}
                          onChange={handleInputChange}
                          className="text-sm bg-transparent block w-full border-b-2 border-black py-1 px-3 text-dark focus:border-dark focus:outline-none placeholder:text-black sm:text-sm sm:leading-6 placeholder:font-normal placeholder:tracking-wider placeholder:text-sm"
                          placeholder="Enter your Email"
                        />

                        <button className="font-semibold text-sm text-dark absolute right-0 top-[0.08rem] px-2 py-2">
                          {inputValue ? (
                            "Subscribe"
                          ) : (
                            <TfiEmail className="text-xl" />
                          )}
                        </button>
                      </div>
                      <div className="mt-5 lg:mt-2 md:mt-2 flex space-x-4">
                        {" "}
                        {/* Flexbox container with spacing */}
                        <Link
                          to="/facebook"
                          className="text-black hover:text-blue-600"
                        >
                          <FaFacebookF size={26} />
                        </Link>
                        <Link
                          to="/twitter"
                          className="text-black hover:text-blue-400"
                        >
                          <FaTwitter size={26} />
                        </Link>
                        <Link
                          to="/instagram"
                          className="text-black hover:text-pink-500"
                        >
                          <FaInstagram size={26} />
                        </Link>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed right-12 bottom-12">
        <a
          href="https://wa.me/923223445065"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500"
        >
          <p className="text-white rounded-full h-20 w-20 flex items-center justify-center bg-green-500">
            <FaWhatsapp size={55} />
          </p>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
