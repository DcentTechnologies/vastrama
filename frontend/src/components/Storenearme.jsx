import { MapPin, Star } from "lucide-react";

export default function StoreNearMe() {
  const store = {
    name: "Local Mart",
    rating: 4.5,
    distance: "2.3 km",
    image: "/images/store.png",
    mapLink: "https://maps.google.com?q=Local+Mart"
  };

  return (
    <div className="max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-4 text-center">
      <img src={store.image} alt={store.name} className="w-full h-48 md:h-56 lg:h-64 object-cover" />
      <h3 className="text-xl md:text-2xl font-semibold mt-2">{store.name}</h3>
      <div className="flex items-center justify-center space-x-2 mt-2">
        <Star className="text-yellow-500" size={20} />
        <span className="text-lg md:text-xl">{store.rating}</span>
      </div>
      <div className="flex items-center justify-center space-x-2 mt-1">
        <MapPin size={20} />
        <span className="text-gray-600 text-base md:text-lg">{store.distance}</span>
      </div>
      <a 
        href={store.mapLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 text-sm md:text-base lg:text-lg"
      >
        View on Maps
      </a>
    </div>
  );
}