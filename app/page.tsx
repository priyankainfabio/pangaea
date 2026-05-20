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
  { country: "Dubai", roi: "11.2%", yield: "8.4%", residency: "Golden Visa (2-10 Yrs)", appreciation: "+14.2% YoY", x: "65%", y: "48%" },
  { country: "Portugal", roi: "8.9%", yield: "5.2%", residency: "D7 / Golden Route", appreciation: "+17.1% YoY", x: "42%", y: "38%" },
  { country: "Greece", roi: "9.4%", yield: "6.1%", residency: "PR via €250k-800k", appreciation: "+12.8% YoY", x: "48%", y: "40%" },
  { country: "United Kingdom", roi: "7.6%", yield: "4.8%", residency: "Tier 1 / High Net Worth", appreciation: "+6.5% YoY", x: "40%", y: "28%" },
  { country: "Cyprus", roi: "10.1%", yield: "7.0%", residency: "Permanent Residency", appreciation: "+9.2% YoY", x: "51%", y: "42%" }
];

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
      <section className="relative h-screen flex items-center justify-between px-8 lg:px-16 overflow-hidden z-10 pt-16">
        {/* Dynamic Abstract Moving Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#070707] via-[#070707]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-[#070707]/60 z-10" />
          <div className="w-full h-full scale-105 bg-[url('https://images.unsplash.com/photo-1549944850-84e00be42155?auto=format&fit=crop&w=2560&q=80')] bg-cover bg-center mix-blend-luminosity brightness-[0.35] contrast-125 saturate-[0.15] animate-[pulse_12s_ease-in-out_infinite]" />
        </div>

        <div className="relative z-20 max-w-4xl space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase text-[#C8A96B] font-semibold"
          >
            Global Real Estate Advisory
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-[#F5F1E8]"
          >
            Your Wealth Deserves <br />
            <span className="italic font-light text-[#C8A96B]">More Than One Country.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[#A9A39A] font-light max-w-xl text-base md:text-lg leading-relaxed"
          >
            Build institutional global portfolios, secure sovereign residency pathways, and guarantee international mobility through strategic cross-border acquisitions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a href="#intelligence" className="bg-[#C8A96B] text-[#070707] text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#F5F1E8] transition-colors duration-300 text-center">
              Explore Global Markets
            </a>
            <a href="#cta" className="border border-[#F5F1E8]/20 bg-white/5 backdrop-blur-md text-[#F5F1E8] text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:border-[#C8A96B] hover:text-[#C8A96B] transition-colors duration-300 text-center">
              Book Private Strategy Session
            </a>
          </motion.div>
        </div>

        {/* Floating Intelligence Terminal (Right Side) */}
        <div className="hidden lg:flex flex-col gap-4 relative z-20 w-80 mr-8">
          {intelligenceData.slice(0, 4).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.15 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-[#111111]/70 backdrop-blur-xl border border-white/10 p-5 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#C8A96B] opacity-40 group-hover:opacity-100 transition-opacity" />
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-serif text-lg tracking-wide text-[#F5F1E8]">{item.country}</span>
                <span className="text-[10px] tracking-wider text-[#C8A96B] uppercase font-mono font-bold">{item.roi} ROI</span>
              </div>
              <div className="flex justify-between items-center text-[11px] text-[#A9A39A]">
                <span>Yield: {item.yield}</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-white/5 rounded border border-white/5 font-mono">{item.residency.split(' ')[0]} Route</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2: THE SHIFT (MACRO PARADIGM) */}
      <section id="shift" className="relative py-32 px-8 lg:px-16 bg-[#0c0c0c] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs tracking-[0.3em] text-[#C8A96B] uppercase font-semibold">The Sovereign Investor Paradox</span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight leading-tight">
              The Wealthiest Capital <br />
              <span className="italic font-light">No Longer Thinks Locally.</span>
            </h2>
            <p className="text-[#A9A39A] text-sm md:text-base font-light leading-relaxed">
              Domestic asset insulation is an obsolete paradigm. In an era defined by sovereign volatility, currency degradation, and unexpected structural realignments, geographical singular containment represents structural vulnerability.
            </p>
          </div>
          
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
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80')] bg-cover opacity-10 mix-blend-luminosity contrast-150" />
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
            { name: "Discovery", sub: "Investor profiling & wealth goals" },
            { name: "Intelligence", sub: "Global market analytics & risk models" },
            { name: "Legal Matrix", sub: "Cross-border compliance & escrow due diligence" },
            { name: "Acquisition", sub: "Off-market sourcing & tier-one allocation negotiation" },
            { name: "Portfolio Build", sub: "Long-term exit planning & generational wealth scaling" }
          ].map((method, idx) => (
            <div key={idx} className="bg-[#111111] border border-white/5 p-6 flex flex-col justify-between h-80 hover:border-[#C8A96B]/50 transition-all duration-500 group">
              <span className="font-mono text-xs text-[#A9A39A]/40 group-hover:text-[#C8A96B] transition-colors">0{idx + 1}</span>
              <div>
                <h3 className="font-serif text-xl text-[#F5F1E8] mb-2">{method.name}</h3>
                <p className="text-xs text-[#A9A39A] font-light leading-relaxed">{method.sub}</p>
              </div>
            </div>
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-[0.03] mix-blend-luminosity scale-110" />
        
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
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#C8A96B]">Privacy Architecture</a>
            <a href="#" className="hover:text-[#C8A96B]">Regulatory Frameworks</a>
            <a href="#" className="hover:text-[#C8A96B]">Escrow Protocols</a>
          </div>
        </div>
      </footer>

    </div>
  );
}