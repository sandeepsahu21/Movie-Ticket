import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home = () => {
  let navigate = useNavigate();
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

  <div className="py-16 text-center 
 bg-gradient-to-b from-black/80 via-black/70 to-black/80">
  <h2 className="text-3xl font-semibold text-white">
    🎥 Now Streaming
  </h2>
</div>

          <div className="w-full h-[90vh]  bg-black/70 backdrop-blur-md py-10  ">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-full"
            >
              <SwiperSlide>
              <div className="relative h-[90vh] px-40  overflow-hidden ">
                <div className="absolute inset-0 bg-[url('/dhurandar2.webp')] blur-md"></div>
                  <div className="relative flex items-center justify-between h-full">

                  <div className="max-w-xl">
                    <h1 className="text-5xl font-bold mb-4">Dhurandhar</h1>

                    <p className="text-lg  mb-6">UA | Action, Thriller"</p>

                    <button
                      onClick={() => navigate("/BookNow")}
                      className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                    >
                      Book now
                    </button>
                  </div>

                  <div>
                    <img
                      src="/dhurandar2.webp"
                      alt="dhurandhar"
                      className=" rounded-2xl shadow-2xl w-130 h-80"
                    />
                  </div>
                </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-[90vh] px-40 rounded-2xl overflow-hidden ">
                <div className="absolute inset-0 bg-[url('/maya2.webp')] blur-md bg-cover bg-no-repeat bg-center  scale-110 "></div>
                  <div className="relative flex items-center justify-between h-full">
                  <div className="max-w-xl">
                    <h1 className="text-5xl font-bold mb-4">Mayasabha</h1>

                    <p className="text-lg  mb-6">A | Fantasy, Thriller</p>

                    <button
                      onClick={() => navigate("/BookNow")}
                      className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                    >
                      Book now
                    </button>
                  </div>

                  <div >
                    <img
                      src="/maya2.webp"
                      alt="mayasabha"
                      className="rounded-2xl shadow-2x1 w-130 h-80"
                    />
                  </div>
                </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative h-[90vh] px-40 rounded-2xl overflow-hidden ">
                <div className="absolute inset-0 bg-[url('/mardaani2.webp')] blur-md bg-cover bg-no-repeat bg-center  scale-110 "></div>
                  <div className="relative flex items-center justify-between h-full">
                  <div className="max-w-xl">
                    <h1 className="text-5xl font-bold mb-4">Mardaani 2</h1>

                    <p className="text-lg  mb-6">UA | Action, Thriller</p>

                    <button
                      onClick={() => navigate("/BookNow")}
                      className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
                    >
                      Book now
                    </button>
                  </div>

                  <div >
                    <img
                      src="/mardaani2.webp"
                      alt="mardaani2"
                      className="rounded-2xl shadow-2xl w-130 h-80"
                    />
                  </div>
                </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

           <div className=" bg-black/70 backdrop-blur-md py-10">
           <h1 className="text-3xl font-bold mb-10 text-center  mt-2 ">Trending movies</h1>
          <Swiper slidesPerView={4} spaceBetween={90}>
            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 ml-6 rounded-lg w-70 h-90 text-white shadow-lg overflow-visible
                      transition-transform duration-300 hover:scale-105">
                <img
                  src="/dhura.jpeg"
                  className="w-65 h-45 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Dhurandar</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button
                  onClick={() => navigate("/bookNow")}
                  className="bg-red-500 text-black font-semibold py-2 px-4 rounded-lg "
                >
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg
              transition-transform duration-300 hover:scale-105">
                <img
                  src="/border 2.avif"
                  className="w-65 h-45 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Border 2</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button
                  onClick={() => navigate("/BookNow")}
                  className="bg-red-500 text-black font-semibold py-2 px-4 rounded-lg"
                >
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg
              transition-transform duration-300 hover:scale-105">
                <img
                  src="/ikiis.avif"
                  className="w-65 h-45 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Ikkis</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button
                  onClick={() => navigate("/BookNow")}
                  className="bg-red-500 text-black font-semibold py-2 px-4 rounded-lg"
                >
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg
              transition-transform duration-300 hover:scale-105">
                <img
                  src="/narshima.jpeg"
                  className="w-65 h-45 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Narshima</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button
                  onClick={() => navigate("/BookNow")}
                  className="bg-red-500 text-black font-semibold py-2 px-4 rounded-lg"
                >
                  Book Now
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className=" bg-black/70 backdrop-blur-md py-10">
          <Swiper slidesPerView={4} spaceBetween={90}>
            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 ml-6 rounded-lg w-70 h-100 text-white shadow-lg
              transition-transform duration-300 hover:scale-105">
                <img
                  src="/mujhse dosti karogi.jpg"
                  className="w-65 h-65 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Mujhse dosti karogi</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button
                  onClick={() => navigate("/bookNow")}
                  className="bg-red-500 text-black font-semibold py-2 px-4 rounded-lg "
                >
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg
              transition-transform duration-300 hover:scale-105">
                <img
                  src="/godaan.jpg"
                  className="w-65 h-45 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Gooden</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button
                  onClick={() => navigate("/BookNow")}
                  className="bg-red-500 text-black font-semibold py-2 px-4 rounded-lg"
                >
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg
              transition-transform duration-300 hover:scale-105">
                <img
                  src="/mayasabha.jpg"
                  className="w-65 h-45 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Mayasabha</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button
                  onClick={() => navigate("/BookNow")}
                  className="bg-red-500 text-black font-semibold py-2 px-4 rounded-lg"
                >
                  Book Now
                </button>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-lg w-70 h-90 text-white shadow-lg
              transition-transform duration-300 hover:scale-105">
                <img
                  src="/happypatel.jpg"
                  className="w-65 h-45 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-bold mb-2">Happy patel</h2>
                <p className="text-sm mb-4">
                  A brief description of the movie.
                </p>
                <button
                  onClick={() => navigate("/BookNow")}
                  className="bg-red-500 text-black font-semibold py-2 px-4 rounded-lg"
                >
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
