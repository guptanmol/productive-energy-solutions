import React from "react";

// Icon Imports
import BestEmployee from "../../images/icons/Online/best employee.png";
import BusinessConference from "../../images/icons/Online/Business conference.png";
import Graduate from "../../images/icons/Online/Graduate.png";
import Laptop from "../../images/icons/Online/Laptop.png";
import Learning from "../../images/icons/Online/learning.png";
import People from "../../images/icons/Online/People.png";
import PlayButton from "../../images/icons/Online/play button.png";
import Review from "../../images/icons/Online/review.png";
import Test from "../../images/icons/Online/Test.png";
import Video from "../../images/icons/Online/Video.png";
import tick from "../../images/icons/Online/tick.png";
import Online from "../../images/Online.png";
import AnimatedButton from "@/components/ui/AnimatedButton";
import ServiceNavTabs from "@/components/blocks/ServiceTabs";

const OnlineTrainingPage = () => {
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
          Online Training
        </h1>
        <p className="text-lg sm:text-lg max-w-5xl mx-auto tracking-wide">
          Our Fan Engineering Foundations courses, offered in partnership with AMCA International, provide a flexible online learning experience through live webcasts and self-paced modules.
        </p>
        <div className="relative flex justify-center">
          <img src={Online} alt="Training Visual" className="rounded-xl w-full max-w-6xl" />
          <div className="absolute bottom-6 right-2 sm:right-4">
            <a
              href="https://learning.amca.org/catalog#form_type=catalog-quick-filter&page=1&webinar_type=0&sort_by=new_to_old&favorite_products=0&keywords=Wroblewski"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimatedButton label="Explore Courses" />
            </a>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Professional Training in Partnership with AMCA International
        </h2>
        <p className="text-lg">
          Experience our innovative hybrid learning approach combining live webcasts with self-paced modules, designed to fit your schedule while maintaining the highest standards of engineering education.
        </p>
        <div className="flex justify-center items-center gap-8 flex-wrap">
  {/* Live Webcast */}
  <div className="flex items-center gap-3">
    <img src={Video} alt="Live Webcast" className="w-8 h-8 object-contain" />
    <span className="text-base font-semibold">Live Webcast</span>
  </div>

  {/* Divider */}
  <div className="h-8 border-l-2 border-[#8C0000]" />

  {/* Self-paced Learning */}
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-[#8C0000] flex items-center justify-center">
      <img src={Laptop} alt="Self-paced Learning" className="w-8 h-8 object-contain" />
    </div>
    <span className="text-base font-semibold">Self-paced Learning</span>
  </div>
</div>

      </section>

      {/* What's Included */}
      <section className="space-y-10 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14274A]">
          What is included?
        </h2>
        <p className="text-lg">
          Our comprehensive training program combines live instruction with flexible self-paced learning, ensuring a well-rounded educational experience.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {[
            {
              title: "Multi-Level Curriculum",
              desc: "Fundamental to advanced fan optimization training for experienced staff and onboarding of new employees.",
              icon: Graduate,
            },
            {
              title: "Practical Applications",
              desc: "Real-world case studies and hands-on exercises.",
              icon: BusinessConference,
            },
            {
              title: "Expert Guidance",
              desc: "Developed and taught by industry leader Ron Wroblewski.",
              icon: BestEmployee,
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-lg border shadow-sm bg-white space-y-3 text-center">
              <img src={item.icon} alt={item.title} className="w-10 h-10 mx-auto object-contain" />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-lg">
          In addition to the weekly series, anyone can sign up for their own self-paced learning through the AMCA online Learning Management System (LMS).
        </p>
      </section>

      {/* Course Levels */}
      <section className="space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14274A]">Course Levels</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              level: "Level I",
              title: "Foundations",
              points: [
                "Basic principles",
                "Fan types and selection",
                "Performance curves"
              ]
            },
            {
              level: "Level II",
              title: "Troubleshooting and Efficiency",
              points: [
                "System analysis",
                "Energy efficiency",
                "Problem diagnosis"
              ]
            },
            {
              level: "Level III",
              title: "Verification and Optimization",
              points: [
                "Performance testing",
                "Advanced diagnostics",
                "System integration"
              ]
            }
          ].map((course, i) => (
            <div key={i} className="p-6 border rounded-xl bg-white shadow-sm space-y-3 text-left">
              <h4 className="font-bold text-[#8C0000]">{course.level}</h4>
              <p className="font-semibold">{course.title}</p>
              <ul className="text-sm space-y-1">
                {course.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <img src={tick} alt="" className="w-4 h-4" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Experience */}
      <section className="space-y-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#14274A]">The Learning Experience</h2>
        <div className="grid gap-6 md:grid-cols-2 text-left">
          <div className="bg-gray-100 p-6 rounded-xl space-y-3">
            <h3 className="text-2xl font-bold text-[#8C0000]">300+ Participants</h3>
            <p>Covers fundamental to advanced fan optimization.</p>
            <ul className="text-sm space-y-1">
              <li className="flex items-center gap-2">
                <img src={People} alt="Class Size" className="w-4 h-4" />
                Limited class sizes for better interaction
              </li>
              <li className="flex items-center gap-2">
                <img src={Review} alt="Peer-reviewed" className="w-4 h-4" />
                Peer-reviewed content
              </li>
            </ul>
          </div>
          <div className="grid gap-4">
            {[
              { label: "Recorded Sessions", icon: PlayButton },
              { label: "LMS Access", icon: Learning },
              { label: "Progress Tracking", icon: Test },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-white border rounded-lg shadow-sm flex items-center gap-3">
                <img src={item.icon} alt={item.label} className="w-10 h-10 object-contain" />
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default OnlineTrainingPage;
