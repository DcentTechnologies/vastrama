const recommendations = [
    {
      id: 1,
      title: "Cotton Kurti",
      image: "/images/kurti.jpg",
      price: "₹799",
      offer: "10% OFF",
      distanceInMeters: 2300,
    },
    {
      id: 2,
      title: "Denim Jacket",
      image: "/images/jacket.jpg",
      price: "₹1,499",
      offer: null,
      distanceInMeters: 820,
    },
    {
      id: 3,
      title: "Printed T-Shirt",
      image: "/images/tshirt.jpg",
      price: "₹599",
      offer: "20% OFF",
      distanceInMeters: 10200,
    },
    // Add more if needed
  ];
  
  const formatDistance = (meters) => {
    return meters >= 1000
      ? `${(meters / 1000).toFixed(1)} km`
      : `${meters} meters`;
  };
  
  const Recommendations = () => {
    return (
      <div className="w-full px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Top Recommendations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendations.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-xl overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium mb-1">{item.price}</p>
                {item.offer && (
                  <p className="text-sm text-green-600 mb-1">{item.offer}</p>
                )}
                <p className="text-sm text-gray-500">
                  Distance: {formatDistance(item.distanceInMeters)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Recommendations;