import {
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1F1F1F] via-[#2D2D2D] to-[#1F1F1F] text-[#8A8A8A] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6FA3E3] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Grand Car Wash Logo"
                className="w-16 h-auto"
              />
              <div>
                <h3 className="text-white font-bold text-lg">Grand</h3>
                <p className="text-[#6FA3E3] text-xs font-semibold">Car Wash</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[#A0A0A0]">
              Professional car wash and detailing services in Scarborough.
              Quality care that keeps your vehicle looking brand new.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                className="w-10 h-10 bg-[#6FA3E3]/10 hover:bg-[#6FA3E3]/20 rounded-lg flex items-center justify-center text-[#6FA3E3] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/grand_car_wash_scaborough/"
                className="w-10 h-10 bg-[#6FA3E3]/10 hover:bg-[#6FA3E3]/20 rounded-lg flex items-center justify-center text-[#6FA3E3] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="w-10 h-10 bg-[#6FA3E3]/10 hover:bg-[#6FA3E3]/20 rounded-lg flex items-center justify-center text-[#6FA3E3] transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>{" "}
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>{" "}
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>{" "}
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>{" "}
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>{" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Packages</h4>
            <ul className="space-y-3 text-sm text-[#A0A0A0]">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#6FA3E3] rounded-full"></span>
                Bronze Package
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#6FA3E3] rounded-full"></span>
                Gold Package
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#6FA3E3] rounded-full"></span>
                Diamond Package
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#6FA3E3] rounded-full"></span>
                Showroom Package
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#6FA3E3] rounded-full"></span>
                Interior Special
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start group">
                <div className="w-10 h-10 bg-[#6FA3E3]/10 group-hover:bg-[#6FA3E3]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#6FA3E3]" />
                </div>
                <span className="text-[#A0A0A0] group-hover:text-white transition-colors">
                  Scarborough, ON, Canada
                </span>
              </li>

              <li className="flex gap-3 items-start group">
                <div className="w-10 h-10 bg-[#6FA3E3]/10 group-hover:bg-[#6FA3E3]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
                  <Phone className="w-5 h-5 text-[#6FA3E3]" />
                </div>
                <a
                  href="tel:+14161234567"
                  className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors"
                >
                  +1 (416) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-[#6FA3E3]/10 to-[#8BBEF5]/10 border border-[#6FA3E3]/20 rounded-2xl p-8 mb-16">
          <div className="max-w-md">
            <h3 className="text-white font-bold text-lg mb-2">Stay Updated</h3>
            <p className="text-[#A0A0A0] text-sm mb-6">
              Subscribe for exclusive offers and car care tips.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#2D2D2D] text-white placeholder-[#7A7A7A] px-4 py-3 rounded-lg border border-[#3D3D3D] focus:border-[#6FA3E3] focus:outline-none transition-colors"
              />
              <button className="bg-[#6FA3E3] hover:bg-[#5a8fd4] text-white p-3 rounded-lg transition-colors duration-300">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#3D3D3D]"></div>

        {/* Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mt-8 pt-8">
          <p className="text-sm text-[#A0A0A0]">
            © {new Date().getFullYear()} Grand Car Wash. All rights reserved.
          </p>
          <div className="flex gap-6 md:justify-end text-sm">
            <a
              href="#"
              className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#A0A0A0] hover:text-[#6FA3E3] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
