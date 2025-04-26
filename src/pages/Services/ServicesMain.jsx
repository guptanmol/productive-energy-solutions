import React from "react";
import "../../index.css";
import Consulting from "../../images/Consulting.png";
import Online from "../../images/Online.png";
import Onsite from "../../images/Onsite.png";
import TrainingTabs from "../../components/ServicesComp";
import { PastWork } from "../../components/blocks/PastWork";
import Burns from "../../images/Burns.png";
import California from "../../images/California.png";
import Pennsylvania from "../../images/Pennsylvania.png";
import OnlineIcon from "../../images/Icons/Laptop with cursor.png";
import OnsiteIcon from "../../images/Icons/Meeting Room.png";
import ConsultingIcon from "../../images/Icons/Training.png";
import Saw_dust from "../../images/Saw-dust-Indiana.png";
import BOF from "../../images/BOF furnace-Indiana.png";
import blower from "../../images/blower-Columbia.png";
import { MainService } from "@/components/blocks/ServiceNav";
import info from "../../images/Icons/info.svg";

const ServiceData = {
  tabs: [
    {
      value: "tab-1",
      icon: <img src={OnlineIcon} alt="Online Training" className="h-4 w-4 shrink-0" />,
      label: "Online Training",
      content: {
        badge: "Modern Tactics",
        title: "Online Training",
        description:
          "Flexible, expert-led courses with live webcasts and self-paced modules, covering fan system optimization at all levels.",
        buttonText: "Learn More",
        imageSrc: Online,
        imageAlt: "Online training image",
        link: "/services/online-training"
      },
    },
    {
      value: "tab-2",
      icon: <img src={OnsiteIcon} alt="Onsite Training" className="h-4 w-4 shrink-0" />,
      label: "Onsite Training",
      content: {
        badge: "Interacive Learning",
        title: "Onsite Training",
        description:
          "Hands-on, in-person training tailored for industries, from introductory sessions to expert-level programs.",
        buttonText: "Learn More",
        imageSrc: Onsite,
        imageAlt: "Onsite training image",
        link: "/services/onsite-training",
      },
    },
    {
      value: "tab-3",
      icon: <img src={ConsultingIcon} alt="Consulting" className="h-4 w-4 shrink-0" />,
      label: "Consulting",
      content: {
        badge: "Customized Solutions",
        title: "Consulting",
        description:
          "Expert guidance to optimize fan, pump, and motor systems for improved productivity and energy savings.",
        buttonText: "Learn More",
        imageSrc: Consulting,
        imageAlt: "Consulting image",
        link: "/services/consulting",
      },
    },
  ],
};

const PastWorkData = {
  heading: "Blog Posts",
  description:
    "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
  posts: [
    {
      id: "1",
      title: "Burns Harbor Mill",
      subtitle: "Boosting Efficiency at Former ArcelorMittal Site",
      summary:
        "Efficiency upgrades were identified for the Burns Harbor steel mill, focusing on short-term implementation and measurable impact.",
      highlight: "$527,000/Year Savings Identified",
      image: Burns,
    },
    {
      id: "2",
      title: "Pennsylvania Steel Mill",
      subtitle: "Significant Energy Savings Identified",
      summary:
        "A mix of short, medium, and long-term projects were outlined to improve energy efficiency and reduce operational costs.",
      highlight: "$536,000/Year + $8.1 million Savings Identified",
      image: Pennsylvania,
    },
    {
      id: "3",
      title: "California Cement Plant",
      subtitle: "Major Cost Savings Identified",
      summary:
        "We uncovered multiple areas for energy optimization and cost reduction across project timelines at this cement facility.",
      highlight: "$735,000/Year + $3.3 Million Savings Identified",
      image: California,
    },
  ],
};

const ServicesMain = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4 bg-white">
      
      {/* SECTION 1: Our Services */}
      <section className="flex flex-col items-center w-full">
        <div className="Title text-center max-w-5xl space-y-2 mb-6">
          <p className="text-wrapper mb-1">Our Services</p>
          <p className="div mb-0">
            We provide training and consulting for fan, pump, and motor systems.
          </p>
        </div>
        <div className="w-full">
          <MainService {...ServiceData} />
        </div>
      </section>

      {/* SECTION 2: Images */}
      <section className="space-y-10 text-center pt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl">
          {[
            {
              src: Saw_dust,
              alt: "Field 1",
              caption: "Saw-dust collection duct work, Furniture manufacturing , Indiana"
            },
            {
              src: BOF,
              alt: "Field 2",
              caption: "BOF furnace pollution control fans, Burns Harbor, Indiana"
            },
            {
              src: blower,
              alt: "Field 3",
              caption: "High pressure blower, mine-mouth mineral processing facility, British Columbia, Canada"
            },
          ].map((img, index) => (
            <div key={index} className="group flex flex-col items-center transition-transform duration-300">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-xl transition-transform duration-300 max-w-5xl group-hover:-translate-y-2">
                {/* Image */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition duration-300"
                />

                {/* Info Icon */}
                <img
                  src={info}
                  alt="Info"
                  className="absolute top-3 left-3 w-6 h-6 opacity-50"
                />
              </div>

              {/* Caption below image on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 bg-red-900 rounded-xl px-4 py-2 text-sm text-center text-white shadow">
                {img.caption}
              </div>
            </div>
          ))}
        </div>


        </section>

      {/* SECTION 3: Our Previous Work */}
      <section className="flex flex-col items-center w-full mt-40">
        <div className="Title text-center max-w-5xl space-y-2 mb-6">
          <p className="text-wrapper mb-1">Our Previous Work</p>
          <p className="div mb-0">
            We provide expert training and consulting to optimize fan, pump, and motor systems.
            With flexible online courses, hands-on onsite training, and tailored consulting,
            we help businesses improve efficiency, performance, and energy savings.
          </p>
        </div>
        <div className="grid gap-y-20 w-full max-w-7xl mx-auto">
          <PastWork {...PastWorkData} />
        </div>
      </section>
    </div>
  );
};

export default ServicesMain;
