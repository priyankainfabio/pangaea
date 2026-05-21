'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types & Dummy Data ---
interface MarketIntelligence {
  country: string;
  roi: string;
  yield: string;
  residency: string;
  appreciation: string;
  x: string;
  y: string;
}

const intelligenceData: MarketIntelligence[] = [
  {
    country: "Dubai",
    roi: "11.2%",
    yield: "8.4%",
    residency: "Golden Visa (2-10 Yrs)",
    appreciation: "+14.2% YoY",
    x: "63%",
    y: "52%"
  },

  {
    country: "Portugal",
    roi: "8.9%",
    yield: "5.2%",
    residency: "D7 / Golden Route",
    appreciation: "+17.1% YoY",
    x: "46%",
    y: "41%"
  },

  {
    country: "Greece",
    roi: "9.4%",
    yield: "6.1%",
    residency: "PR via €250k-800k",
    appreciation: "+12.8% YoY",
    x: "49%",
    y: "46%"
  },

  {
    country: "United Kingdom",
    roi: "7.6%",
    yield: "4.8%",
    residency: "Tier 1 / High Net Worth",
    appreciation: "+6.5% YoY",
    x: "47%",
    y: "31%"
  },

  {
    country: "Cyprus",
    roi: "10.1%",
    yield: "7.0%",
    residency: "Permanent Residency",
    appreciation: "+9.2% YoY",
    x: "54%",
    y: "49%"
  }
];
const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: "easeOut" },
  },
};

const staggerWrap = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function PangaeaFunnel() {
  const [activeCountry, setActiveCountry] = useState<MarketIntelligence>(intelligenceData[0]);

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#F5F1E8] font-sans selection:bg-[#C8A96B]/30">
      
      {/* GLOBAL NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-[#070707] to-transparent px-8 lg:px-16 py-6 flex justify-between items-center backdrop-blur-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
  
  {/* LOGO */}
  <img
    src="/logo.png"
    alt="Pangaea Realty"
    className="h-10 w-auto object-contain"
  />

  {/* BRAND TEXT */}
  

</div></div>
        <nav className="hidden md:flex space-x-8 text-xs tracking-[0.2em] uppercase text-[#A9A39A]">
          <a href="#shift" className="hover:text-[#C8A96B] transition-colors duration-300">The Paradigm</a>
          <a href="#intelligence" className="hover:text-[#C8A96B] transition-colors duration-300">Intelligence Matrix</a>
          <a href="#mobility" className="hover:text-[#C8A96B] transition-colors duration-300">Mobility Pathways</a>
          <a href="#method" className="hover:text-[#C8A96B] transition-colors duration-300">The Method</a>
        </nav>
        <a href="#cta" className="border border-[#C8A96B]/40 px-5 py-2.5 text-[10px] tracking-[0.25em] uppercase text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#070707] transition-all duration-500 rounded-none">
          Private Access
        </a>
      </header>

      {/* SECTION 1: CINEMATIC HERO */}
      {/* SECTION 1: STRONGER CINEMATIC HERO */}
<section className="relative h-screen flex items-center justify-between px-8 lg:px-16 overflow-hidden z-10 pt-16">

  {/* CINEMATIC BACKGROUND */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    



{/* cinematic hero video */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover scale-125 opacity-110"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>

    {/* dark luxury overlays */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/85 to-[#070707]/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/80" />

    {/* gold atmosphere */}
    <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] bg-[#C8A96B]/12 blur-[180px] rounded-full" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#C8A96B]/8 blur-[160px] rounded-full" />
  </div>

  {/* LEFT HERO CONTENT */}
  <div className="relative z-20 max-w-4xl space-y-7">
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-xs tracking-[0.45em] uppercase text-[#C8A96B] font-semibold"
    >
      Private Global Real Estate Advisory
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[-0.035em] leading-[0.95] text-[#F5F1E8]"
    >
      Your Wealth Deserves <br />
      <span className="italic font-light text-[#C8A96B]">
        More Than One Country.
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-[#A9A39A] font-light max-w-xl text-base md:text-lg leading-relaxed"
    >
      Build global assets, residency pathways, and long-term wealth security
      through strategic international real estate ownership.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.65 }}
      className="text-[11px] uppercase tracking-[0.28em] text-[#C8A96B]/80"
    >
      Confidential allocations available only to qualified investors.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col sm:flex-row gap-4 pt-4"
    >
      <a
        href="#cta"
        className="bg-[#C8A96B] text-[#070707] text-xs font-semibold tracking-[0.25em] uppercase px-9 py-4 hover:bg-[#F5F1E8] transition-colors duration-300 text-center"
      >
        Request Private Access
      </a>

      <a
        href="#intelligence"
        className="border border-[#F5F1E8]/20 bg-white/5 backdrop-blur-md text-[#F5F1E8] text-xs font-semibold tracking-[0.25em] uppercase px-9 py-4 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors duration-300 text-center"
      >
        Explore Global Markets
      </a>
    </motion.div>

    
  </div>

  {/* RIGHT SIDE FLOATING INTELLIGENCE SYSTEM */}
  <div className="hidden lg:block relative z-20 w-[390px] h-[520px] mr-4">

    {/* mini world panel */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute top-0 right-0 w-full border border-white/10 bg-[#111111]/60 backdrop-blur-2xl p-5 shadow-2xl"
    >
      <div className="flex justify-between items-center mb-5">
        <span className="text-[10px] uppercase tracking-[0.3em] text-[#C8A96B]">
          Wealth Intelligence
        </span>
        <span className="h-2 w-2 rounded-full bg-[#C8A96B] shadow-[0_0_18px_rgba(200,169,107,0.8)]" />
      </div>

      <div className="space-y-4">
        {[
          ["Dubai", "8.4% Rental Yield"],
          ["Portugal", "Residency Pathway Active"],
          ["Greece", "PR Route Open"],
          ["UAE", "Golden Visa Eligible"],
        ].map((item, index) => (
          <motion.div
            key={index}
            animate={{ y: [0, -6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
              delay: index * 0.5,
            }}
            className="border border-white/8 bg-white/[0.04] p-4 hover:border-[#C8A96B]/40 transition-all duration-300"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-xl text-[#F5F1E8]">
                {item[0]}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C8A96B]">
                {item[1]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* graph card */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute bottom-[-47px] right-12 w-[300px] border border-[#C8A96B]/20 bg-[#070707]/70 backdrop-blur-xl p-5"
    >
      <span className="text-[10px] uppercase tracking-[0.3em] text-[#A9A39A]">
        Portfolio Growth Index
      </span>

      <svg viewBox="0 0 260 120" className="mt-4 h-28 w-full overflow-visible">
        <line x1="0" y1="90" x2="260" y2="90" stroke="#C8A96B20" />
        <line x1="0" y1="55" x2="260" y2="55" stroke="#C8A96B15" />

        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.1 }}
          d="M5 100 C45 90, 75 70, 110 68 C150 66, 175 35, 255 18"
          fill="none"
          stroke="#C8A96B"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  </div>
</section>

      {/* SECTION 2: THE SHIFT (MACRO PARADIGM) */}
      <section id="shift" className="relative py-32 px-8 lg:px-16 bg-[#0c0c0c] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-xs tracking-[0.3em] text-[#C8A96B] uppercase font-semibold">The Sovereign Investor Paradox</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
              The Wealthiest Capital <br />
              <span className="italic font-light">No Longer Thinks Locally.</span>
            </h2>
            <p className="text-[#A9A39A] text-sm md:text-base font-light leading-relaxed">
              Domestic asset insulation is an obsolete paradigm. In an era defined by sovereign volatility, currency degradation, and unexpected structural realignments, geographical singular containment represents structural vulnerability.
            </p>
          </motion.div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Inflation Insulation", desc: "Real estate in strategic global hubs serves as a structural baseline hedge against fiat degradation.", stat: "Fiat Vulnerability" },
              { label: "Jurisdictional Hedging", desc: "Spreading corporate and capital infrastructure across detached legislative frameworks guarantees stability.", stat: "Diversification Rule" },
              { label: "Absolute Freedom", desc: "Acquiring tiered international properties delivers alternative premium passports and permanent exit options.", stat: "Sovereign Mobility" },
              { label: "Tax Matrix Optimization", desc: "Deploy strategic assets into highly favorable jurisdictional legal frameworks without friction.", stat: "Capital Protection" }
            ].map((risk, index) => (
              <div key={index} className="bg-[#111111] p-8 border border-white/5 relative group hover:border-[#C8A96B]/30 transition-all duration-500">
                <span className="text-[10px] font-mono tracking-widest text-[#C8A96B] block mb-2 uppercase">{risk.stat}</span>
                <h3 className="font-serif text-xl mb-3 text-[#F5F1E8]">{risk.label}</h3>
                <p className="text-xs text-[#A9A39A] font-light leading-relaxed">{risk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE GLOBAL INTELLIGENCE DASHBOARD */}
      <section id="intelligence" className="py-32 px-8 lg:px-16 bg-[#070707] relative">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#C8A96B] uppercase font-semibold">Global Sovereign Map</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-2">The Intelligence Matrix</h2>
          </div>
          <p className="text-[#A9A39A] text-xs max-w-sm font-light tracking-wide uppercase leading-relaxed">
            Click target nodes to instantly render deployment parameters and global yield indexes.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Mock Interactive Digital Map Space */}
          <div className="lg:col-span-8 bg-[#111111] border border-white/10 h-[450px] relative overflow-hidden group shadow-inner">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-10 "
              style={{
                backgroundImage: "url('/world_map.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10" />
            
            {/* Interactive Country Node Triggers */}
            {intelligenceData.map((country) => (
              <button
                key={country.country}
                onClick={() => setActiveCountry(country)}
                style={{ top: country.y, left: country.x }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 flex items-center justify-center"
              >
                <span className={`absolute inline-flex h-6 w-6 rounded-full animate-ping opacity-25 transition-colors ${activeCountry.country === country.country ? 'bg-[#C8A96B]' : 'bg-white'}`} />
                <span className={`relative rounded-full h-3 w-3 transition-transform duration-300 group-hover:scale-125 ${activeCountry.country === country.country ? 'bg-[#C8A96B]' : 'bg-white/40'}`} />
                <span className="absolute left-5 text-[10px] tracking-widest uppercase text-white/50 bg-[#070707]/80 px-2 py-0.5 border border-white/5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {country.country}
                </span>
              </button>
            ))}

            <div className="absolute bottom-6 left-6 z-20">
              <span className="text-[10px] font-mono tracking-widest text-[#A9A39A]/60 uppercase block">Active Grid Array</span>
              <span className="text-xs font-light tracking-widest text-[#C8A96B] uppercase">Multi-Jurisdictional Framework</span>
            </div>
          </div>

          {/* Dynamic Macro Intelligence Display Panel */}
          <div className="lg:col-span-4 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCountry.country}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#111111] border border-[#C8A96B]/20 p-8 space-y-8 shadow-2xl relative"
              >
                <div className="border-b border-white/10 pb-4">
                  <span className="text-[10px] font-mono text-[#C8A96B] tracking-widest uppercase">Selected Port of Entry</span>
                  <h3 className="font-serif text-3xl text-[#F5F1E8] mt-1">{activeCountry.country}</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <span className="text-[10px] uppercase text-[#A9A39A] tracking-wider block">Net Capital Return</span>
                    <span className="text-xl font-serif text-[#C8A96B] mt-1 block">{activeCountry.roi}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#A9A39A] tracking-wider block">Prime Rental Yield</span>
                    <span className="text-xl font-serif text-[#C8A96B] mt-1 block">{activeCountry.yield}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#A9A39A] tracking-wider block">Market Appreciation</span>
                    <span className="text-xs font-medium text-[#F5F1E8] mt-1 block">{activeCountry.appreciation}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-[#A9A39A] tracking-wider block">Sovereign Program</span>
                    <span className="text-xs font-medium text-[#F5F1E8] mt-1 block whitespace-nowrap overflow-hidden text-ellipsis">{activeCountry.residency}</span>
                  </div>
                </div>

                <div className="bg-[#070707] p-4 border border-white/5 text-[11px] text-[#A9A39A] font-light leading-relaxed">
                  Institutional acquisition here grants frictionless access configurations to regional economic ecosystems and verified capital protection architectures.
                </div>

                <a href="#cta" className="block text-center border border-[#C8A96B] py-3 text-xs tracking-widest uppercase font-semibold text-[#C8A96B] hover:bg-[#C8A96B] hover:text-[#070707] transition-all duration-300">
                  Request Dossier
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* SECTION 4: RESIDENCY EXPERIENCE (TIMELINE) */}
      <section id="mobility" className="py-32 bg-[#0c0c0c] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 mb-20 text-center">
          <span className="text-xs tracking-[0.4em] text-[#C8A96B] uppercase font-semibold">Sovereign Autonomy Timeline</span>
          <h2 className="font-serif text-4xl md:text-6xl tracking-tight mt-3">Buy Property. Unlock Global Freedom.</h2>
          <p className="text-[#A9A39A] font-light max-w-xl mx-auto mt-4 text-sm md:text-base">
            The systematic process maps out frictionless migration workflows to shelter capital and deploy alternative generational passports.
          </p>
        </div>

        {/* Horizontal Process Matrix Flow */}
        <div className="px-8 lg:px-16 max-w-7xl mx-auto overflow-x-auto no-scrollbar flex gap-8 pb-8">
          {[
            { step: "01", title: "Target Selection", detail: "Custom capital diagnostics map target tax metrics to sovereign residency vectors." },
            { step: "02", title: "Asset Acquisition", desc: "Undermarket placement acquisition executed via top-tier cross-border entities." },
            { step: "03", title: "Sovereign Filing", detail: "Frictionless legal structures handle multi-tiered legal submission pipelines." },
            { step: "04", title: "Residency Granted", detail: "Issuance of permanent residency markers or direct strategic passport status." },
            { step: "05", title: "Unbound Freedom", detail: "Absolute international asset leverage and unmitigated freedom of movement." }
          ].map((item, idx) => (
            <div key={idx} className="min-w-[280px] lg:min-w-[320px] bg-[#111111] border border-white/5 p-8 relative flex flex-col justify-between h-72">
              <div>
                <span className="font-mono text-xs text-[#C8A96B] tracking-widest block mb-4">{item.step} // VECTOR</span>
                <h3 className="font-serif text-2xl mb-3 text-[#F5F1E8]">{item.title}</h3>
                <p className="text-xs text-[#A9A39A] font-light leading-relaxed">{item.detail || item.desc}</p>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-[#C8A96B]/40 to-transparent mt-6" />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: THE PANGAEA METHOD (STRATEGY MATRIX) */}
      <section id="method" className="py-32 px-8 lg:px-16 bg-[#070707] relative">
        <div className="max-w-7xl mx-auto mb-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#C8A96B] uppercase font-semibold">Institutional Blueprint</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-2">The Pangaea Method</h2>
          </div>
          <p className="text-[#A9A39A] font-light text-sm md:text-base max-w-lg leading-relaxed">
            Where institutional elite intelligence converges with top-tier asset generation. We function as a boutique cross-border family legal office and global real estate engine.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
  {[
    { name: "Discovery", sub: "Investor profiling & wealth goals", visual: "radar" },
    { name: "Intelligence", sub: "Global market analytics & risk models", visual: "graph" },
    { name: "Legal Matrix", sub: "Cross-border compliance & escrow due diligence", visual: "shield" },
    { name: "Acquisition", sub: "Off-market sourcing & tier-one allocation negotiation", visual: "tower" },
    { name: "Portfolio Build", sub: "Long-term exit planning & generational wealth scaling", visual: "network" },
  ].map((method, idx) => (
    <motion.div
      key={idx}
      initial="rest"
      whileHover="hover"
      animate="rest"
      variants={{ rest: {}, hover: {} }}
      className="group relative h-[360px] overflow-hidden border border-white/5 bg-[#111111] p-6 transition-all duration-700 hover:-translate-y-2 hover:border-[#C8A96B]/50 hover:shadow-[0_0_60px_rgba(200,169,107,0.08)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#C8A96B12,transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <span className="absolute right-4 top-2 text-7xl font-serif text-white/[0.035]">
        0{idx + 1}
      </span>

      <div className="relative h-40 flex items-center justify-center overflow-hidden">
        {method.visual === "radar" && (
          <motion.div
            variants={{ rest: { rotate: 0 }, hover: { rotate: 360 } }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="relative h-28 w-28 rounded-full border border-[#C8A96B]/40"
          >
            <div className="absolute inset-4 rounded-full border border-[#C8A96B]/25" />
            <div className="absolute inset-8 rounded-full border border-[#C8A96B]/25" />
            <div className="absolute left-1/2 top-0 h-full w-[1px] bg-[#C8A96B]/30" />
            <div className="absolute top-1/2 left-0 h-[1px] w-full bg-[#C8A96B]/30" />
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8A96B]" />
          </motion.div>
        )}

        {method.visual === "graph" && (
          <svg viewBox="0 0 200 100" className="h-full w-full overflow-visible">
            <line x1="0" y1="80" x2="200" y2="80" stroke="#C8A96B20" />
            <line x1="0" y1="50" x2="200" y2="50" stroke="#C8A96B15" />
            <line x1="0" y1="20" x2="200" y2="20" stroke="#C8A96B10" />

            <motion.path
              variants={{ rest: { pathLength: 0 }, hover: { pathLength: 1 } }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              d="M10 85 C40 72, 70 60, 100 52 C130 40, 160 25, 190 8"
              fill="none"
              stroke="#C8A96B"
              strokeWidth="3"
              strokeLinecap="round"
              className="drop-shadow-[0_0_10px_rgba(200,169,107,0.8)]"
            />

            <motion.circle
              variants={{ rest: { scale: 0 }, hover: { scale: 1 } }}
              transition={{ duration: 0.4, delay: 0.8 }}
              cx="190"
              cy="8"
              r="4"
              fill="#C8A96B"
            />
          </svg>
        )}

        {method.visual === "shield" && (
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="h-28 w-24 rounded-b-[42px] rounded-t-xl border-2 border-[#C8A96B]/50" />
            <div className="absolute inset-4 rounded-b-[26px] rounded-t-md border border-[#C8A96B]/25" />
            <motion.div
              variants={{ rest: { opacity: 0, scale: 0.5 }, hover: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.4 }}
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#C8A96B]/40"
            />
          </motion.div>
        )}

        {method.visual === "tower" && (
  <div className="flex h-32 items-end gap-2">
    {[
      "group-hover:h-[52px]",
      "group-hover:h-[78px]",
      "group-hover:h-[106px]",
      "group-hover:h-[138px]",
    ].map((hoverHeight, i) => (
      <div
        key={i}
        className={`h-[25px] w-8 border border-[#C8A96B]/40 bg-[#C8A96B]/20 transition-all duration-700 ${hoverHeight}`}
      />
    ))}
  </div>
)}

        {method.visual === "network" && (
          <div className="relative h-32 w-44">
            <motion.svg className="absolute inset-0 h-full w-full">
              <motion.line x1="30" y1="85" x2="85" y2="60" stroke="#C8A96B50" />
<motion.line x1="85" y1="60" x2="135" y2="35" stroke="#C8A96B50" /></motion.svg>


            {[
              { x: 30, y: 85 },
              { x: 85, y: 60 },
              { x: 135, y: 35 },
            ].map((node, i) => (
              <motion.div
                key={i}
                variants={{
                  rest: { opacity: 0.35, scale: 1 },
                  hover: { opacity: 1, scale: 1.25 },
                }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="absolute h-3 w-3 rounded-full bg-[#C8A96B] shadow-[0_0_18px_rgba(200,169,107,0.8)]"
                style={{ left: node.x, top: node.y }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mt-8">
        <h3 className="mb-3 font-serif text-2xl text-[#F5F1E8]">
          {method.name}
        </h3>
        <p className="text-sm font-light leading-relaxed text-[#A9A39A]">
          {method.sub}
        </p>
      </div>
    </motion.div>
  ))}
</div>
      </section>

      {/* SECTION 6: INVESTOR VERIFIED DOSSIERS */}
      <section className="py-32 bg-[#0c0c0c] px-8 lg:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto mb-16">
          <span className="text-xs tracking-[0.3em] text-[#C8A96B] uppercase font-semibold">Verified Capital Deployments</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-2">Investor Case Profiles</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            { title: "The Sovereign Tech Frontier", deployment: "€4,200,000 Allocation", route: "Mumbai to Lisbon / Athens", yield: "6.8% Net Yield", outcome: "Schengen Residence Validated" },
            { title: "Liquid Asset Insulation", deployment: "$12,500,000 Portfolio Placement", route: "London to Dubai Downtown", yield: "8.2% Tax-Free Yield", outcome: "UAE 10-Year Golden Visa Secured" }
          ].map((story, idx) => (
            <div key={idx} className="bg-[#111111] p-10 border border-white/5 flex flex-col justify-between space-y-8 relative group">
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-white/20">CONFIDENTIAL // TRANS-0{idx+1}</div>
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#C8A96B] uppercase tracking-widest">{story.route}</span>
                <h3 className="font-serif text-2xl lg:text-3xl text-[#F5F1E8] font-light">{story.title}</h3>
              </div>
              <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-[11px]">
                <div>
                  <span className="text-[#A9A39A] block mb-1">Capital Value</span>
                  <span className="font-semibold text-[#F5F1E8]">{story.deployment}</span>
                </div>
                <div>
                  <span className="text-[#A9A39A] block mb-1">Performance</span>
                  <span className="font-semibold text-[#F5F1E8]">{story.yield}</span>
                </div>
                <div>
                  <span className="text-[#A9A39A] block mb-1">Sovereign Vector</span>
                  <span className="font-semibold text-[#C8A96B]">{story.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: MARKET INSIGHTS MATRIX */}
      <section className="py-32 px-8 lg:px-16 bg-[#070707]">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#C8A96B] uppercase font-semibold">Institutional Grade Data</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mt-2">H1 Sovereign Capital Index</h2>
          </div>
          <span className="text-xs font-mono text-[#A9A39A] tracking-wider bg-white/5 px-3 py-1 border border-white/5">UPDATED: REAL-TIME MATRIX 2026</span>
        </div>

        <div className="max-w-7xl mx-auto overflow-x-auto no-scrollbar border border-white/10">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-[#111111] border-b border-white/10 text-[10px] uppercase font-mono tracking-widest text-[#A9A39A]">
                <th className="py-4 px-6">Jurisdictional Node</th>
                <th className="py-4 px-6">Avg Entry Limit</th>
                <th className="py-4 px-6">5-Year Growth Forecast</th>
                <th className="py-4 px-6">Regulatory Liquidity Risk</th>
                <th className="py-4 px-6 text-right">Strategic Rating</th>
              </tr>
            </thead>
            <tbody className="text-xs font-light divide-y divide-white/5">
              {[
                { jurisdiction: "Dubai (UAE Prime Area)", entry: "$550,000", growth: "+38.4%", risk: "Negligible / Low", rating: "AAA" },
                { jurisdiction: "Lisbon (Portugal Historic)", entry: "$540,000", growth: "+29.1%", risk: "Moderate / Stable", rating: "AA+" },
                { jurisdiction: "Athens (Greece Coastal)", entry: "$430,000", growth: "+41.2%", risk: "Low / Favorable", rating: "AAA" },
                { jurisdiction: "London (Mayfair / Core)", entry: "$2,100,000", growth: "+14.8%", risk: "Very Low", rating: "AA" }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 px-6 font-serif text-sm text-[#F5F1E8]">{row.jurisdiction}</td>
                  <td className="py-5 px-6 text-[#A9A39A] font-mono">{row.entry}</td>
                  <td className="py-5 px-6 text-emerald-400 font-mono font-medium">{row.growth}</td>
                  <td className="py-5 px-6 text-[#A9A39A]">{row.risk}</td>
                  <td className="py-5 px-6 text-right font-mono font-bold text-[#C8A96B]">{row.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 8: FINAL DISCRETE CTA */}
      <section id="cta" className="relative py-40 px-8 lg:px-16 bg-[#0c0c0c] border-t border-white/10 text-center overflow-hidden">
        <div
  className="absolute inset-0 bg-cover bg-center opacity-[0.5] mix-blend-luminosity scale-110"
  style={{
    backgroundImage: "url('/luxuary_home.jpg')",
  }}
/>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="text-xs tracking-[0.4em] text-[#C8A96B] uppercase font-semibold">Strictly Private Intake</span>
          <h2 className="font-serif text-5xl md:text-7xl tracking-tight text-[#F5F1E8]">
            The Future Belongs To Those <br />
            <span className="italic font-light text-[#C8A96B]">Who Think Globally.</span>
          </h2>
          <p className="text-[#A9A39A] font-light max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Initiate connection with our cross-border advisory board. Strategy sessions are strictly confidential and limited to qualified net worth allocations.
          </p>
          <div className="pt-6">
            <button className="bg-[#C8A96B] text-[#070707] text-xs font-bold tracking-[0.3em] uppercase px-12 py-5 hover:bg-[#F5F1E8] transition-colors duration-500 rounded-none shadow-2xl">
              Book Your Global Wealth Strategy Session
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#070707] border-t border-white/5 text-[#A9A39A] py-16 px-8 lg:px-16 text-xs font-light">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.2em] text-[#F5F1E8] uppercase">Pangaea</span>
              <span className="text-[8px] tracking-[0.4em] text-[#C8A96B] uppercase mt-0.5">Global Wealth Advisory</span>
            </div>
            <p className="max-w-xs text-[#A9A39A]/60 leading-relaxed text-[11px]">
              Institutional tier global property positioning framework execution and cross-border residence portfolio engineering.
            </p>
          </div>
          <div>
            <h4 className="text-[#F5F1E8] font-mono text-[10px] tracking-widest uppercase mb-4">Core Hubs</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#" className="hover:text-[#C8A96B]">Dubai Marina Elite</a></li>
              <li><a href="#" className="hover:text-[#C8A96B]">Athens Riviera</a></li>
              <li><a href="#" className="hover:text-[#C8A96B]">Lisbon Historic</a></li>
              <li><a href="#" className="hover:text-[#C8A96B]">London Prime Core</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#F5F1E8] font-mono text-[10px] tracking-widest uppercase mb-4">Advisory</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#" className="hover:text-[#C8A96B]">Wealth Architecture</a></li>
              <li><a href="#" className="hover:text-[#C8A96B]">Residency Pathways</a></li>
              <li><a href="#" className="hover:text-[#C8A96B]">Sovereign Portfolios</a></li>
              <li><a href="#" className="hover:text-[#C8A96B]">Off-Market Intake</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#F5F1E8] font-mono text-[10px] tracking-widest uppercase mb-4">Intelligence</h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#" className="hover:text-[#C8A96B]">H1 Macro Briefing</a></li>
              <li><a href="#" className="hover:text-[#C8A96B]">Global Asset Rankings</a></li>
              <li><a href="#" className="hover:text-[#C8A96B]">Jurisdictional Matrix</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] text-[#A9A39A]/40 gap-4">
          <div>© {new Date().getFullYear()} Pangaea Realty Advisory Network. All sovereign rights reserved.</div>
          <div className="flex items-center gap-6">

  <span className="text-[11px] tracking-wide text-white/35">
    Privacy Architecture
  </span>

  <span className="text-[11px] tracking-wide text-white/35">
    Regulatory Frameworks
  </span>

  <span className="text-[11px] tracking-wide text-white/35">
    Escrow Protocols
  </span>

  {/* divider */}
  <span className="h-4 w-px bg-[#C8A96B]/15" />

  {/* credits */}
  <div className="flex items-center gap-3">

    

    <a
      href="https://fabulousmedia.in/"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-70 transition-all duration-300 hover:opacity-100"
    >
      <img
        src="/fabulous-logo.png"
        alt="FabulousMedia"
        className="h-3 w-auto object-contain opacity-80 grayscale hover:grayscale-0"
      />
    </a>

    <span className="h-3 w-px bg-[#C8A96B]/15" />

    <a
      href="https://gocommercially.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-70 transition-all duration-300 hover:opacity-100"
    >
      <img
        src="/gocommercially-logo.svg"
        alt="GoCommercially"
        className="h-3 w-auto object-contain opacity-80 grayscale hover:grayscale-0"
      />
    </a>

  </div>

</div>
          
        </div>
      </footer>

    </div>
  );
}