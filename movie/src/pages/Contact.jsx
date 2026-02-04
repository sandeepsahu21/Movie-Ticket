import React, { useEffect } from "react";
import { gsap } from "gsap";

const Contact = () => {
  useEffect(() => {
    gsap.from(".contact-box", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[url('/movie.jpg')] bg-cover bg-center text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-8 contact-box">
        Contact Us
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-black/60 backdrop-blur-md p-8 rounded-xl shadow-lg contact-box">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Get in Touch
          </h2>

          <p className="mb-4 text-gray-300">
            Have questions, feedback, or need support? Our team is always ready
            to help you.
          </p>

          <ul className="space-y-3 text-gray-300">
            <li>📧 Email: movie@gmail.com</li>
            <li>📞 Phone: +91 98765 43210</li>
            <li>📍 Address: Bhopal, India</li>
          </ul>

          <p className="mt-6 text-sm text-gray-400">
            Business Hours: Mon-Fri (10:00 AM - 7:00 PM) Sat-Sun (11:00 AM -
            5:00 PM)
          </p>
        </div>

        <div className="bg-black/60 backdrop-blur-md p-8 rounded-xl shadow-lg contact-box">
          <h2 className="text-2xl font-semibold mb-4 text-red-500">
            Send a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded bg-gray-800 text-white outline-none" />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded bg-gray-800 text-white outline-none" />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-3 rounded bg-gray-800 text-white outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-red-500 text-black font-semibold py-3 rounded hover:bg-red-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-10">
        🎟️ MovieTime - Making movie booking simple & enjoyable!
      </p>
    </div>
  );
};

export default Contact;
