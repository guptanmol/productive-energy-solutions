import React from "react";
import Image1 from "../images/About/1.png";
import Image2 from "../images/About/2.png";
import Image3 from "../images/About/3.png";
import Image4 from "../images/About/4.png";
import Ron from "../images/About/Ron.png";
import map from "../images/About/ContactMap.png"
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";


const AboutContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4 bg-white space-y-[120px]">

      {/* About Us Section */}
      <section className="flex flex-col items-center w-full space-y-[30px] max-w-5xl text-center">
        <div className="Title space-y-[14px]">
          <p className="text-wrapper">About Us</p>
          <p className="div text-[#8C0000]">
            We optimize industrial and commercial fan, pump, and blower systems for efficiency, cost savings, and sustainability.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
  {[
    {
      src: Image3,
      alt: "Field 1",
      caption: "A rare photo of Ron without a mustache",
    },
    {
      src: Image2,
      alt: "Field 2",
      caption: "Thai fan expert candidates with our cement plant escort",
    },
    {
      src: Image4,
      alt: "Field 3",
      caption: "Holcim Cement,  In-Plant fans training, Ravena, New York",
    },
    {
      src: Image1,
      alt: "Field 4",
      caption: "Malaysian fan expert candidates use a Pitot tube to measure fan performance in-situ at Hevea Board",
    },
  ].map((img, index) => (
    <div key={index} className="group flex flex-col items-center justify-center transition-transform duration-300">
      <div className="relative rounded-xl transition-transform duration-300 w-full  flex items-center justify-center group-hover:-translate-y-2">
        <img
          src={img.src}
          alt={img.alt}
          className="object-cover h-full w-full transition duration-300 rounded-xl"
        />
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1 bg-red-900 text-white text-xs text-center px-2 py-1 rounded-xl shadow-sm">
        {img.caption}
      </div>
    </div>
  ))}
</div>

      </section>

      {/* Productivity & Efficiency Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 text-left max-w-5xl mx-auto py-16 px-4">
        {/* Left Side (Image + Caption) */}
        <div className="flex flex-col items-center lg:items-start lg:w-1/2">
          <img
            src={Ron}
            alt="Ron Wroblewski, PE"
          />
          <p className="text-sm text-gray-700 mt-4 max-w-md">
            <span className="font-semibold">With 38+ years of experience,</span> Ron Wroblewski, PE is an expert in system design,
            analysis, and system optimization.
          </p>
        </div>

        {/* Right Side (Text content) */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-[#8C0000]">
            Optimizing Energy Usage for Productivity and Profitability
          </h2>
          <p className="text-base text-gray-800">
            As a highly rated trainer, Ron conducts specialized courses for DOE, UNIDO, and AMCA International, equipping professionals
            with the skills to improve energy efficiency.
          </p>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">
              We lead energy efficiency for a sustainable future
            </h3>
            <p className="text-base text-gray-700">
              Productive Energy Solutions, LLC helps industrial and commercial facilities optimize energy systems for efficiency,
              cost savings, and sustainability. Our solutions drive economic and environmental benefits, making us a trusted leader
              in energy efficiency.
            </p>
            <p className="italic text-sm text-slate-700 border-l-4 border-[#8C0000] pl-4">
              With decades of expertise, we’ve partnered with organizations like DOE, UNIDO, and AMCA International to deliver
              specialized training and consulting worldwide.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="flex flex-col items-center w-full space-y-[30px] max-w-5xl text-center">
  <div className="Title space-y-[14px]">
    <p className="text-wrapper">Contact Us</p>
    <p className="div text-[#8C0000] text-sm">
      So we can help you solve your fan and pump problems or train your personnel.
    </p>
  </div>

  <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
    {/* Contact Info */}
    <div className="space-y-6 text-left text-sm w-full md:w-1/2">
      <div className="flex items-start gap-2">
        <div className="w-6 h-6 text-white bg-[#8C0000] p-1 rounded-full flex items-center justify-center">
          <PhoneIcon style={{ fontSize: 16 }} />
        </div>
        <div>
          <p className="font-medium">Phone Number</p>
          <p>+1 608 232 1861</p>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <div className="w-6 h-6 text-white bg-[#8C0000] p-1 rounded-full flex items-center justify-center">
          <EmailIcon style={{ fontSize: 16 }} />
        </div>
        <div>
          <p className="font-medium">E-mail</p>
          <a href="mailto:info@productiveenergy.com" className="text-blue-600 underline">
            info@productiveenergy.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-2">
        <div className="w-6 h-6 text-white bg-[#8C0000] p-1 rounded-full flex items-center justify-center">
          <LocationOnIcon style={{ fontSize: 16 }} />
        </div>
        <div>
          <p className="font-medium">Based in</p>
          <p>Madison, Wisconsin 53705</p>
        </div>
      </div>
    </div>

    {/* Map */}
    <div className="relative w-full md:w-1/2">
      <img
        src={map}
        alt="Map of Wisconsin"
        className="rounded-md w-full"
      />
    </div>
  </div>
</section>

    </div>
  );
};

export default AboutContactPage;
