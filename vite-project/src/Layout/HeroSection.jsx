import React from "react";
import carHero from "../assets/heroimg.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#1F1F1F] via-[#2D2D2D] to-[#1F1F1F] overflow-hidden pt-20">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute -bottom-8 left-0 w-80 h-80 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#6FA3E3]/20 text-[#6FA3E3] px-4 py-2 rounded-full w-fit mb-6 border border-[#6FA3E3]/30">
            <span className="w-2 h-2 bg-[#6FA3E3] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Professional Car Care</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-2xl mb-6 animate-in fade-in slide-in-from-left-8">
            Premium Car Wash &
            <span className="bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] bg-clip-text text-transparent">
              {" "}
              Detailing
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#B0B0B0] max-w-xl mb-8 leading-relaxed animate-in fade-in slide-in-from-left-8 delay-100">
            Professional exterior washes and deep interior detailing that keep
            your car spotless, protected, and looking brand new. Experience the
            difference quality makes.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-10">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-sm text-[#8A8A8A]">Happy Customers</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">4.9★</span>
              <span className="text-sm text-[#8A8A8A]">Average Rating</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-white">2y+</span>
              <span className="text-sm text-[#8A8A8A]">Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-[#6FA3E3] to-[#5a8fd4] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#6FA3E3]/40 transform hover:scale-105 transition-all duration-300">
              Book Appointment
            </button>

            <button className="border-2 border-[#6FA3E3] text-[#6FA3E3] px-8 py-4 rounded-xl font-semibold hover:bg-[#6FA3E3] hover:text-white transition-all duration-300">
              View Services
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group">
          {/* Image Frame Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] rounded-3xl transform -rotate-1 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

          <img
            src={carHero}
            alt="Car detailing service"
            className="relative rounded-3xl shadow-2xl w-full h-96 md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500 border-2 border-[#6FA3E3]/20"
          />

          {/* Overlay info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 rounded-b-3xl text-white">
            <p className="font-semibold text-lg">Premium Detailing Service</p>
            <p className="text-sm text-[#B0B0B0] mt-1">
              Expert care for your vehicle
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
