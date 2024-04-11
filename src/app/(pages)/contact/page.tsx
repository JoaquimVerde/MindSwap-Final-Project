import BackButton from "@/app/ui/components/ui/back-button";
import SocialNetworks from "@/app/ui/components/ui/social-networks";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="">
        <section className="mb-8">
          <div className="flex flex-row items-center mb-4">
            <BackButton />
            <h1 className="text-4xl font-bold mb-4 flex-grow text-center">
              Contact Information
            </h1>
          </div>
          <p>R. de Gonçalo Cristóvão 347 - s404</p>
          <p>4000-270 Porto</p>
          <p>education.pt@mindera.com</p>
          <Link
            href="https://www.livroreclamacoes.pt/Inicio/"
            className="italic hover:underline"
          >
            Livro de Reclamações
          </Link>
        </section>

        <section className="mb-8">
          {/* <h2 className="text-xl font-semibold mb-4">Location Map</h2> */}
          <div className="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.1370377480935!2d-8.61134!3d41.153361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464fc11c832ef%3A0x268de3ae362a34c5!2sMindera!5e0!3m2!1spt-PT!2spt!4v1712067004594!5m2!1spt-PT!2spt"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>

      <SocialNetworks />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Contact Hours</h2>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday - Sunday: Closed</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
        <p>
          Read our{" "}
          <Link
            href="/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            privacy policy
          </Link>{" "}
          to learn how we protect your information.
        </p>
      </section>
    </div>
  );
};

export default Contact;
