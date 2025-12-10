import { Facebook, Heart, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Define the path to your logo (Adjust this if necessary)
const KUMARI_TRUST_LOGO_PATH = '/image.png';

export function Footer({ onNavigate }) {
    const { t } = useLanguage();

    const handleNavClick = (page) => {
        onNavigate(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#4A0E0E] text-[#F8F6F1] mt-12 md:mt-20">
            {/* Decorative top border */}
            <div className="h-1 bg-[#C6A664]" />

            <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">

                    {/* 1. About Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            {/* Logo Container */}
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ebdcbe] rounded-full flex items-center justify-center p-1 flex-shrink-0">
                                <img
                                    src={KUMARI_TRUST_LOGO_PATH}
                                    alt="Kumari Trust Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="font-bold text-lg md:text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Kumari Trust
                            </div>
                        </div>
                        <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex items-center space-x-2 text-[#D4AF37]">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm font-medium">{t('footer.founder')}</span>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {t('footer.quickLinks')}
                        </h4>
                        <ul className="space-y-3">
                            {['about', 'initiatives', 'impact', 'news', 'contact'].map((page) => (
                                <li key={page}>
                                    <button
                                        onClick={() => handleNavClick(page)}
                                        className="text-sm text-gray-300 hover:text-[#D4AF37] hover:translate-x-1 transition-all duration-200"
                                    >
                                        {t(`nav.${page}`)}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {t('contact.title')}
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-sm text-gray-300">
                                <MapPin className="w-5 h-5 text-[#C6A664] flex-shrink-0 mt-0.5" />
                                <span>Kathmandu, Nepal</span>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-gray-300">
                                <Phone className="w-5 h-5 text-[#C6A664] flex-shrink-0" />
                                <a href="tel:+9779813516571" className="hover:text-white transition-colors">
                                    +977-9813516571
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 text-sm text-gray-300">
                                <Mail className="w-5 h-5 text-[#C6A664] flex-shrink-0" />
                                <a href="mailto:kumari.trust25@gmail.com" className="hover:text-white transition-colors">
                                    kumari.trust25@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Social Media & Decoration */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h4 className="font-semibold text-lg mb-4 text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {t('footer.connect')}
                            </h4>
                            <div className="flex space-x-3">
                                {/* CHANGED: Uses button instead of <a> with href="#" to fix lint warning */}
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                                    <button
                                        key={idx}
                                        type="button"
                                        className="w-10 h-10 rounded-full bg-[#C6A664]/10 border border-[#C6A664]/30 hover:bg-[#C6A664] hover:text-[#4A0E0E] flex items-center justify-center transition-all duration-300 group"
                                        aria-label={Icon.displayName || 'Social Media Link'}
                                    >
                                        <Icon className="w-5 h-5 text-[#D4AF37] group-hover:text-[#4A0E0E] transition-colors" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Mandala Decoration - Hidden on very small screens to save space, visible on tablet+ */}
                        <div className="mt-8 opacity-20 hidden sm:block">
                            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="40" stroke="#D4AF37" strokeWidth="1" />
                                <circle cx="50" cy="50" r="30" stroke="#D4AF37" strokeWidth="1" />
                                <circle cx="50" cy="50" r="20" stroke="#D4AF37" strokeWidth="1" />
                                <path d="M50 10 L50 90 M10 50 L90 50 M20 20 L80 80 M80 20 L20 80" stroke="#D4AF37" strokeWidth="0.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#C6A664]/30 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
                    <p className="text-xs md:text-sm text-[#F8F6F1]/60">
                        © {new Date().getFullYear()} {t('footer.copyright')}
                    </p>
                    <div className="flex space-x-6 text-xs md:text-sm text-[#F8F6F1]/60">
                        <button className="hover:text-[#C6A664] transition-colors">
                            Privacy Policy
                        </button>
                        <button className="hover:text-[#C6A664] transition-colors">
                            Terms of Service
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}