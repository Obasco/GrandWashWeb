import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";

export default function LocationContact() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F8F9FC] to-white py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#6FA3E3]/10 text-[#6FA3E3] px-4 py-2 rounded-full mb-6 border border-[#6FA3E3]/20">
            <span className="w-2 h-2 bg-[#6FA3E3] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Get In Touch</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
              Visit{" "}
              <span className="bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] bg-clip-text text-transparent">
                Grand Car Wash
              </span>
            </h2>
            <p className="mt-4 text-[#8A8A8A] max-w-md">
              Conveniently located in Scarborough, we’re ready to give your car
              a professional clean.
            </p>

            {/* Details */}
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#6FA3E3] mt-1" />
                <p className="text-[#1F1F1F]">
                  1350 Kennedy Rd, Scarborough, ON, Canada
                </p>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#6FA3E3] mt-1" />
                <p className="text-[#1F1F1F]">+1 (416) 757-8200</p>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <Clock className="w-6 h-6 text-[#6FA3E3] mt-1" />
                <p className="text-[#1F1F1F]">Mon – Sun: 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:++14167578200"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#6FA3E3] to-[#5a8fd4] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-[#6FA3E3]/40 transform hover:scale-105 transition-all duration-300"
              >
                Call Now
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://www.google.com/maps/place/Grand+Car+Wash/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-[#6FA3E3] text-[#6FA3E3] px-8 py-4 rounded-xl font-semibold hover:bg-[#6FA3E3] hover:text-white transition-all duration-300"
              >
                Get Directions
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] rounded-2xl transform -rotate-1 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#6FA3E3]/20 group-hover:border-[#6FA3E3]/50 transition-colors duration-300">
              <iframe
                title="Grand Car Wash Location"
                src="https://www.google.com/maps?q=Grand+Car+Wash,+Scarborough&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
