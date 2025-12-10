import { motion } from 'framer-motion';
import { ArrowRight, GraduationCap, Heart, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { buttonStyles, textStyles } from '../../lib/styles';
import { CounterAnimation } from '../CounterAnimation';
import ImageWithFallback from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

export function HomePage({ onNavigate }) {
  const { t } = useLanguage();

  const impactStats = [
    { value: 12, suffix: '+', label: t('stats.districts'), icon: Users },
    { value: 50000, suffix: '+', label: t('stats.lives'), icon: Heart },
    { value: 10, prefix: 'NPR ', suffix: 'M+', label: t('stats.donations'), icon: TrendingUp },
    { value: 25, suffix: '+', label: t('stats.projects'), icon: GraduationCap },
  ];

  const highlightCards = [
    {
      title: t('nav.about'),
      description: 'Learn about our mission and vision',
      icon: Heart,
      color: 'bg-[#4A0E0E]',
      page: 'about',
    },
    {
      title: t('nav.initiatives'),
      description: 'Explore our healthcare and education programs',
      icon: GraduationCap,
      color: 'bg-[#F8F6F1]',
      textColor: 'text-[#4A0E0E]',
      page: 'initiatives',
    },
    {
      title: t('nav.impact'),
      description: 'See the difference we are making',
      icon: TrendingUp,
      color: 'bg-[#4A0E0E]',
      page: 'impact',
    },
    {
      title: t('nav.getInvolved'),
      description: 'Join us in transforming lives',
      icon: Users,
      color: 'bg-[#F8F6F1]',
      textColor: 'text-[#4A0E0E]',
      page: 'getInvolved',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1610912094854-a0301607b7de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMG1vdW50YWlucyUyMGxhbmRzY2FwZSUyMGhpbWFsYXlhfGVufDF8fHx8MTc2Mjg0NjgwMHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Nepal Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          <div className="absolute inset-0 mandala-bg" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Added responsive text sizing that isn't huge, just legible */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto">
              {t('hero.title')}
            </h1>
            <div className="gold-divider my-8" />
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>

            {/* Made buttons stack on mobile (flex-col) and side-by-side on tablet (sm:flex-row) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => onNavigate('getInvolved')}
                className={`${buttonStyles.secondary} w-full sm:w-auto hover:scale-105`}
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto border-2 border-[#C6A664] text-white hover:bg-[#C6A664] hover:text-[#4A0E0E] hover:scale-105 transition-all duration-300"
              >
                {t('hero.learn')}
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#C6A664] flex justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-[#C6A664]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#800000] mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl md:text-5xl ${textStyles.heading} mb-2`} style={{ fontFamily: 'Playfair Display, serif' }}>
                  <CounterAnimation end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className={textStyles.muted}>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Cards Section */}
      <section className="py-16 md:py-20 mandala-bg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`${textStyles.heading} mb-4`}>Discover Our Work</h2>
            <div className="gold-divider" />
          </motion.div>

          {/* Adjusted grid to 1 col mobile, 2 cols tablet, 4 cols desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlightCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card
                  className="group cursor-pointer overflow-hidden border-none shadow-lg hover-glow h-full flex flex-col"
                  onClick={() => onNavigate(card.page)}
                >
                  <div className={`h-2 ${card.color}`} />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${card.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <card.icon className={`w-7 h-7 ${card.textColor || 'text-white'}`} />
                    </div>
                    <h3 className={`${textStyles.heading} mb-3`}>{card.title}</h3>
                    <p className={`${textStyles.muted} mb-4 flex-1`}>{card.description}</p>
                    <div className={`flex items-center ${textStyles.accent} group-hover:translate-x-2 transition-transform duration-300`}>
                      <span>Explore</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 md:py-24 bg-[#4A0E0E] relative overflow-hidden">
        <div className="absolute inset-0 mandala-bg opacity-10" />

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white">
              Join Hands With Us
            </h2>
            <div className="w-24 h-1 bg-[#C6A664] mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-100 leading-relaxed">
              Together, we can build a brighter future for Nepal. Your support creates lasting change.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() => onNavigate('getInvolved')}
                className="w-full sm:w-auto bg-white text-[#4A0E0E] font-semibold px-8 py-4 rounded-full hover:bg-[#C6A664] hover:text-white transition-all duration-300"
              >
                Donate Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-[#4A0E0E] transition-all duration-300"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}