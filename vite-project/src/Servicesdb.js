// src/data/servicesData.js

import { Car, Brush, Sparkles, Shield } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Exterior Car Wash",
    details: [
      "Hand wash and rinse using premium car-safe soaps",
      "Wheel and tire cleaning with specialized brushes",
      "Bug, dirt, and grime removal for a spotless finish",
      "Spot-free drying and tire shine application"
    ]
  },
  {
    icon: Brush,
    title: "Interior Cleaning",
    details: [
      "Vacuuming of carpets, mats, and seats",
      "Deep cleaning of dashboard, console, vents, and door panels",
      "Window and mirror cleaning for streak-free shine",
      "Odor removal and fabric freshening treatment"
    ]
  },
  {
    icon: Sparkles,
    title: "Full Detailing",
    details: [
      "Complete interior and exterior deep cleaning",
      "Carpet and seat shampoo for tough stains",
      "Polish and wax for exterior protection and shine",
      "Optional engine bay cleaning and detailing"
    ]
  },
  {
    icon: Shield,
    title: "Premium Protection",
    details: [
      "Waxing and paint sealant for long-lasting protection",
      "Fabric and leather treatment to prevent wear",
      "Headlight restoration for better visibility",
      "UV and environmental protection treatments"
    ]
  },
];

export default services;
