"use client";

import React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Logo from "@/icons/Logo";
import { Button } from "@/components/ui/button";
import SixdesignLogo from "@/icons/Sixdesign-logo";
import { NavigationMenuDemoz } from "./NavigationMenu";

const menuItems = [
  {
    name: <NavigationMenuDemoz />,
    href: "#",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-opacity-1 sticky top-0 z-10 w-full bg-white drop-shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="inline-flex items-center space-x-2">
            <span>
              <SixdesignLogo size="sm" />
            </span>
          </div>
          <div className="hidden grow items-start lg:flex lg:pl-60">
            <ul className="ml-12 inline-flex space-x-8">
              {menuItems.map((item, index) => (
                <li key={index} className="text-lg text-black">
                  <Link
                    href={item.href}
                    className="group relative inline-flex items-center text-lg text-black"
                  >
                    {item.name}
                    <div className="absolute bottom-0 left-0 h-1 w-full origin-bottom scale-x-0 transform bg-black" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden space-x-2 lg:block">
          <Link href="/contact">
            <Button
              type="button"
              variant="outline"
              className="rounded-3xl bg-primary px-6 py-4 font-medium text-white hover:border-red-500 hover:bg-red-500/10 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              +977-9866134804
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform bg-white transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-slate-200 pt-2 shadow-lg ring-1 ring-black ring-opacity-20">
              <div className="px-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <Logo />
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="relative flex list-none items-center justify-center font-semibold text-gray-800 hover:text-gray-900"
                      >
                        <Link
                          href={item.href}
                          className="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
                        >
                          {item.name}
                          <div className="absolute bottom-0 left-0 h-2 w-full bg-black " />
                        </Link>
                      </li>
                    ))}
                  </nav>
                </div>
                <div className="mt-2 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    +977-9866134804
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
