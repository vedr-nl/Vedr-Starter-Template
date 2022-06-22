import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NAV_ITEMS = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Over ons",
      href: "#",
    },
    {
      label: "Diensten",
      href: "#",
    },
    {
      label: "Contact",
      href: "#",
    },
  ];

  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img className="h-16 w-16" src="vedr-logo.png" alt="Workflow" />
            </div>
            {/* Navitems desktop */}
            <div className="hidden md:block">
              <div className="ml-10 flex-initial items-baseline space-x-4">
                {NAV_ITEMS.map((navItem, key) => (
                  <Link
                    key={key}
                    href={navItem.href}
                    className="transition fade-in-out text-black-300 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {navItem.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            /* Navitems desktop */
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {NAV_ITEMS.map((navItem, key) => (
                  <Link
                    key={key}
                    href={navItem.href}
                    className="text-black-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {navItem.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
