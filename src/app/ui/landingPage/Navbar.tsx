"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      setIsSticky(currentScrollPosition > 0);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` py-4 md:px-8 px-4 bg-black z-10 ${
        isSticky ? "sticky top-0 right-0 left-0 bg-black" : ""
      } `}
    >
      <div className="flex items-center justify-between">
        <div className="font-bold tex-2xl cursor-pointer text-white">
          <Link href="/#home">Logo</Link>
        </div>

        {/* for lg devices */}

        <div className="lg:flex items-center gap-3 hidden text-slat-200 ">
          <Link
            href="/#home"
            className=" text-white block hover:text-gray-400 py-2 px-4"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-white block hover:text-gray-400 py-2 px-4"
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="text-white block hover:text-gray-400 py-2 px-4"
          >
            Skills
          </Link>
          <Link
            href="/#courses"
            className="text-white block hover:text-gray-400 py-2 px-4"
          >
            Courses
          </Link>
        </div>

        {/* btn */}

        <div className="lg:block hidden py-3">
          <button
            className=" px-4 py-1 border-slate-300 text-slate-300 bg-blue-950 hover:bg-blue-700 transition-all duration-300 rounded-md"
            onClick={() =>
              signIn("cognito", {
                callbackUrl: process.env.API_URL + "/api/auth/redirect",
              })
            }
          >
            login
          </button>

          {/* <button
            className=" mx-4 px-1 py-1 border-slate-300 text-slate-300 bg-blue-900 hover:bg-blue-600 transition-all duration-300 rounded-md"
            onClick={() =>
              (window.location.href =
                "https://mindswaplogin.auth.eu-central-1.amazoncognito.com/signup?client_id=3qn4vfitu65korf49pnrp1pt24&response_type=code&scope=email+openid+profile&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fcognito")
            }
          >
            Sign Up
          </button> */}
        </div>
        {/*menu btn for sm devices */}

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
          <Link
            href="/#home"
            className=" text-slate-300 block hover:text-gray-500 py-2 px-4"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-slate-300 block hover:text-gray-500 py-2 px-4"
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="text-slate-300 block hover:text-gray-500 py-2 px-4"
          >
            Skills
          </Link>
          <Link
            href="/#courses"
            className="text-slate-300 block hover:text-gray-500 py-2 px-4"
          >
            Courses
          </Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
