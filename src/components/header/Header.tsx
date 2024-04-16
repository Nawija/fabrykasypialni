"use client";
import { NAVLINKS } from "@/constants/Links";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuBurger from "./MenuBurger";

import { FaSearch } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import Logo from "../../../public/logo.png";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  function handleCloseMenu() {
    setShowMenu(false);
  }

  return (
    <>
      <header
        className={`z-[999] w-full text-black transition-colors duration-300 overflow-x-hidden ${
          showMenu ? "bg-black/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="z-50 mx-auto flex max-w-[1600px] items-center justify-between px-7 py-3">
          <div className="flex items-center justify-center space-x-4">
            <Link href="/">
              <Image src={Logo} alt="Fabryka Sypialni Logo" height={100} />
            </Link>
            <div className="flex flex-col items-start justify-center text-lg">
              <Link
                href="tel:223492851"
                className="flex items-center justify-center text-color"
              >
                <FaPhoneVolume className="text-xl" />{" "}
                <p className="pl-2">22 349 28 51</p>
              </Link>
              <Link
                href="mailto:sklep@fabrykasypialni.pl"
                className="flex items-center justify-center"
              >
                <MdOutlineMailOutline className="text-xl" />
                <p className="pl-2">sklep@fabrykasypialni.pl</p>
              </Link>
            </div>
            <div className="relative grow">
              <input
                placeholder="Szukaj produktu"
                className="w-full border border-color/10 p-2 text-sm"
              />
              <FaSearch className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-1/2 text-color" />
            </div>
          </div>

          <div></div>
          <MenuBurger handleShowMenu={handleShowMenu} showMenu={showMenu} />
        </div>
      </header>
      <nav className="sticky top-0 z-[999] bg-[#53236E] text-white">
        <ul className="mx-auto mb-6 flex w-full max-w-screen-2xl items-center justify-start space-x-6 px-2 py-4">
          {NAVLINKS.map((link) => (
            <li
              key={link.label}
              onClick={handleCloseMenu}
              className={`cursor-pointer capitalize transition-all duration-300 hover:text-stone-400 ${showMenu ? "opacity-100" : "opacity-0 lg:opacity-100"}`}
            >
              <Link href={link.href} className="p-1">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
