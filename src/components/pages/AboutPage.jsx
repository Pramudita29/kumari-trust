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
  Users,
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { textStyles } from '../../lib/styles';
import ImageWithFallback from '../figma/ImageWithFallback';
import { Card } from '../ui/card';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Feather,
      title: 'Legacy with Leadership',
      titleNe: 'नेतृत्वसहितको विरासत',
      description: 'Honoring our historical roots while shaping a bold, future-oriented agenda.',
    },
    {
      icon: Heart,
      title: 'Compassion & Humanity',
      titleNe: 'करुणा र मानवता',
      description: 'Putting people first - uplifting communities with dignity and care.',
    },
    {
      icon: Users,
      title: 'Youth at the Center',
      titleNe: 'युवा केन्द्रित',
      description: 'Driving long-term change by equipping and empowering young Nepalis.',
    },
    {
      icon: Shield,
      title: 'Integrity & Sustainability',
      titleNe: 'सत्यनिष्ठा र दिगोपन',
      description: 'Ensuring every initiative is credible, transparent, and sustainable.',
    },
    {
      icon: Lightbulb,
      title: 'Knowledge & Innovation',
      titleNe: 'ज्ञान र नवप्रवर्तन',
      description: 'Combining traditional wisdom with modern research and technology.',
    },
    {
      icon: Award,
      title: 'Cultural Pride',
      titleNe: 'सांस्कृतिक गौरव',
      description: 'Protecting Nepal’s heritage as the foundation of national identity.',
    },
    {
      icon: Globe,
      title: 'Collaboration Over Isolation',
      titleNe: 'एकल नभई सहकार्य',
      description: 'Working with government, NGOs/INGOs, academia, and private sector to scale impact.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/10 to-[#D4AF37]/10" />
        <div className="absolute inset-0 mandala-bg" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            {/* Responsive Heading Size */}
            <h1 className={`${textStyles.heading} text-4xl md:text-6xl lg:text-7xl mb-6`}>{t('about.title')}</h1>
            <div className="gold-divider mx-auto w-24 md:w-32" />
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className={`${textStyles.heading} text-3xl md:text-5xl mb-6`}>{t('about.story')}</h2>
              <div className={`space-y-4 ${textStyles.body} text-base md:text-lg`}>
                <p>
                  <strong>Kumari Foundation</strong> is a single, unified institution dedicated to transforming Nepal through
                  philanthropy, research, youth empowerment, and sustainable development.
                  Rooted through the lineage of the <strong>Royal Family of Jajarkot</strong> and the heritage of Singha
                  Shumsher Rana, the Foundation is guided by the leadership of <strong>Rajeev Bikram Shah</strong>, a
                  patriot, social reformer, and the current Minister of Economic Affairs and Planning in Karnali
                  Province.
                </p>
                <p>
                  As the first family member in four generations to return to Jajarkot and Karnali, Rajeev
                  Bikram Shah has reconnected deeply with the people and regions tied to his ancestors,
                  carrying forward a legacy of service with renewed purpose.
                  Kumari Foundation operates as one integrated force: we lead philanthropic impact,
                  education, health, community upliftment, heritage restoration, and grassroots development.
                  Whilst also, driving research, policy innovation, youth leadership, governance programs, and
                  strategic development projects.
                  Under one united vision, the institution works to build a Nepal that is <strong>strong, compassionate,
                    informed, and future-ready</strong>.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1665394183024-7a95b156d427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI4NDI5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Nepal Architecture"
                  // Adjusted height for mobile vs desktop
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#D4AF37] to-[#FFD700] rounded-full opacity-20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="p-6 md:p-8 h-full border-t-4 border-t-[#800000] hover-glow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#800000] to-[#D4AF37] flex items-center justify-center mr-4 shrink-0">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className={`${textStyles.heading} text-xl md:text-2xl`}>{t('about.mission')}</h3>
                </div>
                <div className={`${textStyles.body} text-sm md:text-base flex-grow`}>
                  <p className="mb-4">
                    Our mission is dedicated to creating a <strong>strong, compassionate, informed, and future-ready Nepal</strong> by focusing on these core pillars:
                  </p>

                  <ul className="list-disc ml-5 space-y-2 text-[#800000] font-semibold">
                    <li>Empower Communities (Education, Healthcare, Social Support)</li>
                    <li>Equip the Next Generation (Youth Leadership, Innovation, Policy Literacy)</li>
                    <li>Strengthen Governance & Policy (Evidence-based research and strategic partnerships)</li>
                    <li>Preserve Culture & Heritage (Protecting Nepal’s identity and history)</li>
                    <li>Build Sustainable Impact (Credible, long-term, and financially responsible initiatives)</li>
                    <li>Honor Family Legacy (Service, leadership, and nation-building)</li>
                  </ul>
                  <p className="mt-4 text-xs md:text-sm text-gray-600">
                    *See the Story Section for full detailed descriptions of each mission point.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="h-full"
            >
              <Card className="p-6 md:p-8 h-full border-t-4 border-t-[#D4AF37] hover-glow flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center mr-4 shrink-0">
                    <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <h3 className={`${textStyles.heading} text-xl md:text-2xl`}>{t('about.vision')}</h3>
                </div>
                <p className={`${textStyles.body} text-sm md:text-base flex-grow`}>
                  To create a <strong>compassionate, knowledgeable, progressive, and empowered Nepal</strong> by
                  combining <strong>grassroots philanthropy</strong> with <strong>forward-thinking policy, youth leadership, and
                    sustainable development</strong>. Our vision is to honor heritage while shaping a brighter future for generations to
                  come.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 mandala-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className={`${textStyles.heading} text-3xl md:text-5xl mb-4`}>Our Core Values</h2>
            <div className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="h-full"
              >
                <Card className="p-6 text-center h-full hover-glow border-none shadow-lg flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#800000] to-[#D4AF37] mb-4">
                    <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h4 className={`${textStyles.heading} text-lg md:text-xl mb-2`}>{value.title}</h4>
                  <p className={`text-sm ${textStyles.accent} mb-3`}>{value.titleNe}</p>
                  <p className={`${textStyles.muted} text-sm flex-grow`}>{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className={`${textStyles.heading} text-3xl md:text-5xl mb-4`}>Founder’s Message</h2>
            <p className={`${textStyles.accent} text-base md:text-lg mb-2`}>From Rajeev Bikram Shah</p>
            <div className="gold-divider mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <blockquote className="bg-white p-6 md:p-12 rounded-xl shadow-2xl border-l-4 md:border-l-8 border-[#800000] space-y-4">
              <p className={`${textStyles.body} italic text-base md:text-lg`}>
                “My journey back to Karnali and Jajarkot after four generations was more than a return - it
                was a homecoming of <strong>responsibility</strong>. I inherited a legacy shaped by courage, service, and
                leadership. Yet, true legacy is not what we receive - it is what we build for those who come
                after us.
              </p>
              <p className={`${textStyles.body} italic text-base md:text-lg font-semibold text-[#800000]`}>
                Kumari Foundation represents this belief.
              </p>
              <p className={`${textStyles.body} italic text-base md:text-lg`}>
                To bring compassion to the grassroots; and ideas to the national stage. We heal
                communities; and shape policies. Together, we form a vision of a Nepal that is empowered,
                equitable, and united.
              </p>
              <div className={`${textStyles.body} italic text-base md:text-lg`}>
                Our goal is simple:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>To <strong>build people</strong>, not projects.</li>
                  <li>To <strong>uplift youth</strong>, not just statistics.</li>
                  <li>To create <strong>dignity</strong>, not dependency.</li>
                  <li>And to <strong>serve</strong> - not for recognition, but for responsibility.</li>
                </ul>
              </div>
              <p className={`${textStyles.body} italic text-base md:text-lg`}>
                This institution is my family’s commitment to Nepal. But more importantly, it is an invitation to
                the next generation - to <strong>lead with courage, think with clarity, and serve with heart</strong>.
              </p>
              <p className={`${textStyles.body} italic text-base md:text-lg text-right font-bold mt-6`}>
                The legacy begins with us. The future belongs to those we empower.”
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  );
}