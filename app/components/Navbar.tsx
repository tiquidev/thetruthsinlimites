export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-transparent">
      <div className="flex flex-col items-center gap-0">
        <h1 className="text-[#E50914] text-2xl md:text-3xl font-extrabold tracking-wider select-none">
          THE TRUTH
        </h1>
        <h2 className="text-[#E50914] font-extrabold tracking-wider select-none" style={{marginTop: "-6px"}}>SIN LÍMITES</h2>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <select className="appearance-none bg-transparent border border-white/40 text-white text-sm rounded px-3 py-1.5 pr-8 cursor-pointer">
            <option value="en" className="bg-black">English</option>
            <option value="es" className="bg-black">Español</option>
          </select>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-xs pointer-events-none">
            ▼
          </span>
        </div>
        <button className="bg-[#E50914] hover:bg-[#f6121d] text-white text-sm font-semibold px-4 py-1.5 rounded transition-colors">
          Sign In
        </button>
      </div>
    </nav>
  );
}
