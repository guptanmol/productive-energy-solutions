import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import heroImage from "../images/heroimage.png";
import LookingUp from "../images/Faded_home.png";
import Online from "../images/Online.png";
import Onsite from "../images/Onsite.png";
import Consulting from "../images/Consulting.png";
import CementIcon from "../images/industries/Cement Bag.svg";
import SteelIcon from "../images/industries/Steel Tent.svg";
import IronIcon from "../images/industries/Iron Ore.svg";
import AluminumIcon from "../images/industries/Electronics.svg";
import PulpIcon from "../images/industries/Paper.svg";
import GlassIcon from "../images/industries/Glass Recycle Container.svg";
import TaconiteIcon from "../images/industries/Tire Iron.svg";
import FurnitureIcon from "../images/industries/Chair.svg";
import AutoIcon from "../images/industries/Wheel.svg";
import SemiIcon from "../images/industries/Sheet Metal.svg";
import empty from "../images/industries/empty.svg";
import AMCA from "../images/Clients/AMCA.png";
import UNIDO from "../images/Clients/UNIDO.png";
import USDOE from "../images/Clients/US DOE.png";
import { TestimonialsSection } from "../components/blocks/testimonials"
import { WorldMap } from "@/components/ui/world-map"
import { motion } from "framer-motion";
import Alfred from '../images/Avatars/Alfred.png'
import Bill from '../images/Avatars/Bill.png'
import Deborah from '../images/Avatars/Deborah.png'
import Eddie from '../images/Avatars/Eddie.png'
import Wei from '../images/Avatars/Wei.png'
import MHero from '../images/MHero.png'

const testimonials = [
  {
    author: {
      name: "Alfred Hartzenburg",
      handle: "National Project Manager | CSIR Industrial Energy Efficiency Project | South Africa",
      avatar: Alfred
    },
    text: "Your image evoked many happy memories! What a memorable time and fun learning experience it was not only for the fan trainers in-training but also for the candidates, South African industry and UNIDO. It changed forever the way we viewed, measured and optimised fan systems. We remain eternally grateful to you and Bill Cory for debunking the scientific approach and methodology in unlocking significant energy savings by improving fan system performance. Thank you, from a huge FAN!",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7292335924003119105/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7292335924003119105%2C7292483465369784320%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287292483465369784320%2Curn%3Ali%3Aactivity%3A7292335924003119105%29"
  },
  {
    author: {
      name: "Bill Hunter",
      handle: "West VP of Sales | Fans and Turbine Products | Process Barron",
      avatar: Bill
    },
    text: "Your image evoked many happy memories! What a memorable time and fun learning experience it was not only for the fan trainers in-training but also for the candidates, South African industry and UNIDO. It changed forever the way we viewed, measured and optimised fan systems. We remain eternally grateful to you and Bill Cory for debunking the scientific approach and methodology in unlocking significant energy savings by improving fan system performance. Thank you, from a huge FAN!",
    href: "https://www.linkedin.com/in/ronald-wroblewski-4a1123161/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    author: {
      name: "Wei Guo",
      handle: "Program Manager | Oak Ridge National Labs | US Department of Energy",
      avatar: Wei
    },
    text: "Ron is a great expert on fan systems and motor systems. He delivered Virtual In-Plant Trainings for fan systems and motor systems for US DOE Better Plants partners in 2021. Hope I will work with Ron again in the near future to deliver more trainings to help US manufacturers to improve energy efficiency and reduce carbon emissions.",
    href: "https://www.linkedin.com/in/ronald-wroblewski-4a1123161/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    author: {
      name: "Eddie Raad",
      handle: "Owner and General Manager | CFW Fans | Cape Town, South Africa",
      avatar: Eddie
    },
    text: "Ron is a natural tutor with an extraordinary ability to impart both theoretical concepts and practical skills with ease and elegance. His wealth of experience, methodologies, and tools for fan energy optimization are truly commendable. I am forever grateful for his inspiration and influence in developing my professional skills.",
    href: "https://www.linkedin.com/in/ronald-wroblewski-4a1123161/details/recommendations/?detailScreenTabIndex=0"
  },
  {
    author: {
      name: "Deborah Spring Laurel",
      handle: "President and Management Trainer | Laurel and Associates",
      avatar: Deborah
    },
    text: "Ron was an engineer who was comfortable giving lectures, but he decided that he wanted to do more than have his participants sit passively. He wanted to help them build the skills they needed by using interactive learning activities. If you need industrial fan system training, Ron is the person you want to hire!",
    href: "https://www.linkedin.com/in/ronald-wroblewski-4a1123161/details/recommendations/?detailScreenTabIndex=0"
  },

]


const industries = [
  { name: "Cement Production", icon: CementIcon },
  { name: "Steel making", icon: SteelIcon },
  { name: "Iron foundries", icon: IronIcon },
  { name: "Aluminum production", icon: AluminumIcon },
  { name: "Pulp and paper mills", icon: PulpIcon },
  { name: "Glass making", icon: GlassIcon },
  { name: "Taconite processing", icon: TaconiteIcon },
  { name: "Furniture and wood products", icon: FurnitureIcon },
  { name: "Automotive parts", icon: AutoIcon },
  { name: "Semi-conductor production", icon: SemiIcon },

];

const cards = [
  {
    title: "Online Training",
    text: "Flexible courses with live webcasts and self-paced learning.",
    image: Online,
    link: "/services/online-training"
  },
  {
    title: "Onsite Training",
    text: "Hands-on industry training, from basics to expert level.",
    image: Onsite,
    link: "/services/onsite-training"
  },
  {
    title: "Consulting",
    text: "Expert solutions for optimizing system efficiency and performance.",
    image: Consulting,
    link: "/services/consulting"
  }
];

const Home = () => {
  const [showHomeContactPopup, setShowHomeContactPopup] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20 px-4 bg-white space-y-[180px]">
        {/* Section 1 */}
        <section className="flex flex-col items-center w-full space-y-[30px]">
  <div className="Title text-center space-y-[14px] max-w-5xl">
    <p className="text-wrapper">Optimizing Energy Efficiency, Enhancing Performance</p>
    <p className="div">
      Unbiased training and consulting to improve mechanical energy systems, reduce waste, and maximize productivity and efficiency.
    </p>
  </div>

  {/* Desktop Image + CTA */}
  <div className="relative max-w-5xl w-full hidden md:block">
    <img
      src={heroImage}
      alt="Energy systems in action"
      className="w-full"
    />
    <div
      className="absolute bottom-4 right-20 group cursor-pointer"
      onClick={() => setShowHomeContactPopup(true)}
    >
      <div className="relative w-[206px] h-[66px]">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-[23px] transition-colors duration-300 group-hover:bg-[#930000]" />
        <div className="absolute w-[57px] h-[53px] top-[6px] right-[8px] bg-[#930000] rounded-[22px] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        <div className="absolute top-[21px] left-[29px] text-white font-helvetica text-[20px]">Reach Out</div>
      </div>
    </div>
  </div>

  {/* Mobile Image + Centered CTA */}
  <div className="md:hidden w-full max-w-5xl space-y-4 flex flex-col items-center">
    <img
      src={MHero}
      alt="Energy systems mobile"
      className="w-full"
    />
    <div
      className="relative bottom-1  group cursor-pointer"
      onClick={() => setShowHomeContactPopup(true)}
    >
      <div className="relative w-[206px] h-[66px]">
        <div className="absolute inset-0 bg-gray-300 shadow-xl backdrop-blur-md rounded-[23px] transition-colors duration-300 group-hover:bg-[#930000]" />
        <div className="absolute w-[57px] h-[53px] top-[6px] right-[8px] bg-[#930000] rounded-[22px] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        <div className="absolute top-[21px] left-[29px] text-red-900 font-helvetica text-[20px]">Reach Out</div>
      </div>
    </div>
  </div>
</section>


      {/* Section 2 */}
      <section className="flex flex-col items-center w-full space-y-[30px]">
        <div className="Title text-center max-w-5xl space-y-[14px]">
          <p className="text-wrapper">Why Choose Us?</p>
          <p className="div">We provide training and consulting for fan, pump, and motor systems.</p>
        </div>
        <img src={LookingUp} alt="Why choose us" className="w-full object-cover" />
      </section>

      {/* Section 3 */}
      <section className="flex flex-col items-center max-w-7xl w-full space-y-[30px] ">
        <div className="Title text-center space-y-[14px] mb-[40px]">
          <p className="text-wrapper">Our Services</p>
          <p className="div">We provide training and consulting.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 px-2">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="max-w-sm w-full bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden transition-colors duration-300 hover:bg-red-900 group"
            >
              <div className="overflow-hidden">
                <img
                  className="w-full h-[200px] object-cover rounded-t-xl transform transition-transform duration-300 group-hover:scale-105"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white">{card.title}</h5>
                <p className="text-gray-700 group-hover:text-gray-100">{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex flex-col items-center w-full space-y-[30px]">
        <div className="Title text-center max-w-5xl space-y-[14px]">
          <p className="text-wrapper">Serving Clients Throughout the US and Around the World</p>
          <p className="div">Since 1998, We have provided training for fan, pump and motor system optimization.</p>
        </div>
        <div className="py-16 bg-white w-full flex justify-center items-center">
          <div className="w-full max-w-7xl flex justify-center items-center">
            <WorldMap
              dots={[
                { start: { lat: 37.0902, lng: -95.7129 }, end: { lat: 36.7783, lng: -119.4179 } },
                { start: { lat: 37.0902, lng: -95.7129 }, end: { lat: 60.0522, lng: -118.2437 } },
                { start: { lat: 37.0902, lng: -95.7129 }, end: { lat: 25.7617, lng: -80.1918 } },
                { start: { lat: 37.0902, lng: -95.7129 }, end: { lat: 48.3794, lng: 31.1656 } },
                { start: { lat: 37.0902, lng: -95.7129 }, end: { lat: -30.5595, lng: 22.9375 } },
                { start: { lat: -30.5595, lng: 22.9375 }, end: { lat: 15.8700, lng: 100.9925 } },
                { start: { lat: 48.3794, lng: 31.1656 }, end: { lat: 61.5240, lng: 80.3188 } },
                { start: { lat: -30.5595, lng: 22.9375 }, end: { lat: 4.2105, lng: 101.9758 } }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="flex flex-col items-center w-full space-y-[30px]">
        <div className="Title text-center max-w-5xl space-y-[14px]">
          <p className="text-wrapper">Industries We Serve</p>
          <p className="div">We provide assessments and solving problems in industrial fan, pumps and motor systems.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-3 bg-[#F6F0F0] rounded-lg text-[#333] font-medium text-sm shadow-sm">
              <img src={industry.icon} alt={industry.name} className="w-5 h-5" />
              {industry.name}
            </div>
          ))}
        </div>
      </section>

      {/* Section 6 */}
      <section className="flex flex-col items-center w-full space-y-[30px]">
        <div className="Title text-center max-w-5xl space-y-[14px]">
          <p className="text-wrapper">Clients We Have Served</p>
          <p className="div">We have partnered with utility companies, government, and non-government organizations to provide training</p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-[200px] gap-y-[20px] max-w-7xl mx-auto">
          <img className="w-[200px] h-[200px] object-contain rounded-t-lg" src={AMCA} />
          <img className="w-[200px] h-[200px] object-contain rounded-t-lg" src={UNIDO} />
          <img className="w-[200px] h-[200px] object-contain rounded-t-lg" src={USDOE} />
        </div>
      </section>

      {/* Section 7 */}
      <section className="flex flex-col items-center w-full space-y-[15px]">
        <div className="Title text-center max-w-5xl space-y-[14px]">
          <p className="text-wrapper">What are people saying about Productive Energy Solutions?</p>
        </div>
        <div className="w-full mt-10">
          <TestimonialsSection testimonials={testimonials} />
        </div>
      </section>
    </div>
    {/* Contact popup for Home page */}
    {showHomeContactPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-2xl p-6 space-y-4 shadow-xl max-w-sm w-full text-center">
            <h2 className="text-lg font-bold text-gray-800">Get in Touch</h2>

            <div className="space-y-2">
              <a
                href="mailto:info@productiveenergy.com?subject=Requesting&[Consulting&or&Training]&Services"
                className="block w-full px-4 py-2 bg-red-800 text-white rounded-full hover:bg-gray-900"
              >
                Email Us
              </a>

              <button
                onClick={() => {
                  navigator.clipboard.writeText("info@productiveenergy.com");
                  alert("Email address copied!");
                }}
                className="block w-full px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
              >
                Copy Email Address
              </button>

              <div className="text-sm text-gray-700 mt-2">
                <p>Or reach us at:</p>
                <p className="font-semibold">+1 (608) 232-1861</p>
              </div>
            </div>

            <button
              onClick={() => setShowHomeContactPopup(false)}
              className="mt-4 text-sm text-gray-500 underline hover:text-gray-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
