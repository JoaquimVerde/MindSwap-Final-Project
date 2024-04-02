import Link from "next/link";
import React from "react";

const contact = () => {
  return (
    <div>
      <h1>Contact Us</h1><br/>

      <section>
        <h2>Contact Information</h2>
        <p>Street</p>
        <p>Phone</p>
        <p>Email</p>
      </section><br/>

      <section>
        <h2>Contact Form</h2>
        {/* Your contact form code here */}
        <p>This is where your contact form will go...</p>
      </section><br/>

      <section>
        <h2>Connect With Us</h2>
        <ul>
          <li>
            <a href="https://facebook.com/yourcompany">Facebook</a>
          </li>
          <li>
            <a href="https://twitter.com/yourcompany">Twitter</a>
          </li>
          <li>
            <a href="https://linkedin.com/company/yourcompany">LinkedIn</a>
          </li>
        </ul>
      </section><br/>

      {/* Show or not? */}
      <section>
        <h2>Contact Hours</h2>
        <p>Monday - Friday: 9am - 5pm</p>
        <p>Saturday - Sunday: Closed</p>
      </section><br/>

      <section>
        {/* Show Faqs?? */}
      </section>

      <section>
        <h2>Location Map</h2>
        {/* Embed your map here */}
      </section><br/>

      {/* Privacy Policy */}
      <section>
        <h2>Privacy Policy</h2>
        <p>
          Read our{" "}
          <Link href="/privacy-policy">
          privacy policy
          </Link>{" "}
          to learn how we protect your information.
        </p>
      </section>
    </div>
  );
};

export default contact;
