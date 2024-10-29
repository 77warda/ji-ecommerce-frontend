import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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
  return (
    <footer className="border-t-2 border-b-2 border-gray-300 text-center lg:text-left">
      <div className="py-5 px-10">
        <div className="mx-6 pb-5 pt-3 text-center md:text-left">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {Object.entries(navigation).map(([section, links]) => (
              <div key={section}>
                <h5 className="uppercase tracking-widest mb-4 font-semibold text-dark">
                  {section}
                </h5>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.icon ? (
                        <a
                          href={link.href}
                          className="text-dark flex items-center space-x-2"
                        >
                          <link.icon className="h-5 w-5" />
                          <span>{link.name}</span>
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          className="tracking-wider font-light text-dark"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                  {section === "Join the Pastels and Pop Tribe" && (
                    <div className="">
                      <p className="tracking-wider font-light text-dark">
                        Get first dibs on new styles, promotions, events and
                        other magical updates right in your inbox.
                      </p>
                      <div className="mt-5 relative md:mb-6">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-transparent block w-full border-b-2 border-black py-1 px-3 text-dark focus:border-dark focus:outline-none placeholder:text-black sm:text-sm sm:leading-6 placeholder:font-light placeholder:tracking-wider placeholder:text-base"
                          placeholder="Enter your Email"
                        />

                        <button className="uppercase font-bold text-xs text-dark absolute right-0 top-[0.08rem] px-2 py-2">
                          SignUp
                        </button>
                      </div>
                    </div>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
