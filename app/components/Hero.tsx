import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Content collage"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.3)_0%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,1)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight tracking-tight">
          Unlimited movies, TV shows, and more
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-6">
          Starts at USD 9.99. Cancel anytime.
        </p>
        <button className="bg-[#E50914] hover:bg-[#f6121d] text-white text-lg md:text-xl font-semibold px-8 py-3 rounded flex items-center gap-2 transition-colors">
          Get Started
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom curve line */}
      <div className="absolute bottom-20 left-0 right-0">
        <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none">
          <path
            d="M0,40 Q720,0 1440,40"
            fill="none"
            stroke="#E50914"
            strokeWidth="6"
            strokeOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
}
