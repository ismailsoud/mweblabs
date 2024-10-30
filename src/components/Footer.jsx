import React from "react";

export default function Footer() {
  return (
    <footer className="bg-backGround text-white border-t border-slate-500 ">
      <div className="px-4 lg:px-36 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-xl font-[600]">
              <p>
                <span className="text-purple-700">M</span>.WEBLABS
              </p>
            </div>
            <p className="text-slate-300 font-extralight">
              Transforming ideas into exceptional web experiences. Your vision,
              our expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 font-extralight">
              <li>
                <a href="./home" className="hover:text-purple-700">
                  Home
                </a>
              </li>
              <li>
                <a href="./projects" className="hover:text-purple-700">
                  Projects
                </a>
              </li>
              <li>
                <a href="./about" className="hover:text-purple-700">
                  About
                </a>
              </li>
              <li>
                <a href="./contact" className="hover:text-purple-700">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 font-extralight">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>E-commerce Solutions</li>
              <li>Custom Web Applications</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2 font-extralight">
              <p>Email: contact@mweblabs.com</p>
              <p>Phone: +212 622 23 25 04</p>
              <div>
                <button className="bg-purple-900 hover:bg-purple-800 transition-colors duration-200 text-slate-200 w-36 h-12 rounded-full mt-4">
                  GET IN TOUCH
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-500 flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 font-extralight">
          <p className="text-slate-300">
            © 2069 <span className="text-purple-700">M.</span>WEBLABS | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
