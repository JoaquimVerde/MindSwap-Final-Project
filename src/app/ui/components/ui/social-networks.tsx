import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const SocialNetworks = () => {
  return (
    <section className="mb-8">
    <h2 className="text-xl font-semibold mb-4">Connect With Us</h2>
    <ul className="flex space-x-4">
      <li className="mb-2">
        <Link href="https://www.facebook.com/minderasoftwarecraft">
          <Facebook size={40} />
        </Link>
      </li>
      <li className="mb-2">
        <Link href="https://twitter.com/minderaswcraft">
          <Twitter size={40} />
        </Link>
      </li>
      <li className="mb-2">
        <Link href="https://www.linkedin.com/company/mindera-world">
          <Linkedin size={40} />
        </Link>
      </li>
      <li className="mb-2">
        <Link href="https://www.instagram.com/minderascraft/">
          <Instagram size={40} />
        </Link>
      </li>
    </ul>
  </section>
  )
}

export default SocialNetworks