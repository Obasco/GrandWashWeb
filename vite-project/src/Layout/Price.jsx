import { pricingPlans } from "../pricedata";
import { Check } from "lucide-react";

export default function Pricing() {
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
            <span className="text-sm font-semibold">Transparent Pricing</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-[#1F1F1F] mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-[#8A8A8A] max-w-3xl mx-auto leading-relaxed">
            From essential washes to full showroom detailing — choose what fits
            your car and budget.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#6FA3E3] to-[#8BBEF5] mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, idx) => {
            const Icon = plan.icon;

            return (
              <div
                key={idx}
                className={`group relative rounded-2xl overflow-hidden transition-all duration-500 ${
                  plan.popular
                    ? "md:scale-105 bg-gradient-to-br from-[#6FA3E3] to-[#5a8fd4] shadow-2xl border border-[#6FA3E3]/50"
                    : "bg-white border border-[#F0F0F0] hover:border-[#6FA3E3]/50 shadow-md hover:shadow-2xl"
                }`}
              >
                {/* Badge */}
                {plan.popular && (
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                )}

                <div
                  className={`p-8 h-full flex flex-col ${
                    plan.popular ? "text-white" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-6 w-fit border border-white/30">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      <span className="text-xs font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`flex mb-6 ${
                      plan.popular ? "text-white" : "text-[#6FA3E3]"
                    }`}
                  >
                    <Icon className="w-12 h-12" />
                  </div>

                  {/* Plan Name */}
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.popular ? "text-white" : "text-[#1F1F1F]"
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm mb-6 ${
                      plan.popular ? "text-white/90" : "text-[#8A8A8A]"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <span
                      className={`text-5xl font-bold ${
                        plan.popular ? "text-white" : "text-[#1F1F1F]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`text-sm ml-2 ${
                        plan.popular ? "text-white/80" : "text-[#8A8A8A]"
                      }`}
                    >
                      per service
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className={`w-full h-px ${
                      plan.popular ? "bg-white/20" : "bg-[#E5E5E5]"
                    } mb-8`}
                  ></div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.popular ? "text-white" : "text-[#6FA3E3]"
                          }`}
                        />
                        <span
                          className={
                            plan.popular ? "text-white/95" : "text-[#1F1F1F]"
                          }
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? "bg-white text-[#6FA3E3] hover:shadow-xl hover:shadow-white/20"
                        : "bg-gradient-to-r from-[#6FA3E3] to-[#5a8fd4] text-white hover:shadow-xl hover:shadow-[#6FA3E3]/40"
                    }`}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Section */}
        <div className="bg-gradient-to-r from-[#6FA3E3]/10 to-[#8BBEF5]/10 border border-[#6FA3E3]/20 rounded-2xl p-12 text-center">
          <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">
            100% Satisfaction Guaranteed
          </h3>
          <p className="text-[#8A8A8A] max-w-2xl mx-auto">
            If you're not completely satisfied with our service, we'll make it
            right. Your car's perfection is our priority.
          </p>
        </div>
      </div>
    </section>
  );
}
