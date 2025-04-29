import React from "react";
import Deerfield from "../../images/Onsite/Deerfield.png";
import Image1 from "../../images/Onsite/1.png";
import Image2 from "../../images/Onsite/2.png";
import Image3 from "../../images/Onsite/3.png";
import ServiceNavTabs from "@/components/blocks/ServiceTabs";
import info from "../../images/Icons/info.svg";
import SchoolIcon from '@mui/icons-material/School';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TopicIcon from '@mui/icons-material/Topic';
import ScheduleIcon from '@mui/icons-material/Schedule';
import HandymanIcon from '@mui/icons-material/Handyman';
import FactoryIcon from '@mui/icons-material/Factory';

const OnsiteTrainingPage = () => {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-12 space-y-10 max-w-6xl mx-auto">
      {/* Nav Tabs */}
      <section className="pt-8">
        <ServiceNavTabs />
      </section>

      <div className="space-y-24">
        {/* Hero Section */}
        <section className="space-y-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8C0000] tracking-wide">
            Onsite Training
          </h1>
          <p className="text-lg sm:text-xl max-w-5xl mx-auto tracking-wide">
            Comprehensive in-person training on fan, pump, and motor system optimization, tailored for all expertise levels.
          </p>
          <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow">
          {/* Image */}
          <img
            src={Deerfield}
            alt="Onsite Training"
            className="w-full h-auto object-cover"
          />

         {/* Desktop caption overlay */}
         <p className="text-md text-gray-700 mt-4 max-w-6xl text-center pb-4">
          Deerfield woods training center, Burns Harbor, Indiana. Class photo for Intro to fan and pump system optimization training.
          </p>
          <p className="block sm:hidden text-sm text-center text-gray-700 mt-2 pb-4">Deerfield woods training center, Burns Harbor, Indiana.  Class photo for Intro to fan and pump system optimization training.</p>
        </div>

        </section>

        {/* Our Work in the Field */}
        <section className="space-y-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Work in the Field</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We have conducted onsite training in seven countries worldwide, including South Africa, China, Malaysia, Thailand,
            Ukraine, Russia, and the United States, equipping professionals with expert knowledge in fan system optimization.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              src: Image2,
              alt: "Field 1",
              caption: "Mombassa Kenya, class photo: Introduction to fan, pump and compressor systems training"
            },
            {
              src: Image1,
              alt: "Field 2",
              caption: "Ukraine expert candidates measuring fan performance in-situ"
            },
            {
              src: Image3,
              alt: "Field 3",
              caption: "Ukraine class photo: Fans systems optimization expert level candidates"
            },
          ].map((img, index) => (
            <div key={index} className="group flex flex-col items-center transition-transform duration-300">
              {/* Image container */}
              <div className="relative overflow-hidden transition-transform duration-300 w-full group-hover:-translate-y-2">
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

        {/* About the Service */}
        <section className="space-y-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14274A]">About the Service</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Since 1998, we have been delivering training for fan, pump, and motor system optimization in various formats to
            accommodate different audiences. Our training ranges from short, half-day sessions to intensive 10-day expert-level
            programs for organizations like UNIDO.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Half-Day & One-Day Training",
                desc: [
                  "Engaging sessions for utility clients",
                  "VFDs, fan and pump optimization",
                  "HVAC systems"
                ],
              },
              {
                title: "In-House Training",
                desc: [
                  "Customized courses for manufacturers",
                  "Enhances technical expertise",
                  "Suitable for all experience levels"
                ],
              },
              {
                title: "Expert-Level Training",
                desc: [
                  "Intensive global programs",
                  "Focus on fan system assessment",
                  "Measurement and optimization"
                ],
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow space-y-4">
                <div className="w-10 h-10 text-white bg-[#8C0000] p-2 rounded-full mx-auto flex items-center justify-center">
                  {idx === 0 && <SchoolIcon />}
                  {idx === 1 && <HomeRepairServiceIcon />}
                  {idx === 2 && <EngineeringIcon />}
                </div>
                <h3 className="font-semibold text-center">{item.title}</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {item.desc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* What's Included */}
        <section className="space-y-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14274A]">What is included?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Our onsite training includes targeted topics, flexible delivery formats, and hands-on learning, tailored to industry needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Key Topics",
                points: ["Motors", "VFDs", "Fan and pump optimization", "HVAC systems"],
              },
              {
                title: "Flexible Formats",
                points: ["Half-day", "One-day", "Expert-level training"],
              },
              {
                title: "Hands-on Learning",
                points: ["System basics", "Practical measurement", "System performance analysis"],
              },
              {
                title: "Industry Focus",
                points: ["Manufacturers", "Technical teams"],
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border space-y-4">
                <div className="w-10 h-10 text-white bg-[#8C0000] p-2 rounded-full mx-auto flex items-center justify-center">
                  {idx === 0 && <TopicIcon />}
                  {idx === 1 && <ScheduleIcon />}
                  {idx === 2 && <HandymanIcon />}
                  {idx === 3 && <FactoryIcon />}
                </div>
                <h3 className="font-semibold text-center">{item.title}</h3>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnsiteTrainingPage;
