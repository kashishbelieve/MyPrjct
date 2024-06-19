import React, { useEffect, useState } from "react";
import hostelData from "../data1.js";
import { toast } from "react-toastify";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

function HostelCard() {
  const [hostels, setHostels] = useState([]);
  const [category, setCategory] = useState("Boys"); // Default to "Boys"
  const [formData, setFormData] = useState({ city: "" });
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    fetchHostelData();
  }, [category]); // Re-fetch hostels when category changes

  function fetchHostelData() {
    if (hostelData && hostelData.length > 0) {
      // Filter hostels by selected category
      const filteredHostels = hostelData.filter(
        (hostel) => hostel.type.toLowerCase() === category.toLowerCase()
      );
      setHostels(filteredHostels);
    } else {
      toast.error("Failed to fetch hostel data.");
    }
  }

  function handleInputChange(event) {
    setFormData({ city: event.target.value });
  }

  function handleCitySearch(event) {
    if (event.key === "Enter") {
      const inputCity = formData.city.toLowerCase();
      const filteredHostels = hostels.filter(
        (hostel) => hostel.city.toLowerCase() === inputCity
      );

      if (filteredHostels.length > 0) {
        setHostels(filteredHostels);
      } else {
        setHostels([]);
        toast.info("No hostels available in this city.");
      }
    }
  }

  function changeCategory(selectedCategory) {
    setCategory(selectedCategory);
  }

  function toggleLike(hostelId) {
    if (likedCourses.includes(hostelId)) {
      setLikedCourses((prev) => prev.filter((id) => id !== hostelId));
      toast.warning("Like removed.");
    } else {
      setLikedCourses((prev) => [...prev, hostelId]);
      toast.success("Liked successfully.");
    }
  }

  return (
    <div className="mt-24 min-h-screen flex flex-col items-center p-5 bg-blue-950 bg-opacity-80">
      <input
        type="text"
        placeholder="Enter your city"
        name="city"
        value={formData.city}
        onChange={handleInputChange}
        onKeyDown={handleCitySearch}
        className="w-[400px] outline-none border-2 border-gray-300 rounded-md pl-4 h-[40px] hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
      />
      <div className="flex gap-20 mt-4">
        <button
          onClick={() => changeCategory("Boys")}
          className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300"
        >
          Boys
        </button>
        <button
          onClick={() => changeCategory("Girls")}
          className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300"
        >
          Girls
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-20 mt-8">
        {hostels.map((hostel) => (
          <div
            key={hostel.id}
            className="w-72 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out"
          >
            <div className="bg-gradient-to-t from-blue-900 to-blue-700 rounded-t-lg">
              <div className="flex justify-center relative">
                <img
                  src={hostel.image}
                  alt={`Image of ${hostel.name}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-[90%] right-2 grid place-items-center w-[40px] h-[40px] bg-white rounded-full">
                  <button onClick={() => toggleLike(hostel.id)}>
                    {likedCourses.includes(hostel.id) ? (
                      <FcLike fontSize="1.75rem" />
                    ) : (
                      <FcLikePlaceholder fontSize="1.75rem" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="p-6 bg-blue-900 bg-opacity-90 text-white space-y-2 rounded-b-lg">
              <h3 className="text-lg font-bold">{hostel.name}</h3>
              <p className="text-sm">City: {hostel.city}</p>
              <p className="text-sm">Description: {hostel.description}</p>
              <p className="text-sm">RoomType: {hostel.room_type}</p>
              <p className="text-sm">Amenities: {hostel.amenities.join(", ")}</p>
              <p className="text-sm">Price: {hostel.price} /month</p>
              <p className="text-sm">Phone No: +91 {hostel.phone}</p>
              <p className="text-sm">Type: {hostel.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HostelCard;
