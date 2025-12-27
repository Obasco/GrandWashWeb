import { galleryItems } from "../gallerydata.js";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-gradient-to-b from-white to-[#F9F9F9] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] mb-4">
            Our Work in Action
          </h2>
          <p className="mt-4 text-[#8A8A8A] max-w-2xl mx-auto text-lg">
            See the quality and care we put into every vehicle — straight from
            real service moments.
          </p>
          <div className="w-16 h-1 bg-[#6FA3E3] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-72"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm md:text-base font-medium">
                  {item.caption}
                </p>
                <p className="text-xs text-[#6FA3E3] mt-2">Click to view</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[#6FA3E3] hover:bg-[#5a8fd4] text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-colors z-10"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-cover"
            />
            <div className="p-6 bg-white">
              <p className="text-lg text-[#1F1F1F] font-medium">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
