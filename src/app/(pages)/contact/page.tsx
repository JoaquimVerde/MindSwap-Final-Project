import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <p>R. de Gonçalo Cristóvão 347 - s404</p>
          <p>4000-270 Porto</p>
          <p>education.pt@mindera.com</p>
          <Link href="https://www.livroreclamacoes.pt/Inicio/" className="italic hover:underline" >Livro de Reclamações</Link>
        </section>

        <section className="mb-8">
        {/* <h2 className="text-xl font-semibold mb-4">Location Map</h2> */}
        <div className="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.1370377480935!2d-8.61134!3d41.153361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464fc11c832ef%3A0x268de3ae362a34c5!2sMindera!5e0!3m2!1spt-PT!2spt!4v1712067004594!5m2!1spt-PT!2spt"
            width="600"
            height="450"
            style={{border:0}}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      </div>

      <section className="mb-8">
        {/* <h2 className="text-xl font-semibold mb-4">Contact Form</h2> */}
        {/* Make contact form?? */}
      </section>

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

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Hours</h2>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday - Sunday: Closed</p>
      </section>

      <section className="mb-8">{/* Show FAQs?? */}</section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
        <p>
          Read our {" "}
          <Link 
            href="https://minderacodeacademy.com/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            privacy policy
          </Link>
          {" "} to learn how we protect your information.
        </p>
      </section>
    </div>
  );
};

export default Contact;
