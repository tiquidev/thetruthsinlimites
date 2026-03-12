"use client";

import { useRef } from "react";

const TRENDING_ITEMS = [
  { title: "Dark Horizons", color: "#8B1A1A" },
  { title: "Casa de Papel", color: "#1A3B5C" },
  { title: "The Crown", color: "#5C1A3B" },
  { title: "Stranger Things", color: "#1A1A3B" },
  { title: "Formula One", color: "#0D3B2D" },
  { title: "Breaking Bad", color: "#3B2D0D" },
  { title: "The Witcher", color: "#2D0D3B" },
  { title: "Narcos", color: "#3B0D1A" },
  { title: "Ozark", color: "#0D2D3B" },
  { title: "Elite", color: "#3B1A0D" },
];

export default function TrendingNow() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="px-6 md:px-12 py-10" style={{marginTop: "-40px"}}>
      <h3 className="text-xl md:text-2xl font-bold mb-4">Trending Now</h3>
      <div className="relative group">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-10 w-10 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-black/80"
        >
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Row */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto hide-scrollbar scroll-smooth"
        >
          {TRENDING_ITEMS.map((item, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[130px] md:w-[170px] aspect-[2/3] rounded-md overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: item.color }}
            >
              {/* Poster gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              {/* Title */}
              <div className="absolute top-2 right-2">
                <span className="text-[10px] text-white/60 font-semibold bg-black/40 px-1 rounded">
                  {item.title}
                </span>
              </div>
              {/* Number */}
              <span
                className="absolute -bottom-2 -left-1 text-7xl md:text-8xl font-black leading-none select-none"
                style={{
                  WebkitTextStroke: "2px white",
                  color: "transparent",
                }}
              >
                {i + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-10 w-10 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-black/80"
        >
          <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
