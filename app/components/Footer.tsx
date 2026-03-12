const FOOTER_LINKS = [
  ["FAQ", "Help Center", "Account", "Media Center"],
  ["Investor Relations", "Jobs", "Ways to Watch", "Terms of Use"],
  ["Privacy", "Cookie Preferences", "Corporate Information", "Contact Us"],
  ["Speed Test", "Legal Notices", "Only on The Truth", ""],
];

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 md:py-16 max-w-5xl mx-auto w-full">
      {/* CTA */}
      <div className="mb-10">
        <button className="bg-[#E50914] hover:bg-[#f6121d] text-white text-lg font-semibold px-8 py-3 rounded flex items-center gap-2 transition-colors">
          Get Started
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Contact */}
      <p className="text-sm text-white/70 mb-8">
        Questions? Call{" "}
        <a href="tel:800-542-5607" className="underline hover:text-white/80">
          800-542-5607
        </a>
      </p>

      {/* Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4 mb-10">
        {FOOTER_LINKS.flat()
          .filter(Boolean)
          .map((link, i) => (
            <a
              key={i}
              href="#"
              className="text-sm text-white/60 underline hover:text-white/90 transition-colors py-1"
            >
              {link}
            </a>
          ))}
      </div>

      {/* Language Selector */}
      <div className="relative inline-block mb-8">
        <select className="appearance-none bg-transparent border border-white/30 text-white text-sm rounded px-3 py-2 pr-8 cursor-pointer">
          <option value="en" className="bg-black">
            English
          </option>
          <option value="es" className="bg-black">
            Español
          </option>
        </select>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xs pointer-events-none">
          ▼
        </span>
      </div>

      {/* Country */}
      <p className="text-sm text-white/50">The Truth Sin Límites</p>
    </footer>
  );
}
