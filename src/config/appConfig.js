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
    title: "Power Mart Online | Wholesale Electrical & Industrial Safety Supplies",
    description: "Buy premium electrical supplies, wires, heavy duty cables, cable lugs, switchgears, and industrial safety equipment at wholesale prices. Fast delivery across India.",
    keywords: "power mart online, wholesale electrical supplies india, buy electrical goods online, industrial safety equipment, copper wire, cable lugs, switchgear suppliers, electrical mart, b2b electrical materials, distribution boards, LED lighting wholesale, MCCB, RCCB, MCB boards, earthing materials, PVC conduits, electrical panels, contactors, heavy duty relays, solar wires, industrial cable glands, low tension cables, power tools, commercial safety gear, flame retardant cables",
    url: "https://powermartonline.com",
    image: "https://powermartonline.com/assets/logo.svg"
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
