import React, { useEffect } from "react";
import { gsap } from "gsap";

const About = () => {

  useEffect(() => {
    gsap.from(".about-box", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[url('/movie.jpg')]  bg-cover bg-center text-white px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-8 about-box">
        About Us
      </h1>

     
      <div className="max-w-4xl mx-auto bg-black/60 backdrop-blur-md p-8 rounded-xl shadow-lg about-box">

        <p className="text-lg mb-4">
          <span className="font-semibold text-red-500">MovieTime</span> is a
          modern movie ticket booking platform where users can easily explore
          the latest movies, show timings, and book their seats online.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-500">
          Our Aim
        </h2>
        <p className="mb-4">
          Our aim is to provide a fast, simple, and secure movie ticket booking
          experience for everyone.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-500">
          What We Offer
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Latest movie listings</li>
          <li>Real-time show timings</li>
          <li>Easy seat selection</li>
          <li>Simple booking process</li>
          <li>Mobile-friendly design</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-500">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>React JS</li>
          <li>Tailwind CSS</li>
          <li>Swiper JS</li>
          <li>GSAP Animations</li>
        </ul>

        <p className="mt-6 text-center text-gray-300">
          🍿 Make your movie booking easy and enjoyable with MovieTime!
        </p>
      </div>
    </div>
  );
};

export default About;

