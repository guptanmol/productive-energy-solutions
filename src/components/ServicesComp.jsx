import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import online from "../images/Online.png"
import onsite from "../images/Onsite.png"
import consulting from "../images/Consulting.png"

const trainingOptions = [
  {
    id: "online",
    title: "Online Training",
    icon: "📺",
    description:
      "Flexible, expert-led courses with live webcasts and self-paced modules, covering fan system optimization at all levels.",
    ctaText:
      "Our online training includes live webcasts, self-paced learning modules, and recorded sessions, ensuring flexibility without compromising depth.",
      image: online, // replace with your path
  },
  {
    id: "onsite",
    title: "Onsite Training",
    icon: "🏗️",
    description:
      "Hands-on, in-person training tailored for industries, from introductory sessions to expert-level programs.",
    ctaText:
      "Our hands-on training is designed for utility companies, manufacturers, and industry professionals, offering direct interaction and real-world application.",
      image: onsite,
  },
  {
    id: "consulting",
    title: "Consulting",
    icon: "🛠️",
    description:
      "Expert guidance to optimize fan, pump, and motor systems for improved efficiency and energy savings.",
    ctaText:
      "Our consulting services deliver results tailored to your operational challenges and energy optimization goals.",
      image: consulting,
  },
];

export default function TrainingTabs() {
  const [selectedTab, setSelectedTab] = useState("online");
  const active = trainingOptions.find((opt) => opt.id === selectedTab);

  return (
    <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-xl shadow-md overflow-hidden w-full max-w-7xl mx-auto">
      
      {/* Left Tabs */}
      <div className="flex flex-col w-full lg:w-96 bg-gray-100">
  {trainingOptions.map((option) => {
    const isActive = selectedTab === option.id;
    return (
      <button
        key={option.id}
        onClick={() => setSelectedTab(option.id)}
        className={`text-left transition-all duration-300 ease-in-out py-6 px-4 border-b border-gray-300 ${
          isActive ? "bg-red-900 text-white" : "hover:bg-red-100 text-red-900"
        }`}
      >
        <div className="flex items-center gap-3 text-lg font-semibold">
          <span className="text-2xl">{option.icon}</span>
          {option.title}
        </div>
        {isActive && (
          <p className="mt-4 text-sm font-normal leading-relaxed">
            {option.description}
          </p>
        )}
      </button>
    );
  })}
</div>

      {/* Right Content */}
      {/* Right Content */}
<div className="flex-1 min-w-0 md:min-h-[600px] md:min-w-[900px] p-6 flex flex-col justify-between">

  <img
    src={active.image}
    alt={active.title}
    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
  />
  <div className="mt-6 space-y-4">
    <p className="text-black text-base">{active.ctaText}</p>
    <a
      href="#"
      className="inline-flex items-center bg-red-900 text-white px-6 py-2 rounded-lg hover:bg-red-800 transition"
    >
      Learn More
      <ArrowRight className="ml-2 w-4 h-4" />
    </a>
  </div>
</div>

    </div>
  );
}
