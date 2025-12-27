import React from "react";
import Servicesdb from "../Servicesdb";

const Services = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F8F9FC] to-white py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#6FA3E3]/10 text-[#6FA3E3] px-4 py-2 rounded-full mb-6 border border-[#6FA3E3]/20">
            <span className="w-2 h-2 bg-[#6FA3E3] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">What We Offer</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="text-xl text-[#8A8A8A] max-w-3xl mx-auto leading-relaxed">
            High-quality washes and detailing packages designed to keep your car
            spotless, protected, and looking brand new. Choose the perfect
            service for your vehicle.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {Servicesdb.map((service, serviceIdx) => (
            <div
              key={serviceIdx}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-[#F0F0F0] hover:border-[#6FA3E3]/50 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6FA3E3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="mb-6 w-16 h-16 bg-gradient-to-br from-[#6FA3E3]/20 to-[#8BBEF5]/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-5xl">
                  <service.icon />
                </div>

                {/* Service Title */}
                <h3 className="font-bold text-xl mb-4 text-[#1F1F1F] group-hover:text-[#6FA3E3] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Details */}
                <ul className="space-y-3 mb-6">
                  {service.details.map((item, itemIdx) => (
                    <li
                      key={`${serviceIdx}-${itemIdx}`}
                      className="flex items-start gap-3"
                    >
                      <span className="w-1.5 h-1.5 bg-[#6FA3E3] rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-[#7A7A7A] text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#6FA3E3] font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#6FA3E3] to-[#5a8fd4] rounded-3xl p-12 text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Car?
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Schedule your appointment today and experience the premium car care
            difference
          </p>
          <button className="bg-white text-[#6FA3E3] px-10 py-4 rounded-xl font-bold hover:shadow-xl hover:scale-105 transition-all duration-300">
            Book a Service Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
