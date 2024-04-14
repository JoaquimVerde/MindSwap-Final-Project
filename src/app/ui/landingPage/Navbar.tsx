"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    console.log("Current Scroll Position:", currentScrollPos);
    setIsMenuOpen(false);
    setIsSticky(
      (prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
        currentScrollPos < 1
    );
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={` py-4 md:px-8 px-4 bg-black z-10 ${
        isSticky ? "sticky top-0 right-0 left-0 bg-black" : ""
      } `}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold tex-2xl cursor-pointer text-white">
          <Link href="/#home">
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          </Link>
        </div>

        <div className="lg:flex items-center gap-3 hidden text-slat-200 ">
          <Link href="/#about" className="text-white block hover:font-bold">
            About
          </Link>
          <Link href="/#skills" className="text-white block hover:font-bold">
            Skills
          </Link>
          <Link href="/#courses" className="text-white block hover:font-bold">
            Courses
          </Link>
        </div>

        {/* btn */}

        <div className="lg:block hidden py-3">
          <button
            className=" px-4 py-1 border-slate-300 text-slate-300 bg-secondary hover:bg-primary transition-all duration-300 rounded-md"
            onClick={() =>
              signIn("cognito", {
                callbackUrl: "http://localhost:3000/api/auth/redirect",
              })
            }
          >
            Login
          </button>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden text-slate-300 text-3xl"
          title="Toggle Menu"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* nav items for sm devices */}

      {isMenuOpen && (
        <div className="mt-4 bg-slate-950 text-slate-300 rounded py-4">
          <Link href="/#about" className="text-slate-300 block hover:font-bold">
            About
          </Link>
          <Link
            href="/#skills"
            className="text-slate-300 block hover:font-bold"
          >
            Skills
          </Link>
          <Link
            href="/#courses"
            className="text-slate-300 block hover:font-bold"
          >
            Courses
          </Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
