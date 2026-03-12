const REASONS = [
  {
    title: "Enjoy on your TV",
    description:
      "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <rect x="4" y="6" width="40" height="28" rx="2" stroke="#E50914" strokeWidth="2" />
        <line x1="24" y1="34" x2="24" y2="42" stroke="#E50914" strokeWidth="2" />
        <line x1="16" y1="42" x2="32" y2="42" stroke="#E50914" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Download your shows to watch offline",
    description:
      "Save your favorites easily and always have something to watch.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="20" stroke="#E50914" strokeWidth="2" />
        <path d="M24 14v16m0 0l-6-6m6 6l6-6" stroke="#E50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Watch everywhere",
    description:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <rect x="2" y="8" width="28" height="20" rx="2" stroke="#E50914" strokeWidth="2" />
        <rect x="34" y="14" width="12" height="22" rx="2" stroke="#E50914" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="16" r="8" stroke="#E50914" strokeWidth="2" />
        <path d="M8 42c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="#E50914" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function ReasonsToJoin() {
  return (
    <section className="px-6 md:px-12 py-10">
      <h3 className="text-xl md:text-2xl font-bold mb-6">
        More Reasons to Join
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {REASONS.map((reason, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-[#1f1f2e] to-[#141424] rounded-xl p-6 flex flex-col justify-between min-h-[220px] border border-white/5"
          >
            <div>
              <h4 className="text-lg font-bold mb-2">{reason.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
            <div className="flex justify-end mt-4">{reason.icon}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
