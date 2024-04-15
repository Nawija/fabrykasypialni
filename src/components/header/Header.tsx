"use client";
import { NAVLINKS } from "@/constants/Links";
import { raleway } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MenuBurger from "./MenuBurger";

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
        className={`${raleway.className} z-[999] w-full text-white transition-colors duration-300 ${
          showMenu ? "bg-black/80 backdrop-blur-md" : ""
        }`}
      >
        <div className="z-50 mx-auto flex max-w-[1600px] items-center justify-between px-7 py-3">
          <Link href="/">
            <Image src={Logo} alt="Fabryka Sypialni Logo" height={77} />
          </Link>
          <MenuBurger handleShowMenu={handleShowMenu} showMenu={showMenu} />
        </div>
      </header>
      <nav className="sticky top-0 bg-[#53236E] text-white z-[999]">
        <ul className="mx-auto mb-6 flex w-full max-w-screen-2xl items-center justify-start space-x-6 px-2 py-4">
          {NAVLINKS.map((link) => (
            <li
              key={link.label}
              onClick={handleCloseMenu}
              className={`cursor-pointer capitalize transition-all duration-300 hover:text-gray-400 ${showMenu ? "opacity-100" : "opacity-0 lg:opacity-100"}`}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
