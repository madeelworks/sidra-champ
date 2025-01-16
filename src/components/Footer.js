import React from "react";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; // Adjust offset based on your header height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-black to-black text-white">
      <div className="mx-auto w-full max-w-screen-xl p-6 py-8">
        <div className="md:flex md:justify-between">
          {/* Logo Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Syeda Sidra
            </h1>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Resources
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <HashLink
                    to="/#home"
                    className="hover:text-blue-400 transition duration-300"
                    scroll={scrollWithOffset}
                  >
                    Home
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/#about"
                    className="hover:text-blue-400 transition duration-300"
                    scroll={scrollWithOffset}
                  >
                    About
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Follow us
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/syedsidrabatool"
                    className="hover:text-blue-400 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.threads.net/@syedsidrabatool"
                    className="hover:text-blue-400 transition duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Threads
                  </a>
                </li>
              </ul>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Achievements
              </h2>
              <ul className="text-gray-300 font-medium">
                <li className="mb-4">
                  <HashLink
                    to="/achievements#national"
                    className="hover:text-blue-400 transition duration-300"
                    scroll={scrollWithOffset}
                  >
                    National
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/achievements#international"
                    className="hover:text-blue-400 transition duration-300"
                    scroll={scrollWithOffset}
                  >
                    International
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            &copy; 2024 Syeda Sidra. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
