import React from 'react'
import { useState,useEffect } from 'react'
import { gsap } from "gsap";

const Bookingform = () => {
    const [formData, setFormData] = useState({
name: "",
movie: "",
date: "",
time: "",
seats: 1,
});

  useEffect(() => {
  gsap.from(".BookNow-box", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);


const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};


const handleSubmit = (e) => {
e.preventDefault();
alert(`Booking Confirmed!\n\nName: ${formData.name}\nMovie: ${formData.movie}\nDate: ${formData.date}\nTime: ${formData.time}\nSeats: ${formData.seats}`);
};
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-[url('/movie.jpg')]  bg-cover bg-center">
<form
onSubmit={handleSubmit}
className="BookNow-box bg-black/70 backdrop-blur-md p-8 rounded-xl text-white w-full max-w-md"
>
<h2 className="text-3xl font-bold text-center mb-6">🎬 Movie Booking</h2>


<div className="mb-4">
<label className="block mb-1">Your Name</label>
<input
type="text"
name="name"
required
value={formData.name}
onChange={handleChange}
className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
/>
</div>


<div className="mb-4">
<label className="block mb-1">Select Movie</label>
<select
name="movie"
required
value={formData.movie}
onChange={handleChange}
className="w-full p-2 rounded bg-gray-800 border border-gray-700"
>
<option value="">-- Choose Movie --</option>
<option>Avengers</option>
<option>Pushpa</option>
<option>KGF</option>
<option>Inception</option>
</select>
</div>

<div className="mb-4">
<label className="block mb-1">Select Theatre</label>
<select
name="theatre"
required
value={formData.theatre}
onChange={handleChange}
className="w-full p-2 rounded bg-gray-800 border border-gray-700"
>
<option value="">-- Choose theatre--</option>
<option>PVR</option>
<option>DDX</option>
<option>INOX</option>
<option>cinepolis</option>
</select>
</div>


<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<label className="block mb-1">Date</label>
<input
type="date"
name="date"
required
value={formData.date}
onChange={handleChange}
className="w-full p-2 rounded bg-gray-800 border border-gray-700"
/>
</div>
<div>
<label className="block mb-1">Time</label>
<input
type="time"
name="time"
required
value={formData.time}
onChange={handleChange}
className="w-full p-2 rounded bg-gray-800 border border-gray-700"
/>
</div>
</div>


<div className="mb-6">
<label className="block mb-1">Seats</label>
<input
type="number"
min="1"
max="10"
name="seats"
value={formData.seats}
onChange={handleChange}
className="w-full p-2 rounded bg-gray-800 border border-gray-700"
/>
</div>


<button
type="submit"
className="w-full bg-yellow-400 hover:bg-yellow-500 transition p-3 rounded-xl font-semibold"
>
Book Now
</button>
</form>
</div>

    </>
  )
}

export default Bookingform
