import React, { useEffect, useState } from "react";
import { allMesses } from "../data.js";
import { toast } from "react-toastify";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

function MessCard() {
  const [messes, setMesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const [formData, setFormData] = useState({ city: "" });
  const [likedCourses, setLikedCourses] = useState([]);

  useEffect(() => {
    fetchMessData();
  }, []); // empty dependency list indicates it runs only once when the component mounts

  function fetchMessData() {
    setLoading(true);
    if (allMesses && allMesses.length > 0) {
      setMesses(allMesses);
    } else {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  function handleInputChange(event) {
    setFormData({ city: event.target.value });
  }

  function handleCitySearch(event) {
    if (event.key === "Enter") {
      const inputCity = event.target.value.toLowerCase();

      const filteredMesses = allMesses.filter(
        (mess) => mess.city.toLowerCase() === inputCity
      );

      if (filteredMesses.length > 0) {
        setMesses(filteredMesses);
      } else {
        setMesses([]);
        toast.info("No messes available in this city");
      }
    }
  }

  function changeCategory(selectedCategory) {
    setCategory(selectedCategory);

    if (selectedCategory === "All") {
      setMesses(allMesses);
    } else {
      const filteredMesses = allMesses.filter(
        (mess) => mess.type.toLowerCase() === selectedCategory.toLowerCase()
      );
      setMesses(filteredMesses);
    }
  }

  function toggleLike(messId) {
    if (likedCourses.includes(messId)) {
      setLikedCourses((prev) => prev.filter((id) => id !== messId));
      toast.warning("Like removed");
    } else {
      setLikedCourses((prev) => [...prev, messId]);
      toast.success("Liked successfully");
    }
  }

  function getFilteredMesses() {
    if (category === "All") {
      return messes;
    } else {
      return messes.filter(
        (mess) => mess.type.toLowerCase() === category.toLowerCase()
      );
    }
  }

  return (
    <div className="mt-24">
      <div className="min-h-screen flex flex-col bg-blue-950 bg-opacity-80 items-center p-5">
        <input
          type="text"
          placeholder="Enter your city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          onKeyPress={handleCitySearch}
          className="w-[400px] outline-none border-2 border-gray-300 rounded-md pl-4 h-[40px] hover:border-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
        <div className="flex mt-4 gap-20">
          <button
            onClick={() => changeCategory("All")}
            className="text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300"
          >
            All
          </button>
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
        {loading ? (
          <div></div>
        ) : (
          <div className="flex flex-wrap justify-center gap-20 mt-8">
            {getFilteredMesses().map((mess) => (
              <div
                key={mess.id}
                className="w-72 rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 ease-in-out transform-gpu"
              >
                <div className="bg-gradient-to-t from-blue-900 to-blue-700">
                  <div className="flex justify-center rounded-t-lg">
                    <img
                      src={mess.image}
                      alt={`Image of ${mess.name}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-[40%] right-2 grid place-items-center w-[40px] h-[40px] bg-white rounded-full">
                      <button onClick={() => toggleLike(mess.id)}>
                        {likedCourses.includes(mess.id) ? (
                          <FcLike fontSize="1.75rem" />
                        ) : (
                          <FcLikePlaceholder fontSize="1.75rem" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-blue-900 bg-opacity-90 text-white space-y-2 rounded-b-lg">
                  <h3 className="text-lg font-bold">{mess.name}</h3>
                  <p className="text-sm">City: {mess.city}</p>
                  <p className="text-sm">Description: {mess.description}</p>
                  <p className="text-sm">Price: {mess.price} /month</p>
                  <p className="text-sm">Rating: {mess.rating}</p>
                  <p className="text-sm">Allowed: {mess.type}</p>
                  <p className="text-sm">Phone No: +91 {mess.phone}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MessCard;
