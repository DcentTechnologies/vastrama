import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "src/assets/images/banner1.jpg",
  "src/assets/images/banner2.jpg",
  "src/assets/images/banner3.jpg",
  "src/assets/images/banner4.jpg",
  "src/assets/images/banner5.jpg",
];

const Banner = () => {
    const [index, setIndex] = useState(0);
  
    // Auto-slide every 2 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 2000);
      return () => clearInterval(interval);
    }, [index]);
  
    const prevSlide = () => {
      setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
  
    const nextSlide = () => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <div className="mt-6 mx-6 relative rounded-xl overflow-hidden shadow-md">
        {/* Responsive Height Container */}
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[400px]">
          <motion.img
            src={images[index]}
            alt={`Slide ${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
          />
  
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-white bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>
  
          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-white bg-opacity-60 hover:bg-opacity-90 p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>
  
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;