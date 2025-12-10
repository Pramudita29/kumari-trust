import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

const KUMARI_TRUST_LOGO_PATH = '/image.png';

export function Navigation({ currentPage, onNavigate }) {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'about', label: t('nav.about') },
    { key: 'initiatives', label: t('nav.initiatives') },
    { key: 'impact', label: t('nav.impact') },
    { key: 'getInvolved', label: t('nav.getInvolved') },
    { key: 'news', label: t('nav.news') },
    { key: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Logic: Transparent only on Home page, at the top, when menu is closed
  const isHeroSection = currentPage === 'home' && !scrolled && !mobileMenuOpen;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeroSection ? 'bg-transparent py-4' : 'bg-[#4A0E0E] shadow-xl py-2'
        }`}
    >
      {/* Container aligned with the rest of the website */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* --- LEFT: LOGO & BRAND --- */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group z-50 focus:outline-none"
          >
            {/* Logo Circle */}
            <div
              className={`rounded-full flex items-center justify-center p-1 transition-all duration-300 flex-shrink-0
                ${isHeroSection
                  ? 'bg-white/20 backdrop-blur-md border-2 border-white/30 w-14 h-14 md:w-16 md:h-16'
                  : 'bg-[#ebdcbe] w-10 h-10 md:w-12 md:h-12' // Slightly smaller on scroll for compact look
                }`}
            >
              <img
                src={KUMARI_TRUST_LOGO_PATH}
                alt="Kumari Trust"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Text Brand */}
            <div className="text-left flex flex-col justify-center">
              <span
                className={`font-bold leading-tight transition-colors duration-300 whitespace-nowrap
                  ${isHeroSection
                    ? 'text-white text-xl md:text-2xl drop-shadow-md'
                    : 'text-[#F8F6F1] text-lg md:text-xl'
                  }`}
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Kumari Trust
              </span>
              <span
                className={`text-[10px] md:text-xs uppercase tracking-wider font-medium transition-colors duration-300
                  ${isHeroSection ? 'text-white/90' : 'text-[#F8F6F1]/70'}`}
              >
                {t('footer.founder')}
              </span>
            </div>
          </button>

          {/* --- CENTER: DESKTOP NAVIGATION --- */}
          {/* Hidden on mobile/tablet, Visible on Laptop (lg) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`relative text-sm xl:text-base font-medium transition-colors hover:opacity-100
                  ${currentPage === item.key
                    ? isHeroSection ? 'text-white opacity-100' : 'text-[#C6A664] opacity-100'
                    : isHeroSection ? 'text-white/80 hover:text-white' : 'text-[#F8F6F1]/80 hover:text-[#C6A664]'
                  }`}
              >
                {item.label}
                {/* Active Indicator Line */}
                {currentPage === item.key && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full ${isHeroSection ? 'bg-white' : 'bg-[#C6A664]'
                      }`}
                  />
                )}
              </button>
            ))}
          </div>

          {/* --- RIGHT: ACTIONS (Lang + Menu Toggle) --- */}
          <div className="flex items-center gap-3 md:gap-4 z-50">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === 'en' ? 'ne' : 'en')}
              className={`flex items-center gap-2 h-9 px-3 rounded-full border transition-all duration-300
                ${isHeroSection
                  ? 'border-white/30 bg-white/10 text-white hover:bg-white/20'
                  : 'border-[#C6A664]/50 text-[#F8F6F1] hover:border-[#C6A664] hover:text-[#C6A664] hover:bg-transparent'
                }`}
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs md:text-sm font-medium pt-0.5">
                {language === 'en' ? 'नेपाली' : 'English'}
              </span>
            </Button>

            {/* Mobile Menu Burger (Visible below lg breakpoint) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors
                ${isHeroSection
                  ? 'text-white hover:bg-white/10'
                  : 'text-[#F8F6F1] hover:bg-white/5'
                }`}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#4A0E0E] border-t border-[#C6A664]/30 shadow-2xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`text-left py-3 px-4 rounded-lg text-base font-medium transition-all
                    ${currentPage === item.key
                      ? 'bg-[#C6A664] text-[#4A0E0E]'
                      : 'text-[#F8F6F1] hover:bg-[#C6A664]/10 hover:translate-x-1'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}