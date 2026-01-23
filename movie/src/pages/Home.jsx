import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Home = () => {
    
  return (
    <>
      <main className="flex-1 ">
        <section className="relative  h-[90vh] flex items-center justify-center text-white overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 `bg-gradient-to-b` from-black/70 via-black/50 to-black/80 backdrop-blur-xs"></div>

          <div className="relative z-10 text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 leading-tight">
              Book Your{" "}
              <span className="text-red-500 drop-shadow-lg">Movie Tickets</span>
            </h1>

            <p className="text-gray-300 mb-10 text-lg md:text-xl">
              Latest movies, best cinemas, instant booking. Experience
              entertainment like never before 🎬
            </p>

            <div className="flex justify-center gap-6">
              <button className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-full text-lg font-semibold transition shadow-lg shadow-red-500/40">
                Now Showing
              </button>

              <button className="border border-white/40 hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg font-semibold transition">
                Coming Soon
              </button>
            </div>
          </div>
        </section>

        <div className="relative  bg-black/70 backdrop-blur-md py-10">
          <div className="text-3xl font-bold mb-10 text-center  mt-8">
            🎥 Trending Movies
          </div>

          <Swiper slidesPerView={4} spaceBetween={100}>
            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 ml-6 rounded-lg w-70 h-90 text-white shadow-lg">
                <img
                  src="/dhura.jpeg"
                  className="w-65 h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Dhurandar</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg ">
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg">
                <img
                  src="/border 2.avif"
                  className="w-65 h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Border 2</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg">
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg">
                <img
                  src="/ikiis.avif"
                  className="w-65 h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Ikkis</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg">
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg">
                <img
                  src="/narshima.jpeg"
                  className="w-65 h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Narshima</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg">
                  Book Now
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </>
  );
};

export default Home;
