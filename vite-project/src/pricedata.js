import { Award, Medal, Crown, Gem, Sofa } from "lucide-react";

export const pricingPlans = [
  {
    name: "Bronze Package",
    price: "$25",
    description: "Essential exterior and light interior cleaning",
    icon: Medal,
    features: [
      "Exterior hand wash & dry",
      "Wheel & tire cleaning",
      "Interior vacuum",
      "Dashboard & door wipe"
    ],
    popular: false,
  },
  {
    name: "Gold Package",
    price: "$40",
    description: "Enhanced cleaning for inside and out",
    icon: Award,
    features: [
      "Exterior wash & dry",
      "Interior vacuum & wipe down",
      "Window cleaning (inside & out)",
      "Tire shine"
    ],
    popular: false,
  },
  {
    name: "Diamond Package",
    price: "$70",
    description: "Premium full detailing experience",
    icon: Gem,
    features: [
      "Complete exterior wash & wax",
      "Deep interior cleaning",
      "Seat & carpet shampoo",
      "Paint protection & tire shine"
    ],
    popular: true,
  },
  {
    name: "Showroom Package",
    price: "$120",
    description: "Ultimate showroom-ready finish",
    icon: Crown,
    features: [
      "Full detailing inside & out",
      "Paint correction & polish",
      "Leather conditioning",
      "High-gloss showroom finish"
    ],
    popular: false,
  },
  {
    name: "Interior Special",
    price: "$45",
    description: "Deep interior-only detailing",
    icon: Sofa,
    features: [
      "Seat & carpet shampoo",
      "Interior vacuum",
      "Dashboard & console detailing",
      "Odor removal treatment"
    ],
    popular: false,
  },
];
