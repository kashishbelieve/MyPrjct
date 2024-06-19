import image1 from "./assets/Default_hotels_and_mess_images_for_students_0 (1).jpg";
import image2 from "./assets/Default_hotels_and_mess_images_for_students_0.jpg";
import image3 from "./assets/Default_hotels_and_mess_images_for_students_1.jpg";
import image4 from "./assets/Default_hotels_and_mess_images_for_students_4.jpg";
import image5 from "./assets/Default_hotels_and_mess_images_for_students_6.jpg";
import image6 from "./assets/Default_hotels_and_mess_images_for_students_7.jpg";
const messData = [
  {
    id: 1,
    name: 'Sunrise Boys Mess',
    city: 'Gwalior',
    image: `${image1}`,
    description: 'A spacious mess with all amenities for boys.',
    price: 4000,
    rating: 4.3,
    type: 'boys',
    phone:"9142056789"
  },
  {
    id: 2,
    name: 'Maple Girls Mess',
    city: 'Gwalior',
    image: 'https://example.com/mess2.jpg',
    description: 'A cozy mess for girls with modern facilities.',
    price: 3500,
    rating: 4.5,
    type: 'girls',
    phone:"9142056789"
  },
  {
    id: 3,
    name: 'Silver Sands Mess',
    city: 'Pune',
    image: 'https://example.com/mess3.jpg',
    description: 'An affordable mess for both boys and girls.',
    price: 3000,
    rating: 4.0,
    type: 'both',
    phone:"9142056789"
  },
  
];


const newImageURLs = [
  `${image1}`,
  `${image2}`,
  `${image3}`,
  `${image4}`,
  `${image5}`,
  `${image6}`,
  
];

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

const updatedMessData = messData.map((mess) => {
  return {
    ...mess,
    image: getRandomImage(),
    phone: generateRandomPhoneNumber(),
    rating: correctRating(mess.rating), 
  };
});

const uniqueNames = [
  "Pinewood Mess",
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

const generateAdditionalMesses = (count, startingId) => {
  const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad"];
  const types = ["boys", "girls", "both"];
  const descriptions = [
    "A spacious and comfortable mess.",
    "A modern mess with great facilities.",
    "An affordable mess with a friendly environment.",
  ];

  const additionalMesses = [];

  for (let i = 0; i < count; i++) {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const description = descriptions[Math.floor(Math.random() * descriptions.length)];
    const price = Math.floor(Math.random() * 2000) + 3000;
    const rating = correctRating((Math.random() * 2) + 3); 
    const type = types[Math.floor(Math.random() * types.length)];

    additionalMesses.push({
      id: startingId + i,
      name: generateRandomName(),
      city,
      image: getRandomImage(),
      description,
      price,
      rating,
      type,
      phone: generateRandomPhoneNumber(), 
    });
  }

  return additionalMesses;
};

export const allMesses = [
  ...updatedMessData,
  ...generateAdditionalMesses(200, 4),
];
