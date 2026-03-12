"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "What is The Truth Sin Límites?",
    answer:
      "The Truth Sin Límites is a streaming service that offers a wide variety of award-winning TV shows, movies, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want — all for one low monthly price.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Watch The Truth Sin Límites on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD 9.99 to USD 22.99 a month. No extra costs, no contracts.",
  },
  {
    question: "Where can I watch?",
    answer:
      "Watch anywhere, anytime. Sign in with your account on any device to watch instantly on the web at thetruth.com from your personal computer or on any internet-connected device that offers the app.",
  },
  {
    question: "How do I cancel?",
    answer:
      "The Truth Sin Límites is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees — start or stop your account anytime.",
  },
  {
    question: "What can I watch?",
    answer:
      "The Truth Sin Límites has an extensive library of feature films, documentaries, TV shows, and more. Watch as much as you want, anytime you want.",
  },
  {
    question: "Is it good for kids?",
    answer:
      "The experience for kids is included with your membership. Kids profiles come with parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-12 py-12 md:py-16 max-w-4xl mx-auto w-full">
      <h3 className="text-xl md:text-2xl font-bold mb-8">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col gap-3">
        {FAQ_ITEMS.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between bg-[#2d2d2d] hover:bg-[#3d3d3d] px-6 md:px-8 py-5 md:py-6 text-left transition-colors rounded-sm"
            >
              <span className="text-base md:text-lg font-normal text-white">
                {item.question}
              </span>
              <svg
                className={`w-6 h-6 flex-shrink-0 ml-4 transition-transform duration-300 ${
                  openIndex === i ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <div
              className={`faq-content ${openIndex === i ? "open" : ""}`}
            >
              <div className="bg-[#2d2d2d] px-6 md:px-8 py-5 md:py-6 mt-[1px]">
                <p className="text-base text-white/90 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
