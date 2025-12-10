import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';

import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import AboutPage from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { GetInvolvedPage } from './components/pages/GetInvolvedPage';
import { HomePage } from './components/pages/HomePage';
import { ImpactPage } from './components/pages/ImpactPage';
import { InitiativesPage } from './components/pages/InitiativesPage';
import { NewsPage } from './components/pages/NewsPage';

import { Toaster } from './components/ui/sonner';


// NOTE: You might need to adjust the path to your actual logo image file.
const KUMARI_TRUST_LOGO_PATH = '/image.png';


function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page) => setCurrentPage(page);

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage onNavigate={handleNavigate} />;
      case 'about': return <AboutPage />;
      case 'initiatives': return <InitiativesPage />;
      case 'impact': return <ImpactPage />;
      case 'getInvolved': return <GetInvolvedPage />;
      case 'news': return <NewsPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage onNavigate={handleNavigate} />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#4A0E0E] flex items-center justify-center z-50">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">

            {/* --- LOGO REPLACEMENT START --- */}
            {/* The gold circle background is kept, but the text is replaced by the image */}
            <div className="w-32 h-32 bg-[#ebdcbe] rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
              <img
                src={KUMARI_TRUST_LOGO_PATH}
                alt="Kumari Trust Logo"
                className="w-full h-full object-contain p-2"
              />
            </div>
            {/* --- LOGO REPLACEMENT END --- */}

            <h2 className="text-[#F8F6F1] text-3xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Kumari Trust</h2>
            <p className="text-[#C6A664] text-sm">Empowering Nepal Through Compassion</p>
          </motion.div>

          <motion.div className="flex space-x-2 justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-[#C6A664]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, rotate: 0 }} animate={{ opacity: 0.2, rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
            <svg width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="80" stroke="#C6A664" strokeWidth="1" opacity="0.3" />
              <circle cx="100" cy="100" r="60" stroke="#C6A664" strokeWidth="1" opacity="0.3" />
              <circle cx="100" cy="100" r="40" stroke="#C6A664" strokeWidth="1" opacity="0.3" />
              <circle cx="100" cy="100" r="20" stroke="#C6A664" strokeWidth="1" opacity="0.3" />
              <path d="M100 20 L100 180 M20 100 L180 100 M40 40 L160 160 M160 40 L40 160" stroke="#C6A664" strokeWidth="0.5" opacity="0.3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6F1]">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <AnimatePresence mode="wait">
        <motion.div key={currentPage} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
      <Toaster />

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-[#4A0E0E] rounded-full flex items-center justify-center text-[#F8F6F1] shadow-lg hover:shadow-xl transition-shadow z-40 hover:bg-[#3A0B0B]"
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </motion.button>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}