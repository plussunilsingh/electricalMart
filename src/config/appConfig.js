export const APP_CONFIG = {
  websiteName: "Power Mart Online",
  businessEmail: "sales@powermartonline.com",
  whatsAppNumber: "+919759111017", // Example Indian number
  currency: "INR",
  currencySymbol: "₹",
  brandColors: {
    primary: "#ffcc00", // Industrial Yellow
    secondary: "#333333", // Charcoal
    accent: "#ff5722", // Energy Orange
  },
  logoPath: "/assets/logo.svg",
  defaultImageFallback: `${import.meta.env?.BASE_URL || '/'}assets/products/placeholder.svg`,
  seoDefaults: {
    title: "Power mart online - Industrial & Safety Supplies",
    description: "Affordable electrical and safety products for businesses. Quality wires, cables, safety gear, and more.",
    keywords: "Power mart online, power mart, power online, electrical,electricals, Grid solution, Wire, Lug,  industrial safety, wires cables, electrical supplies india",
  },
  categories: [
    "Wires & Cables",
    "Cable Lugs & Connectors",
    "Switchgear & Protection",
    "Lighting",
    "Sockets & Plugs",
    "Cable Glands",
    "Cable Ties",
    "Cable Accessories",
    "Safety Equipment",
    "Distribution Boards",
    "Power Generation",
    "Tools & Hardware"
  ]
};
