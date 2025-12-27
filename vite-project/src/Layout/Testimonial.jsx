import { testimonials } from "../testimonialsData";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-b from-white to-[#F8F9FC] py-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#6FA3E3]/10 text-[#6FA3E3] px-4 py-2 rounded-full mb-6 border border-[#6FA3E3]/20">
            <span className="w-2 h-2 bg-[#6FA3E3] rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold">Customer Reviews</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] bg-clip-text text-transparent">
              Customers Say
            </span>
          </h2>
          <p className="text-xl text-[#8A8A8A] max-w-3xl mx-auto leading-relaxed">
            Hear from our satisfied customers who trusted us with their vehicles
            and experienced the Grand Car Wash difference.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-[#F0F0F0] hover:border-[#6FA3E3]/50 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6FA3E3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#6FA3E3] text-[#6FA3E3]"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#1F1F1F] text-base mb-6 leading-relaxed italic">
                  "{item.review}"
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#6FA3E3]/20 to-transparent mb-6"></div>

                {/* Avatar and Name */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#6FA3E3]/30 group-hover:border-[#6FA3E3] transition-colors duration-300"
                  />
                  <div>
                    <h3 className="font-bold text-[#1F1F1F] group-hover:text-[#6FA3E3] transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-sm text-[#8A8A8A]">{item.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-[#6FA3E3]/10 to-transparent border border-[#6FA3E3]/20 rounded-2xl p-8">
            <div className="text-4xl font-bold text-[#6FA3E3] mb-2">500+</div>
            <p className="text-[#8A8A8A] font-semibold">Happy Customers</p>
          </div>
          <div className="bg-gradient-to-br from-[#6FA3E3]/10 to-transparent border border-[#6FA3E3]/20 rounded-2xl p-8">
            <div className="text-4xl font-bold text-[#6FA3E3] mb-2">4.3★</div>
            <p className="text-[#8A8A8A] font-semibold">Average Rating</p>
          </div>
          <div className="bg-gradient-to-br from-[#6FA3E3]/10 to-transparent border border-[#6FA3E3]/20 rounded-2xl p-8">
            <div className="text-4xl font-bold text-[#6FA3E3] mb-2">500+</div>
            <p className="text-[#8A8A8A] font-semibold">Reviews Received</p>
          </div>
        </div>
      </div>
    </section>
  );
}
