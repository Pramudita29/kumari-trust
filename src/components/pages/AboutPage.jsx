'use client';

import { motion } from 'framer-motion';
import {
  Award,
  Eye,
  Feather,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Target,
  Users
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import ImageWithFallback from '../figma/ImageWithFallback';

export const textStyles = {
  heading: 'font-["Playfair_Display"] font-bold',
  body: 'font-["Roboto"]',
  accent: 'font-["Roboto"] font-medium text-[#800000]',
  muted: 'font-["Roboto"] text-gray-600',
};

export default function AboutPage() {
  const { t, language } = useLanguage();

  const values = [
    { icon: Feather, title: 'Legacy with Leadership', titleNe: 'नेतृत्वसहितको विरासत', description: 'Honoring our historical roots while shaping a bold, future-oriented agenda.' },
    { icon: Heart, title: 'Compassion & Humanity', titleNe: 'करुणा र मानवता', description: 'Putting people first - uplifting communities with dignity and care.' },
    { icon: Users, title: 'Youth at the Center', titleNe: 'युवा केन्द्रित', description: 'Driving long-term change by equipping and empowering young Nepalis.' },
    { icon: Shield, title: 'Integrity & Sustainability', titleNe: 'सत्यनिष्ठा र दिगोपन', description: 'Ensuring every initiative is credible, transparent, and sustainable.' },
    { icon: Lightbulb, title: 'Knowledge & Innovation', titleNe: 'ज्ञान र नवप्रवर्तन', description: 'Combining traditional wisdom with modern research and technology.' },
    { icon: Award, title: 'Cultural Pride', titleNe: 'सांस्कृतिक गौरव', description: 'Protecting Nepal’s heritage as the foundation of national identity.' },
    { icon: Globe, title: 'Collaboration Over Isolation', titleNe: 'एकल नभई सहकार्य', description: 'Working with government, NGOs/INGOs, academia, and private sector to scale impact.' },
  ];

  // Split values: 4 for Top Row, 3 for Bottom Row
  const topPillars = values.slice(0, 4);
  const bottomPillars = values.slice(4);

  return (
    <div className="min-h-screen pt-20 md:pt-24 font-['Roboto'] bg-gray-50">

      {/* ==================== HERO SECTION ==================== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-[#800000]/5 to-[#D4AF37]/5">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`${textStyles.heading} text-4xl md:text-6xl lg:text-7xl text-[#800000]`}
          >
            {t('about.title') || 'About Kumari Foundation'}
          </motion.h1>
          <div className="mt-6 w-32 h-1 bg-gradient-to-r from-[#800000] via-[#D4AF37] to-[#800000] mx-auto rounded-full" />
        </div>
      </section>

      {/* ==================== OUR STORY ==================== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className={`${textStyles.heading} text-4xl md:text-5xl text-[#800000] mb-8`}>
                Our Story
              </h2>
              <div className={`space-y-6 text-lg leading-relaxed text-gray-700 ${textStyles.body}`}>
                <p>
                  <strong>Kumari Foundation</strong> is a single, unified institution dedicated to transforming Nepal through
                  philanthropy, research, youth empowerment, and sustainable development. Rooted through the lineage of the <strong>Royal Family of Jajarkot</strong> and the heritage of Singha Shumsher Rana, the Foundation is guided by the leadership of <strong>Rajeev Bikram Shah</strong>, a patriot, social reformer, and the current Minister of Economic Affairs and Planning in Karnali Province.
                </p>
                <p>
                  As the first family member in four generations to return to Jajarkot and Karnali, Rajeev Bikram Shah has reconnected deeply with the people and regions tied to his ancestors, carrying forward a legacy of service with renewed purpose. Kumari Foundation operates as one integrated force: we lead philanthropic impact, education, health, community upliftment, heritage restoration, and grassroots development. Whilst also, driving research, policy innovation, youth leadership, governance programs, and strategic development projects.
                </p>
                <p className="font-medium text-[#800000]">
                  Under one united vision, the institution works to build a Nepal that is <strong>strong, compassionate, informed, and future-ready</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1665394183024-7a95b156d427?w=1200&q=80"
                  alt="Royal Heritage of Nepal"
                  className="w-full h-96 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/70 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== MISSION, VISION & ROYAL PILLARS ==================== */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Intro Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`${textStyles.heading} text-4xl md:text-6xl text-[#800000] mb-4`}>
              Our Guiding Principles
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Rooted in royal legacy and driven by service, we are building a Nepal that is strong, compassionate, informed, and future-ready.
            </p>
          </motion.div>

          {/* Vision & Mission Cards */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start mb-24">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#800000] to-[#a52a2a] flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className={`${textStyles.heading} text-2xl md:text-3xl text-[#800000]`}>Vision</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To foster a <strong className="text-[#800000]">compassionate, knowledgeable, progressive, and empowered Nepal</strong> —
                where ancient wisdom meets modern ambition, youth lead with purpose,
                and heritage and innovation together build a golden future for all generations.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#800000] to-[#a52a2a] flex items-center justify-center shadow-lg">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className={`${textStyles.heading} text-2xl md:text-3xl text-[#800000]`}>Mission</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                To create a <strong className="text-[#800000]">strong, compassionate, informed, and future-ready Nepal</strong>
                through community empowerment, youth leadership, evidence-based governance,
                cultural preservation, sustainable development, and honoring our royal legacy of service.
              </p>
            </motion.div>
          </div>
        </div>

        {/* ==================== ROYAL PILLARS (LUXURY EDITION) ==================== */}
        <div className="relative py-32 bg-[#FDFBF7] overflow-hidden">

          {/* 1. Subtle Damask/Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(#800000 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
          </div>

          {/* 2. Golden Glows (Ambient Lighting) */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#800000]/5 rounded-full blur-[120px]" />

          {/* 3. Ornamental Borders */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-50 to-transparent z-10" />

          <div className="container mx-auto px-4 max-w-7xl relative z-20">

            {/* --- SECTION TITLE --- */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-center mb-24"
            >
              <span className="block text-[#D4AF37] tracking-[0.3em] text-sm font-semibold uppercase mb-4">
                {language === 'en' ? 'The Foundational' : 'आधारशिला'}
              </span>
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl lg:text-8xl font-bold text-[#800000]">
                Pillars
              </h2>

              {/* Ornamental Divider */}
              <div className="flex items-center justify-center gap-4 mt-8 opacity-80">
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
                <div className="w-3 h-3 rotate-45 border border-[#D4AF37] bg-[#FDFBF7]" />
                <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
              </div>

              <p className="mt-8 text-xl text-[#5a4a4a] font-['Playfair_Display'] italic max-w-2xl mx-auto">
                {language === 'en'
                  ? 'Seven eternal foundations of service, legacy, and excellence.'
                  : 'सेवा, विरासत र उत्कृष्टताका सात शाश्वत आधारस्तम्भहरू'}
              </p>
            </motion.div>

            {/* --- PILLARS LAYOUT (Fixed: 4 Top / 3 Bottom) --- */}
            <div className="flex flex-col gap-16">

              {/* Row 1: Top 4 Pillars (Forces 4 columns on large screens) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mx-auto max-w-7xl w-full">
                {topPillars.map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="group relative w-full flex flex-col items-center"
                  >
                    {/* Card Background (Appears on Hover) */}
                    <div className="absolute inset-0 bg-white/60 border border-[#D4AF37]/20 rounded-t-full rounded-b-[100px] scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-2xl shadow-[#D4AF37]/10 backdrop-blur-sm -z-10" />

                    {/* ICON CONTAINER */}
                    <div className="relative mb-8">
                      {/* Rotating Outer Ring */}
                      <div className="absolute inset-[-10px] rounded-full border border-dashed border-[#D4AF37]/40 w-[calc(100%+20px)] h-[calc(100%+20px)] animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      {/* Main Medallion */}
                      <div className="w-24 h-24 lg:w-28 lg:h-28 relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#800000] to-[#5a0000] shadow-[0_10px_30px_rgba(128,0,0,0.3)] ring-4 ring-[#FDFBF7] outline outline-1 outline-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 rounded-full border border-white/20" />
                        <pillar.icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#D4AF37] drop-shadow-md" />
                      </div>

                      {/* Decorative bottom jewel */}
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 bg-[#D4AF37] rotate-45 border-4 border-[#FDFBF7] shadow-lg z-10" />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="text-center px-2 relative z-10">
                      <h3 className="font-['Playfair_Display'] text-xl lg:text-2xl font-bold text-[#2c1810] mb-3 group-hover:text-[#800000] transition-colors duration-300">
                        {language === 'en' ? pillar.title : pillar.titleNe}
                      </h3>
                      <div className="h-[2px] w-8 bg-[#D4AF37]/50 mx-auto mb-4 group-hover:w-16 transition-all duration-500" />
                      <p className="text-base text-gray-600 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Row 2: Bottom 3 Pillars (Centered Grid) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mx-auto max-w-5xl w-full">
                {bottomPillars.map((pillar, index) => (
                  <motion.div
                    key={index + 4}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index + 4) * 0.1, duration: 0.8 }}
                    className="group relative w-full flex flex-col items-center"
                  >
                    {/* Card Background */}
                    <div className="absolute inset-0 bg-white/60 border border-[#D4AF37]/20 rounded-t-full rounded-b-[100px] scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 shadow-2xl shadow-[#D4AF37]/10 backdrop-blur-sm -z-10" />

                    {/* ICON CONTAINER */}
                    <div className="relative mb-8">
                      <div className="absolute inset-[-10px] rounded-full border border-dashed border-[#D4AF37]/40 w-[calc(100%+20px)] h-[calc(100%+20px)] animate-[spin_10s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                      <div className="w-24 h-24 lg:w-28 lg:h-28 relative flex items-center justify-center rounded-full bg-gradient-to-br from-[#800000] to-[#5a0000] shadow-[0_10px_30px_rgba(128,0,0,0.3)] ring-4 ring-[#FDFBF7] outline outline-1 outline-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 rounded-full border border-white/20" />
                        <pillar.icon className="w-10 h-10 lg:w-12 lg:h-12 text-[#D4AF37] drop-shadow-md" />
                      </div>

                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 lg:w-6 lg:h-6 bg-[#D4AF37] rotate-45 border-4 border-[#FDFBF7] shadow-lg z-10" />
                    </div>

                    {/* TEXT CONTENT */}
                    <div className="text-center px-2 relative z-10">
                      <h3 className="font-['Playfair_Display'] text-xl lg:text-2xl font-bold text-[#2c1810] mb-3 group-hover:text-[#800000] transition-colors duration-300">
                        {language === 'en' ? pillar.title : pillar.titleNe}
                      </h3>
                      <div className="h-[2px] w-8 bg-[#D4AF37]/50 mx-auto mb-4 group-hover:w-16 transition-all duration-500" />
                      <p className="text-base text-gray-600 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                        {pillar.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

            {/* --- BOTTOM FLOURISH --- */}
            <div className="mt-12 flex flex-col items-center justify-center opacity-80">
              {/* Top Line */}
              <div className="h-12 w-[1px] bg-gradient-to-b from-transparent to-[#D4AF37] mb-4" />

              {/* The Logo */}
              <img
                src="/image.png"
                alt="Kumari Foundation Logo"
                className="w-60 h-auto object-contain drop-shadow-md grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-out"
              />

              {/* Bottom Line */}
              <div className="h-12 w-[1px] bg-gradient-to-t from-transparent to-[#D4AF37] mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOUNDER'S MESSAGE ==================== */}
      <section className="py-20 bg-gradient-to-b from-white to-[#FDFBF7] mt-[-9.5rem]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${textStyles.heading} text-4xl md:text-5xl text-[#800000] mb-4`}>
              Founder’s Message
            </h2>
            <p className={`${textStyles.accent} text-lg`}>From Rajeev Bikram Shah</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#800000] via-[#D4AF37] to-[#800000] mx-auto mt-4 rounded-full" />
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-2xl shadow-2xl border-l-8 border-[#800000]"
          >
            <p className={`${textStyles.body} italic text-lg leading-relaxed text-gray-700`}>
              “My journey back to Karnali and Jajarkot after four generations was more than a return — it was a homecoming of <strong>responsibility</strong>. I inherited a legacy shaped by courage, service, and leadership. Yet, true legacy is not what we receive — it is what we build for those who come after us.
            </p>
            <p className="my-6 text-xl font-semibold text-[#800000]">Kumari Foundation represents this belief.</p>
            <p className={`${textStyles.body} italic text-lg leading-relaxed text-gray-700`}>
              To bring compassion to the grassroots; and ideas to the national stage. We heal communities; and shape policies. Together, we form a vision of a Nepal that is empowered, equitable, and united.
            </p>
            <div className="mt-8 text-lg italic text-gray-700">
              Our goal is simple:
              <ul className="list-disc ml-8 mt-4 space-y-2 text-left">
                <li>To <strong>build people</strong>, not projects.</li>
                <li>To <strong>uplift youth</strong>, not just statistics.</li>
                <li>To create <strong>dignity</strong>, not dependency.</li>
                <li>And to <strong>serve</strong> — not for recognition, but for responsibility.</li>
              </ul>
            </div>
            <p className={`${textStyles.body} italic text-lg mt-8 text-gray-700`}>
              This institution is my family’s commitment to Nepal. But more importantly, it is an invitation to the next generation — to <strong>lead with courage, think with clarity, and serve with heart</strong>.
            </p>
            <p className="text-right mt-10 text-xl font-bold text-[#800000]">
              The legacy begins with us. The future belongs to those we empower.”
            </p>
          </motion.blockquote>
        </div>
      </section>

    </div>
  );
}