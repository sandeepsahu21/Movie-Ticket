import axios from "axios";
import { useEffect, useState } from "react";

const Mybooking = () => {
  let [Data, setdata] = useState([]);

  let fatchdata = () => {
    let api = "http://localhost:3000/booking";
    axios.get(api).then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

useEffect(()=>{
  fatchdata()
},[])

let Deletedata=(id)=>{
   let api = `http://localhost:3000/booking/${id}`
   axios.delete(api).then(()=>{
     fatchdata()
     alert("Data delete")
   })
 
}
return (
  <>
 <div className="overflow-x-auto p-6">
  <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
    <thead className="bg-gray-900 text-gray-200">
      <tr>
        <th className="px-4 py-3 text-left">User Name</th>
        <th className="px-4 py-3 text-left">Movie</th>
        <th className="px-4 py-3 text-left">Theatre</th>
        <th className="px-4 py-3 text-left">Show Date</th>
        <th className="px-4 py-3 text-center">Seats</th>
        <th className="px-4 py-3 text-center">Price</th>
        <th className="px-4 py-3 text-center">Total</th>
        <th className="px-4 py-3 text-center">Payment</th>
        <th className="px-4 py-3 text-center">Status</th>
        <th className="px-4 py-3 text-center">Action</th>
      </tr>
    </thead>

    <tbody className="bg-black/60 backdrop-blur-md text-gray-100">
      {Data.map((e) => (
        <tr
          key={e.id}
          className="border-t border-gray-700 hover:bg-gray-800 transition"
        >
          <td className="px-4 py-3">{e.userName}</td>
          <td className="px-4 py-3">{e.movieName}</td>
          <td className="px-4 py-3">{e.theatre}</td>
          <td className="px-4 py-3">{e.showDate}</td>
          <td className="px-4 py-3 text-center">{e.seatCount}</td>
          <td className="px-4 py-3 text-center">₹{e.pricePerSeat}</td>
          <td className="px-4 py-3 text-center font-semibold text-yellow-400">
            ₹{e.totalAmount}
          </td>
          <td className="px-4 py-3 text-center">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                e.paymentStatus === "Paid" ? "bg-green-600/20 text-green-400": "bg-red-600/20 text-red-400" }`}>{e.paymentStatus}
            </span>
          </td>
          <td className="px-4 py-3 text-center">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${e.bookingStatus === "Confirmed"? "bg-blue-600/20 text-blue-400"
              : "bg-yellow-600/20 text-yellow-400"}`} >
              {e.bookingStatus}
            </span>
          </td>
          <td className="px-4 py-3 text-center">
            <button
              onClick={() => Deletedata(e.id)}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm">
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  </>
)

}

export default Mybooking;
