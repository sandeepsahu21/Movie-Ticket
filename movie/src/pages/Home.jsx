import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Home = () => {
  return (
    <>
      <main className="flex-1 px-10 py-6">
        <div className="flex justify-center text-5xl font-semibold mb-9"> Movies</div>

        <Swiper slidesPerView={4} spaceBetween={100}>
          <SwiperSlide>
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg ">
              <img
                src="/dhura.jpeg"
                alt="Movie Poster"
                className="w-65 h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Dhurandar</h2>
              <p className="text-sm mb-4">
                A brief description of the movie goes here. It provides an
                overview of the plot and key highlights.
              </p>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
                Book Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg ">
              <img
                src="/border 2.avif"
                alt="Movie Poster"
                className="w-65 h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Border 2</h2>
              <p className="text-sm mb-4">
                A brief description of the movie goes here. It provides an
                overview of the plot and key highlights.
              </p>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
                Book Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg ">
              <img
                src="/ikiis.avif"
                alt="Movie Poster"
                className="w-65 h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Ikkis</h2>
              <p className="text-sm mb-4">
                A brief description of the movie goes here. It provides an
                overview of the plot and key highlights.
              </p>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
                Book Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg ">
              <img
                src="/border 2.avif"
                alt="Movie Poster"
                className="w-65 h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Border 2</h2>
              <p className="text-sm mb-4">
                A brief description of the movie goes here. It provides an
                overview of the plot and key highlights.
              </p>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
                Book Now
              </button>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg ">
              <img
                src="/ikiis.avif"
                alt="Movie Poster"
                className="w-65 h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Ikkis</h2>
              <p className="text-sm mb-4">
                A brief description of the movie goes here. It provides an
                overview of the plot and key highlights.
              </p>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
                Book Now
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg ">
              <img
                src="/narshima.jpeg"
                alt="Movie Poster"
                className="w-65 h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold mb-2">Narshima</h2>
              <p className="text-sm mb-4">
                A brief description of the movie goes here. It provides an
                overview of the plot and key highlights.
              </p>
              <button className="bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
                Book Now
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
};

export default Home;
