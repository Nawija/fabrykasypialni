"use client";
import { NAVLINKS } from "@/constants/Links";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuBurger from "./MenuBurger";

import { FaPhoneVolume } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlBasket } from "react-icons/sl";
import Logo from "../../../public/logo.png";
import SearchBar from "./SearchBar";

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
        className={` z-[999] w-full bg-white text-black transition-colors duration-300`}
      >
        <div className="z-50 mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between px-7 py-3 lg:flex-row">
          <div className="z-50 flex items-center justify-center space-x-4">
            <Link href="/" className="z-50">
              <Image
                src={Logo}
                alt="Fabryka Sypialni Logo"
                height={70}
                className="z-50"
              />
            </Link>
            <div className=" hidden flex-col items-start justify-center text-lg lg:flex">
              <Link
                href="tel:223492851"
                className="flex items-center justify-center text-color transition-colors hover:text-stone-400"
              >
                <FaPhoneVolume className="text-xl" />{" "}
                <p className="pl-2">22 349 28 51</p>
              </Link>
              <Link
                href="mailto:sklep@fabrykasypialni.pl"
                className="flex items-center justify-center text-color transition-colors hover:text-stone-400"
              >
                <MdOutlineMailOutline className="text-xl " />
                <p className="pl-2">sklep@fabrykasypialni.pl</p>
              </Link>
            </div>
          </div>
          <SearchBar />

          <div className="flex space-x-4">
            <Link
              href="/"
              className="flex items-center justify-center text-color transition-colors hover:text-stone-400"
            >
              <RiLockPasswordLine className="text-xl" />{" "}
              <p className="hidden pl-2 lg:block">Zaloguj się</p>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center text-color transition-colors hover:text-stone-400"
            >
              <FiHeart className="text-xl" />{" "}
              <p className="hidden pl-2 lg:block">Ulubione</p>
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center text-color transition-colors hover:text-stone-400"
            >
              <SlBasket className="text-xl" />{" "}
              <p className="hidden pl-2 lg:block">Koszyk</p>
            </Link>
            <MenuBurger handleShowMenu={handleShowMenu} showMenu={showMenu} />
          </div>
        </div>
      </header>
      <nav
        className={`fixed left-0 top-0 z-10 h-screen w-full bg-[#53236E] text-white transition-transform lg:sticky lg:top-0 lg:h-auto lg:w-auto lg:translate-x-0 ${showMenu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="mx-auto flex h-full w-1/2 max-w-screen-2xl flex-col items-start justify-center space-y-4 px-2 py-4 text-lg font-semibold lg:w-auto lg:flex-none lg:flex-row lg:justify-start lg:space-x-6 lg:space-y-0 lg:text-base lg:font-medium">
          {NAVLINKS.map((link) => (
            <li
              key={link.label}
              onClick={handleCloseMenu}
              className={`cursor-pointer capitalize transition-all hover:text-stone-400 ${showMenu ? "opacity-100" : "opacity-0 lg:opacity-100"}`}
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
