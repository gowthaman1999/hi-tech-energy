export const HERO_SLIDES = [
  {
    id: 1,
    tag: "Best In Class",
    title: "Domestic LPG Pipeline Service For Your Homes",
    subtitle: "Safe, Reliable & More Flexible",
    image: "https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1920&q=80",
    ctaText: "Contact Us",
    ctaLink: "/contact"
  },
  {
    id: 2,
    tag: "Top Quality Service",
    title: "Get The Best LOT Pipeline Services",
    subtitle: "Consumes Less, Saves More & High Efficient",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80",
    ctaText: "Know More",
    ctaLink: "/services"
  }
];

export const QUICK_FEATURE_BOXES = [
  {
    id: "start",
    type: "cta",
    title: "Start Your Pipeline Journey With NGLS!",
    desc: "Instead of using individual LPG cylinders, a piped system allows for a continuous supply of LPG.",
    buttonText: "Contact NGLS",
    link: "/contact"
  },
  {
    id: "domestic",
    type: "feature",
    title: "Domestic LPG Pipeline",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
    link: "/services/domestic-lpg-pipeline"
  },
  {
    id: "commercial",
    type: "feature",
    title: "Commercial LPG Pipeline",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=80",
    link: "/services/commercial-lpg-pipeline"
  },
  {
    id: "reticulated",
    type: "feature",
    title: "Reticulated LPG Pipeline",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=300&q=80",
    link: "/services/reticulated-lpg-pipeline"
  },
  {
    id: "lot",
    type: "feature",
    title: "LOT Gas Pipeline",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=300&q=80",
    link: "/services/lot-pipeline"
  }
];

export const ALL_SERVICES_MAP = {
  "domestic-lpg-pipeline": {
    id: "domestic-lpg-pipeline",
    title: "Domestic LPG Pipeline",
    category: "Gas Pipeline Services",
    excerpt: "Keeping the LPG cylinders away from the kitchen serves as good protection. Our NGLS technicians provide your residences with the best quality LPG gas pipeline services.",
    fullDesc: "Our domestic LPG pipeline systems ensure continuous gas flow directly to home appliances. By locating cylinders in dedicated outdoor spaces or manifold enclosures, home safety is enhanced while eliminating the hassle of cylinder handling in kitchens.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "24/7 Uninterrupted gas supply directly to kitchen stoves",
      "Gas leak detectors & automatic emergency solenoid shutdown valves",
      "Zero cylinder weight handling & zero kitchen space consumption",
      "Individual sub-metering for multi-story residential complexes"
    ],
    specs: [
      { label: "Piping Material", value: "Seamless Copper Pipe (ASTM B280) / Heavy Carbon Steel" },
      { label: "Operating Pressure", value: "28 mbar – 37 mbar (Low Pressure Domestic Standard)" },
      { label: "Safety Standard Compliance", value: "PESO Certified / IS 6044 Part 1" },
      { label: "Leak Detection", value: "Gas Detector Alarm + Emergency Solenoid Cut-off Valve" },
      { label: "Metering Type", value: "Digital AMR / Mechanical Sub-meters per flat" }
    ],
    sectorsServed: ["Independent Villas", "Multi-Story Apartments", "Residential Townships", "Gated Communities"]
  },
  "commercial-lpg-pipeline": {
    id: "commercial-lpg-pipeline",
    title: "Commercial LPG Pipeline",
    category: "Gas Pipeline Services",
    excerpt: "NGLS's Commercial LPG cylinder pipeline installation specialized in designing, installing, and maintaining LPG pipeline systems for commercial and industrial establishments.",
    fullDesc: "Engineered specifically for high-volume commercial kitchens, hotels, food courts, and bakeries. Our systems deliver precise pressure regulation, high flow stability, and maximum safety compliance under stringent commercial kitchen standards.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    features: [
      "High-pressure commercial manifold systems with multi-cylinder banks",
      "Automatic cylinder changeover regulator skids (VOT / LOT compatible)",
      "Gas leak alarm integration with commercial exhaust hood systems",
      "PESO compliance & certified pneumatic hydrostatic safety pressure tests"
    ],
    specs: [
      { label: "Piping Material", value: "ASTM A106 Grade B Heavy Carbon Steel Pipes" },
      { label: "Operating Pressure", value: "0.5 bar to 2.0 bar (Medium/High Commercial Pressure)" },
      { label: "Compliance Standard", value: "IS 6044 Part 2 / PESO Approval Standards" },
      { label: "Safety Valves", value: "Excess Flow Check Valve, PRV & Main Emergency Cutoff" },
      { label: "Flow Rate Capacity", value: "10 kg/hr up to 250 kg/hr Commercial Manifolds" }
    ],
    sectorsServed: ["Hotels & Restaurants", "Commercial Bakeries", "Hospitality Kitchens", "Educational Food Courts"]
  },
  "reticulated-lpg-pipeline": {
    id: "reticulated-lpg-pipeline",
    title: "Reticulated LPG Pipeline",
    category: "Gas Pipeline Services",
    excerpt: "NGLS's Reticulated LPG cylinder pipeline promises an uninterrupted supply and a host of other benefits for households. Instead of using traditional LPG cylinders.",
    fullDesc: "Reticulated gas systems centralize gas storage for apartment complexes, gated communities, and townships. Gas is piped to individual apartments via underground and riser networks, monitored through digital prepaid or postpaid meters.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Centralized cylinder manifold bank / bulk storage vessel setup",
      "Digital AMR / Prepaid metering technology for fair billing",
      "Multi-stage pressure regulation at flat entrances and risers",
      "Comprehensive annual safety inspection, maintenance & 24/7 helpline"
    ],
    specs: [
      { label: "Riser Pipe Material", value: "Heavy Seamless Carbon Steel SCH 40 / ERW Steel" },
      { label: "Primary Pressure", value: "1.0 bar to 1.5 bar (Sub-distribution Riser)" },
      { label: "Flat Pressure", value: "28 mbar Regulated (Individual Appliance level)" },
      { label: "Metering System", value: "AMR Smart Meters with Remote Data Logging" },
      { label: "Safety Features", value: "Thermal Shut-off Valves + Riser Isolation Valves" }
    ],
    sectorsServed: ["High-Rise Apartments", "Gated Housing Societies", "Government Housing Complexes", "Group Housing"]
  },
  "lot-pipeline": {
    id: "lot-pipeline",
    title: "LOT LPG Pipeline",
    category: "Gas Pipeline Services",
    excerpt: "NGLS's LOT pipeline system is advance concept in multi-cylinder installation which offers strength of bulk LPG installation and easy functionality. It can cater to volumes up to 25...",
    fullDesc: "Liquid Off-take (LOT) systems draw LPG in liquid state and convert it to vapor using dedicated vaporizers. LOT systems extract up to 100% gas content from cylinders without freezing issues, making them perfect for medium to high commercial consumers.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    features: [
      "100% fuel extraction with zero liquid LPG wastage in cylinders",
      "Compact installation footprint compared to traditional VOT cylinder banks",
      "Stable vapor pressure & constant flow during heavy peak cooking hours",
      "Heated water bath or electric explosion-proof vaporizers"
    ],
    specs: [
      { label: "Extraction Type", value: "Liquid Off-Take (LOT) Valves with Liquid Skids" },
      { label: "Vaporizer Capacity", value: "50 kg/hr up to 500 kg/hr Electric/Water Bath" },
      { label: "Safety Rating", value: "PESO Approved Vaporizer & CCOE Certified Valves" },
      { label: "Pressure Regulation", value: "Dual Stage High-To-Low Pressure Regulator Skid" },
      { label: "Efficiency", value: "Zero Residual LPG Loss in Cylinders" }
    ],
    sectorsServed: ["High-Volume Bakeries", "Industrial Food Processing", "Medium Chemical Plants", "Hotel Kitchen Chains"]
  },
  "bulk-lpg-pipeline": {
    id: "bulk-lpg-pipeline",
    title: "Bulk LPG Pipeline",
    category: "Gas Pipeline Services",
    excerpt: "In the large volume consumer segment, we provide an idea for management solutions to customers who require fuels in bulk & have dedicated facilities for storage and handling.",
    fullDesc: "Designed for massive industrial plants, manufacturing units, automotive heat-treatment furnaces, and textile units. Bulk LPG installations involve underground/aboveground pressure vessels (mounded or bullet tanks) with heavy-duty pumping and vaporizing equipment.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Bullet & Mounded storage vessel design as per ASME Sec VIII Div 1",
      "Gas unloading pumps & liquid transfer skids for tanker unloading",
      "PESO approved safety relief valves, excess flow check valves & water spray deluge",
      "Complete SCADA / PLC gas monitoring setup with automated telemetry"
    ],
    specs: [
      { label: "Storage Vessel Type", value: "Aboveground Bullet / Underground Mounded Storage Vessel" },
      { label: "Vessel Capacity", value: "5 KL up to 100 KL ASME Pressure Vessels" },
      { label: "Piping Specification", value: "ASTM A106 Gr. B SCH 80 Seamless Heavy Steel" },
      { label: "Fire Protection", value: "Automatic Deluge Water Spray System + Flame Detectors" },
      { label: "Control System", value: "PLC SCADA Controller with Emergency Trip System" }
    ],
    sectorsServed: ["Automotive Plants", "Steel & Forging Mills", "Textile & Dyeing Industries", "Glass & Ceramic Factories"]
  },
  "oxygen-pipeline": {
    id: "oxygen-pipeline",
    title: "Oxygen Pipeline",
    category: "Gas Pipeline Services",
    excerpt: "NGLS provides top-quality oxygen pipelines to all kinds of medical platforms such as Hospitals, Laboratories, and other sectors. Installing an oxygen pipeline involves creating a safe...",
    fullDesc: "Precision medical gas pipeline systems (MGPS) for hospitals, intensive care units, and analytical laboratories. Built with high-purity degreased copper pipes and automatic manifold changeovers meeting HTM-02-01 & ISO standards.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Medical grade degreased copper piping as per BS EN 13348",
      "Automatic primary and standby manifold banks with digital switchover",
      "Digital pressure monitors with audio-visual local & master alarms",
      "Strict compliance with ISO 7396-1 & HTM-02-01 medical gas safety standards"
    ],
    specs: [
      { label: "Piping Standard", value: "Degreased Seamless Copper Pipe (EN 13348 / ASTM B280)" },
      { label: "Jointing Method", value: "Silver Brazing with Nitrogen Inert Gas Purging" },
      { label: "Operating Pressure", value: "4.2 bar (60 psi) Regulated Medical Pressure" },
      { label: "Manifold System", value: "2xN Automatic Digital Manifold Skid with Cryogenic Liquid Cylinder" },
      { label: "Compliance Standard", value: "HTM-02-01 / ISO 7396-1 / NFPA 99" }
    ],
    sectorsServed: ["Multi-Specialty Hospitals", "Medical Research Labs", "ICU & Operation Theaters", "Pharmaceutical Units"]
  },
  "gas-fuel-conversion": {
    id: "gas-fuel-conversion",
    title: "Gas Fuel Conversion",
    category: "Other Specialized Services",
    excerpt: "NGLS's Gas Fuel Conversion System provides top benefits converting industrial processes from conventional fuels to Liquefied Petroleum Gas (LPG).",
    fullDesc: "Turnkey industrial fuel conversion services to convert furnaces, boilers, dryers, and ovens from heavy liquid fuels (Diesel, LDO, FO) to clean-burning LPG. Fuel conversion reduces carbon emissions, extends burner lifespan, and lowers fuel expenditure.",
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Replacement of oil burners with high-efficiency gas burner skids",
      "LPG train assembly including gas filter, pressure regulator, and dual solenoid valves",
      "Significant reduction in particulate emissions & carbon soot",
      "Lower operational costs & zero fuel theft risk compared to liquid diesel"
    ],
    specs: [
      { label: "Conversion Types", value: "Diesel/LDO/FO to LPG Conversion" },
      { label: "Equipment Covered", value: "Industrial Boilers, Heat Treatment Furnaces, Rotary Dryers" },
      { label: "Safety Interlocks", value: "Low Gas Pressure Switch, High Gas Pressure Switch, Leak Check" },
      { label: "Burner Efficiency", value: "> 92% Combustion Efficiency" },
      { label: "Payback Period", value: "Typical ROI within 8 – 14 Months" }
    ],
    sectorsServed: ["Manufacturing Plants", "Food Drying Industries", "Ceramic Kilns", "Commercial Laundries"]
  },
  "gas-purification-panel-system": {
    id: "gas-purification-panel-system",
    title: "Gas Purification Panel System",
    category: "Other Specialized Services",
    excerpt: "NGLS's Gas Fuel Purification Panel System, designed to ensure that the LPG meets specific quality standards, removing impurities and contaminants.",
    fullDesc: "Multi-stage gas purification panel skids engineered to filter out moisture, oil mist, scale particles, and trace heavy hydrocarbon fractions from LPG lines prior to entering precision burner nozzles or laboratory instruments.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Dual-stage coalescing filters & moisture traps",
      "Stainless steel SS316 filter housing & precision pressure gauges",
      "Protection of sensitive burner nozzles and proportional valves",
      "Continuous online differential pressure monitoring"
    ],
    specs: [
      { label: "Filter Rating", value: "0.01 Micron Particulate & Coalescing Filter" },
      { label: "Panel Material", value: "Stainless Steel SS316 / Powder Coated CRCA Skid" },
      { label: "Max Working Pressure", value: "16 bar (High Pressure Filtration)" },
      { label: "Drain Type", value: "Auto Float Drain / Manual Needle Valve Drain" },
      { label: "Purification Level", value: "99.99% Oil & Moisture Removal" }
    ],
    sectorsServed: ["Precision Metal Coating", "Pharmaceutical Cleanrooms", "Glass Melting Units", "Analytical Instrument Labs"]
  },
  "leakage-detection-system": {
    id: "leakage-detection-system",
    title: "Leakage Detection System",
    category: "Other Specialized Services",
    excerpt: "NGLS's LPG Leakage Detection System industry is driven by increasing safety regulations, the need to prevent accidents and protect human lives.",
    fullDesc: "Fully automated LPG/Combustible gas detection systems equipped with catalytic or infrared gas sensors, central control panels, audio-visual alarms, and solenoid emergency shut-off valves for industrial and commercial facilities.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "High sensitivity catalytic & NDIR gas detectors (0–100% LEL)",
      "Central control panel with zone indicator LEDs & digital LCD readout",
      "Automated solenoid valve cut-off upon detecting 20% LEL gas threshold",
      "Integration with BMS (Building Management Systems) & Exhaust Fans"
    ],
    specs: [
      { label: "Sensor Technology", value: "Catalytic Bead / Non-Dispersive Infrared (NDIR)" },
      { label: "Detection Gas", value: "LPG, Methane (PNG), Hydrogen, Ammonia" },
      { label: "Alarm Levels", value: "2-Stage (Pre-alarm at 10% LEL, Trip at 20% LEL)" },
      { label: "Enclosure Rating", value: "IP65 Explosion-Proof Flameproof Enclosure (Zone 1/2)" },
      { label: "Response Time", value: "< 10 Seconds (T90 Response)" }
    ],
    sectorsServed: ["Commercial Kitchens", "Apartment Basements", "Industrial Cylinder Banks", "Chemical Storage Warehouses"]
  },
  "flow-meter-calculation-system": {
    id: "flow-meter-calculation-system",
    title: "Flow Meter Calculation System",
    category: "Other Specialized Services",
    excerpt: "NGLS's LPG flow meter systems are used to accurately measure the flow rate of LPG in various applications such as distribution & industrial monitoring.",
    fullDesc: "Precision volumetric and mass flow meter monitoring skids (Thermal Mass, Vortex, or Rotary Vane Meters) designed for real-time gas consumption tracking, density compensation, and automated billing calculation.",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    features: [
      "High accuracy gas flow measurement (± 1.0% Rate accuracy)",
      "Digital flow totalizer with RS485 Modbus / 4-20mA output signals",
      "Temperature and pressure compensation for exact standard cubic meter (SCM) calculation",
      "Tamper-proof enclosure for commercial sub-metering"
    ],
    specs: [
      { label: "Meter Type", value: "Thermal Mass / Coriolis / Rotary Displacement Flow Meter" },
      { label: "Accuracy", value: "± 0.5% to ± 1.0% of Reading" },
      { label: "Communication", value: "Modbus RTU / AMR Wireless / 4-20mA HART" },
      { label: "Display Unit", value: "Digital Totalizer, Instantaneous Flow Rate & Pressure" },
      { label: "Power Supply", value: "24V DC / Battery Operated (5 Year Battery Life)" }
    ],
    sectorsServed: ["Reticulated Housing Societies", "Industrial Energy Audits", "Commercial Food Courts", "Sub-station Metering"]
  },
  "hsd-diesel-pipeline": {
    id: "hsd-diesel-pipeline",
    title: "HSD / Diesel Pipeline",
    category: "Other Specialized Services",
    excerpt: "NGLS's Diesel pipeline system is a network of pipes designed to transport diesel fuel from source to machine within an industry.",
    fullDesc: "Heavy-duty High Speed Diesel (HSD) fuel pipeline transfer systems designed to supply fuel safely from bulk underground/aboveground diesel tanks to DG sets, industrial boilers, and furnace burners.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Heavy carbon steel SCH 40 / SCH 80 fuel transfer pipelines",
      "Duplex fuel oil pumping skids with auto standby pump changeover",
      "Return line oil management & day-tank automatic level controllers",
      "Anti-siphon valves, fusible link safety shut-off valves & oil catch pans"
    ],
    specs: [
      { label: "Piping Material", value: "ASTM A106 Gr B Carbon Steel / SS316 Fuel Lines" },
      { label: "Transfer Pump Type", value: "Positive Displacement Gear Pump / Screw Pump Skid" },
      { label: "Level Controls", value: "Magnetic Float Switches & Ultrasonic Level Transmitters" },
      { label: "Filter System", value: "Duplex Basket Strainer with 50 Micron Filter" },
      { label: "Safety Controls", value: "Fusible Fire Shut-off Valve & Spill Containment" }
    ],
    sectorsServed: ["Data Centers", "IT Parks & Commercial Buildings", "Heavy Manufacturing Units", "Hospital DG Power Plants"]
  },
  "ammonia-pipeline": {
    id: "ammonia-pipeline",
    title: "Ammonia Pipeline",
    category: "Other Specialized Services",
    excerpt: "NGLS's Ammonia pipeline system is a network of pipes designed to transport ammonia fuel from source to machine within an industry.",
    fullDesc: "Specialized anhydrous ammonia gas and liquid pipeline transfer networks engineered with extreme corrosion resistance, zero-leak flange joints, and ammonia gas detection safety interlocks for industrial refrigeration and chemical synthesis.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Heavy-wall seamless steel pipes (ASTM A333 Grade 6 low temperature)",
      "Specialized ammonia valves (tongue and groove flange connections)",
      "Ammonia gas leak detection sensors linked to emergency water scrubber / absorption systems",
      "Strict hydrostatic pressure testing and non-destructive testing (NDT Radiography)"
    ],
    specs: [
      { label: "Piping Material", value: "ASTM A333 Gr 6 (Low Temp) / Seamless Carbon Steel SCH 80" },
      { label: "Valve Standard", value: "Ammonia Rated Globe/Check Valves (Tongue & Groove)" },
      { label: "Leak Detection", value: "Electrochemical Ammonia Sensors (0–100 ppm)" },
      { label: "Joint Testing", value: "100% NDT Radiography / Hydrostatic Test at 1.5x Pressure" },
      { label: "Safety Systems", value: "Emergency Water Scrubber Skid + Remote Emergency Trip" }
    ],
    sectorsServed: ["Cold Storage Plants", "Fertilizer Manufacturing", "Chemical Synthesis Plants", "Industrial Refrigeration Units"]
  }
};

export const PRIMARY_SERVICES = Object.values(ALL_SERVICES_MAP).filter(s => s.category === "Gas Pipeline Services");
export const OTHER_SERVICES = Object.values(ALL_SERVICES_MAP).filter(s => s.category === "Other Specialized Services");

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Simphu Srinivas",
    role: "Residencial Work",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    quote: "I am writing to thank you for the quality of service provided by your company. We sincerely appreciate your efficient, gracious customer service, the level of detail and accountability you have demonstrated on each project, and the way you conduct business as a whole. NO.1 gas system always NO.1 in their QUALITY.... Thanks a lot"
  },
  {
    id: 2,
    name: "Naren Rajeev Kumar",
    role: "CEO, VPR Gas",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    quote: "Got to work with Mr. Shankar from NGLS for couple of projects. He is highly knowledgeable and understands the customer's requirement and applies the same in his execution."
  },
  {
    id: 3,
    name: "Antony Printo (C F)",
    role: "NOAHS ARK Apartment",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    quote: "I highly recommend No 1 Gas Line System, they are doing great service ahead of competitors in this industry. We finalised this company to do the complete gas piping installation for our flat NOAHS ARK (4 houses @ Saravanampatti). THEY COMPLETED THE PROJECT ON TIME WITH GOOD QUALITY."
  },
  {
    id: 4,
    name: "Prakash Sangeetha",
    role: "Residential Work",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    quote: "Have always been with NGLS and have no reason to change. I have found this company very easy to deal with and will always solve any issues promptly. Extremely happy with their service!"
  },
  {
    id: 5,
    name: "MADHURAM A MANIGANDAN ARUNACHALAM",
    role: "Industrialist",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    quote: "They used high quality & standard materials, good finishing, high Safety, on-time work completed, leak tested as per standards, and reasonable price, ultimately thanks to no 1 gasline system."
  }
];

export const OFFICE_LOCATIONS = {
  headOffice: {
    title: "Head Office",
    address: "#203/1, Rose Garden, Pannimadai, Thadagam Post, Coimbatore, Tamil Nadu, India 641017",
    phone: "+91 98422 12345",
    email: "info@ngls.in"
  },
  warehouse: {
    title: "Central Warehouse",
    address: "#1/132, West Street, P N Palayam, Coimbatore, Tamil Nadu, India 641108",
    phone: "+91 98422 67890",
    email: "warehouse@ngls.in"
  }
};

export const FEATURED_PROJECT_SPOTLIGHT = {
  title: "LOT LPG Pipelines Installation project completed for \"AJJ Bakes, Tuticorin, Tamil Nadu\"",
  desc: "Enjoy the safest way to use fuel gas in your commercial buildings, and industrial sectors in any required locations.",
  videoUrl: "https://www.youtube.com/embed/LNZiT3NbNPM",
  image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
};
