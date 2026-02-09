import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SEAT_PRICE = 200;
const seatsLayout = ["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"];

const Bookingform = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: "",
    movieName: "",
    theatre: "",
    showDate: "",
    showTime: "",
    selectedSeats: [],
  });

 
  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
      navigate("/login");
      return;
    }

    gsap.from(".BookNow-box", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleSeat = (seat) => {
    setFormData((prev) => ({
      ...prev,
      selectedSeats: prev.selectedSeats.includes(seat)
        ? prev.selectedSeats.filter((s) => s !== seat)
        : [...prev.selectedSeats, seat],
    }));
  };

  const totalAmount = formData.selectedSeats.length * SEAT_PRICE;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const bookingData = {
      userName: formData.userName,
      userEmail: currentUser.email, 
      movieName: formData.movieName,
      theatre: formData.theatre,
      showDate: formData.showDate,
      showTime: formData.showTime,
      seatCount: formData.selectedSeats.length,
      seats: formData.selectedSeats,
      pricePerSeat: SEAT_PRICE,
      totalAmount,
      paymentStatus: "Paid",
      bookingStatus: "Confirmed",
    };

    try {
      await axios.post("http://localhost:3000/booking", bookingData);

      Swal.fire({
  title: "🎉 Booking Confirmed!",
  html: `
    <p><b>Movie:</b> ${formData.movieName}</p>
    <p><b>Theatre:</b> ${formData.theatre}</p>
    <p><b>Seats:</b> ${formData.selectedSeats.join(", ")}</p>
    <p><b>Total Amount:</b> ₹${totalAmount}</p>
  `,
  icon: "success",
  background: "#111",
  color: "#fff",
  confirmButtonColor: "#ef4444",
  confirmButtonText: "Go to My Booking 🎟️",
}).then(() => {
  navigate("/booking");
});
    } catch (err) {
      console.log(err);
      alert("Booking failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/movie.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <form
        onSubmit={handleSubmit}
        className="BookNow-box relative z-10 bg-black/70 backdrop-blur-xl p-8 rounded-2xl w-full max-w-md text-white shadow-2xl border border-white/10"
      >
        <h2 className="text-3xl font-extrabold text-center mb-6">
          🎬 Book Your Movie
        </h2>

        <input
          type="text"
          name="userName"
          placeholder="Your Name"
          required
          value={formData.userName}
          onChange={handleChange}
          className="input"
        />

        <select
          name="movieName"
          required
          value={formData.movieName}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Movie</option>
          <option>Dhurandar</option>
          <option>Mardaani2</option>
          <option>Mayasabha</option>
          <option>Ikkis</option>
          <option>Border2</option>
          <option>Godaan</option>
        </select>

        <select
          name="theatre"
          required
          value={formData.theatre}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Theatre</option>
          <option>PVR</option>
          <option>INOX</option>
          <option>Cinepolis</option>
        </select>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            name="showDate"
            required
            value={formData.showDate}
            onChange={handleChange}
            className="input"
          />
          <input
            type="time"
            name="showTime"
            required
            value={formData.showTime}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div className="mt-5">
          <p className="mb-2 text-sm">Select Seats</p>
          <div className="grid grid-cols-5 gap-2">
            {seatsLayout.map((seat) => (
              <button
                type="button"
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`py-2 rounded-lg text-sm font-semibold ${
                  formData.selectedSeats.includes(seat)
                    ? "bg-red-500 text-black"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {seat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5 bg-black/50 p-4 rounded-xl text-sm">
          <p>🎟 Seats: {formData.selectedSeats.join(", ") || "None"}</p>
          <p>💰 Total: ₹{totalAmount}</p>
        </div>

        <button
          type="submit"
          disabled={formData.selectedSeats.length === 0}
          className="w-full mt-5 bg-red-500 hover:bg-red-600 text-black font-bold py-3 rounded-xl transition shadow-lg shadow-red-500/40 disabled:opacity-50"
        >
          Confirm Booking
        </button>
      </form>

      <style>{`
        .input{
          width:100%;
          margin-bottom:12px;
          padding:10px 14px;
          border-radius:10px;
          background:rgba(17,17,17,.8);
          border:1px solid #555;
          outline:none;
        }
        .input:focus{border-color:#ef4444;}
      `}</style>
    </div>
  );
};

export default Bookingform;
