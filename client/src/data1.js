import image1 from "./assets/Default_hostel_and_rental_rooms_0 (1).jpg";
import image2 from "./assets/Default_hostel_and_rental_rooms_1 (1).jpg";
import image3 from "./assets/Default_hostel_and_rental_rooms_2 (1).jpg";
import image4 from "./assets/Default_hostel_and_rental_rooms_2.jpg";
import image5 from "./assets/Default_hostel_and_rental_rooms_3 (1).jpg";
import image6 from "./assets/Default_hostel_and_rental_rooms_3.jpg";

const newImageURLs = [image1, image2, image3, image4, image5, image6];


const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * newImageURLs.length);
  return newImageURLs[randomIndex];
};


const generateRandomPhoneNumber = () => {
  let phoneNumber = '9';
  for (let i = 1; i < 10; i++) {
    phoneNumber += Math.floor(Math.random() * 10).toString();
  }
  return phoneNumber;
};


const correctRating = (rating) => {
  return Math.round(rating * 100) / 100;
};


const uniqueNames = [
  "Pinewood Hostel",
  "Golden Meadows",
  "Riverside Inn",
  "Hilltop Lodge",
  "Seaside Haven",
  "Bright Horizons",
  "Mountain Retreat",
  "Valley Forge",
  "Sunset Grove",
  "Bluebell Court",
];

const generateRandomName = () => {
  const randomIndex = Math.floor(Math.random() * uniqueNames.length);
  return uniqueNames[randomIndex];
};


const generateCustomHostels = (count, startingId) => {
  const cities = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"];
  const types = ["boys", "girls"];
  const roomTypes = ["Single", "Double", "Triple"];
  const amenitiesOptions = [
    ["WiFi", "24/7 Security", "Gym", "Cafeteria"],
    ["WiFi", "Laundry", "Study Room", "Security"],
    ["WiFi", "Cafeteria", "Gym", "Security"],
  ];

  const hostels = [];

  for (let i = 0; i < count; i++) {
    const name = generateRandomName();
    const city = cities[Math.floor(Math.random() * cities.length)];
    const roomType = roomTypes[Math.floor(Math.random() * roomTypes.length)];
    const amenities = amenitiesOptions[Math.floor(Math.random() * amenitiesOptions.length)];
    //const distanceFromCityCenter = `${(Math.random() * 5).toFixed(1)} km`;
    const price = Math.floor(Math.random() * 2000) + 6000; // Prices from 6000 to 8000
    const rating = correctRating((Math.random() * 2) + 3); // Rating between 3 and 5
    const type = types[Math.floor(Math.random() * types.length)];

    hostels.push({
      id: startingId + i,
      name,
      city,
      image: getRandomImage(),
      description: `A ${name} with various amenities for ${type}.`,
      price,
      rating,
      type,
      room_type: roomType,
      amenities,
      //distance_from_city_center,
      phone: generateRandomPhoneNumber(),
    });
  }

  return hostels;
};

const hostelData = generateCustomHostels(200, 1);
console.log(hostelData);
export default hostelData;