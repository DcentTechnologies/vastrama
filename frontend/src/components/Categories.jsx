import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    {
      name: "Men",
      image: "/images/men.jpeg",
    },
    {
      name: "Women",
      image: "/images/women.jpeg",
    },
    {
      name: "Kids",
      image: "https://source.unsplash.com/100x100/?kids,fashion,clothes",
    },
    {
      name: "Shoes",
      image: "https://source.unsplash.com/100x100/?shoes,footwear,sneakers",
    },
    {
      name: "Accessories",
      image: "https://source.unsplash.com/100x100/?fashion,accessories,jewelry",
    },
    {
      name: "Jewelry",
      image: "https://source.unsplash.com/100x100/?jewelry,necklace,earrings",
    },
    {
      name: "Bags",
      image: "https://source.unsplash.com/100x100/?bags,handbag,fashion",
    },
    {
      name: "Watches",
      image: "https://source.unsplash.com/100x100/?watch,watches,fashion",
    },
    {
      name: "Winter Wear",
      image: "https://source.unsplash.com/100x100/?jacket,winterwear",
    },
    {
      name: "Ethnic",
      image: "https://source.unsplash.com/100x100/?ethnic,traditional,indian",
    },
    {
      name: "Casual",
      image: "https://source.unsplash.com/100x100/?casual,clothing,outfit",
    },
    {
      name: "Formal",
      image: "https://source.unsplash.com/100x100/?formal,clothing,officewear",
    },
  ];

const Categories = () => {
    const scrollRef = useRef(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
  
    // Check for overflow on mount and resize
    useEffect(() => {
      const checkOverflow = () => {
        if (scrollRef.current) {
          const hasOverflow = scrollRef.current.scrollWidth > scrollRef.current.clientWidth;
          setIsOverflowing(hasOverflow);
        }
      };
  
      checkOverflow();
      window.addEventListener("resize", checkOverflow);
      return () => window.removeEventListener("resize", checkOverflow);
    }, []);
  
    const scroll = (direction) => {
      const scrollAmount = 200;
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };
  
    return (
      <div className="px-6 py-8 relative">
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
  
        <div className="relative">
  {/* Scrollable Container with padding */}
  <div
    ref={scrollRef}
    className={`flex gap-6 overflow-x-auto py-2 pl-8 pr-8 scroll-smooth transition-all scrollbar-hide ${
      isOverflowing ? "" : "justify-center"
    }`}
  >
    {categories.map((cat, index) => (
      <div key={index} className="flex flex-col items-center min-w-[90px]">
        <img
          src={cat.image}
          alt={cat.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
        />
        <span className="mt-2 text-sm">{cat.name}</span>
      </div>
    ))}
  </div>

  {/* Prev/Next Buttons - moved inward slightly */}
  {isOverflowing && (
    <>
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-10 hover:bg-gray-100"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </>
  )}
</div>
      </div>
    );
  };
  
  export default Categories;