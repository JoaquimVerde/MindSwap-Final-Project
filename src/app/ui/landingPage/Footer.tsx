import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <Link className="hover:text-gray-900" href="#home">
          Home
        </Link>
        <Link className="hover:text-gray-900" href="#about">
          About
        </Link>
        <Link className="hover:text-gray-900" href="#skills">
          Skills
        </Link>
        <Link className="hover:text-gray-900" href="#courses">
          Courses
        </Link>
        <Link className="hover:text-gray-900" href="/faqs">
          FAQ
        </Link>
        <Link className="hover:text-gray-900" href="/contact">
          Contact
        </Link>
      </nav>

      <div className="flex justify-center space-x-5">
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt="/" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="/"  />
        </Link>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="/" />
        </Link>
        <Link
          href="https://messenger.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt="/" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="/" />
        </Link>
      </div>
      <p className="text-center text-gray-700 font-medium">
        &copy; 2024 Turma Midswap Ltd. All rights reservered.
      </p>
    </footer>
  );
}

export default Footer;
