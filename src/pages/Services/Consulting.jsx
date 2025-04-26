import React from "react";
import Deerfield from "../../images/Consulting/Strobe.png";
import Image1 from "../../images/Consulting/1.png";
import Image2 from "../../images/Consulting/2.png";
import Image3 from "../../images/Consulting/3.png";
import ServiceNavTabs from "@/components/blocks/ServiceTabs";
import { PastWork } from "../../components/blocks/PastWork";
import SouthIL from "../../images/Consulting/SouthIL.png";
import ArcMittal from "../../images/Consulting/ArcMittal.png";
import NorthCA from "../../images/Consulting/NorthCA.png";

// Material UI Icons
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import VerifiedIcon from "@mui/icons-material/Verified";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";

const PastWorkData = {
  heading: "Blog Posts",
  description:
    "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
  posts: [
    {
      id: "1",
      title: "Southern Illinois Manufacturer",
      subtitle: "Solving Critical Airflow Issues",
      summary:
        "We identified poor fan performance as the cause of insufficient airflow, helping the client get their contractor to fix the issue and ensure proper airflow for the painting process.",
      highlight: " ",
      image: SouthIL,
    },
    {
      id: "2",
      title: "Arcelor Mittal Steel Mill",
      subtitle: "Solving Combustion-Air Fan Issues",
      summary:
        "At the Burns Harbor steel mill, we resolved the problem with a 1,000 hp combustion-air fan, enabling the client to restart a critical boiler in their powerhouse with minimal delay.",
      highlight: "",
      image: ArcMittal,
    },
    {
      id: "3",
      title: "Northern Canadian Rockies Facility",
      subtitle: "Significant Energy Savings Identified",
      summary:
        "We flew in by company jet to this remote mine-mouth mineral processing facility and identified projects that could save over 10 million kWh per year, resulting in $500,000 in energy savings annually.",
      highlight: "",
      image: NorthCA,
    },
  ],
};

const ConsultingPage = () => {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 lg:px-8 py-12 space-y-10 max-w-6xl mx-auto">
      {/* Nav Tabs */}
      <section className="pt-8">
        <ServiceNavTabs />
      </section>

      <div className="space-y-24">
        {/* Hero Section */}
        <section className="space-y-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#8C0000] tracking-wide">Consulting</h1>
          <p className="text-lg sm:text-xl max-w-5xl mx-auto tracking-wide">
            With over 25 years in business, we’ve identified more than $50 million in potential annual energy savings across
            150+ industrial facilities, delivering significant benefits in energy efficiency, production, and safety.
          </p>
          <div className="relative w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow">
          {/* Image */}
          <img
            src={Deerfield}
            alt="Onsite Training"
            className="w-full h-auto object-cover"
          />

          {/* Desktop caption overlay */}
          <div className="hidden sm:block absolute bottom-0 left-0 right-0 bg-white/70 text-gray-800 text-md px-4 py-2 font-medium text-center">
            Using the strobe tachometer to measure the fan speed at a cement plant
          </div>
        

        {/* Mobile caption below image */}
        <p className="block sm:hidden text-sm text-center text-gray-700 mt-2">
          Using the strobe tachometer to measure the fan speed at a cement plant
        </p>
        </div>

        </section>

        {/* Our Work in the Field */}
        <section className="space-y-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Work in the Field</h2>
          <p className="text-lg max-w-4xl mx-auto">
            Our consulting services are primarily offered across the United States, including Wisconsin, Oregon, Idaho,
            California, New York, Minnesota, Iowa, Indiana, and Massachusetts. We provide expert guidance in fan, pump, and
            motor system optimization to improve efficiency and performance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              src: Image2,
              alt: "Field 1",
              caption: "Cement raw mill inlet ductwork"
            },
            {
              src: Image3,
              alt: "Field 2",
              caption: "Cement clinker-cooler fan with mostly closed inlet damper"
            },
            {
              src: Image1,
              alt: "Field 3",
              caption: "Exhaust fans atop the homogenized materials silo at a cement plant"
            },
          ].map((img, index) => (
            <div key={index} className="group flex flex-col items-center transition-transform duration-300">
              {/* Image container */}
              <div className="relative overflow-hidden rounded-xl transition-transform duration-300 w-full group-hover:-translate-y-2">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition duration-300"
                />
              </div>

              {/* Caption below image on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 bg-red-900 rounded-xl px-4 py-1 text-sm text-center text-white shadow">
                {img.caption}
              </div>
            </div>
          ))}
        </div>

        </section>


        {/* What is Included */}
        <section className="space-y-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14274A]">What is included?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We offer energy assessments and problem-solving for industrial systems.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Tailored Recommendations",
                desc: "Custom energy solutions for each client, based on their unique needs and challenges.",
              },
              {
                title: "Energy Assessments",
                desc: "Thorough testing and assessment of existing systems to pinpoint areas for improvement.",
              },
              {
                title: "Operational Benefits",
                desc: "Our solutions often result in benefits such as enhanced production, quieter operation, and improved safety.",
              },
              {
                title: "Problem Solving",
                desc: "Addressing system inefficiencies, waste reduction, and reliability concerns.",
              },
            ].map((item, index) => (
              <div key={index} className="p-4 rounded-xl bg-white shadow border space-y-3">
                <div className="w-10 h-10 text-white bg-[#8C0000] p-2 rounded-full mx-auto flex items-center justify-center">
                  {index === 0 && <TipsAndUpdatesIcon />}
                  {index === 1 && <AnalyticsIcon />}
                  {index === 2 && <VerifiedIcon />}
                  {index === 3 && <BuildCircleIcon />}
                </div>
                <h3 className="font-semibold text-center">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Previous Work */}
        <section className="space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14274A]">Our Previous Work</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We provide expert training and consulting to optimize fan, pump, and motor systems.
            With flexible online courses, hands-on onsite training, and tailored consulting,
            we help businesses improve efficiency, performance, and energy savings.
          </p>
          <div className="grid gap-y-10 w-full max-w-7xl mx-auto">
            <PastWork {...PastWorkData} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConsultingPage;
