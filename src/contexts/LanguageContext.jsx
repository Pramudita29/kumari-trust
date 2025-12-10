import React, { createContext, useContext, useState } from 'react';

const translations = {
  // Navigation
  'nav.home': { en: 'Home', ne: 'गृहपृष्ठ' },
  'nav.about': { en: 'About Us', ne: 'हाम्रो बारेमा' },
  'nav.initiatives': { en: 'Initiatives', ne: 'पहलहरू' },
  'nav.impact': { en: 'Impact', ne: 'प्रभाव' },
  'nav.getInvolved': { en: 'Get Involved', ne: 'सहभागी हुनुहोस्' },
  'nav.news': { en: 'News & Media', ne: 'समाचार र मिडिया' },
  'nav.contact': { en: 'Contact', ne: 'सम्पर्क' },

  // Hero Section
  'hero.title': { en: 'Empowering Nepal Through Compassion and Service', ne: 'करुणा र सेवामार्फत नेपाललाई सशक्त बनाउने' },
  'hero.subtitle': { en: 'Building a healthier, educated, and prosperous Nepal for all', ne: 'सबैका लागि स्वस्थ, शिक्षित र समृद्ध नेपाल निर्माण गर्दै' },
  'hero.cta': { en: 'Join Our Mission', ne: 'हाम्रो मिशनमा सामेल हुनुहोस्' },
  'hero.learn': { en: 'Learn More', ne: 'थप जान्नुहोस्' },

  // Stats
  'stats.districts': { en: 'Districts Reached', ne: 'जिल्लाहरू पुगेको' },
  'stats.lives': { en: 'Lives Touched', ne: 'जीवन छोएको' },
  'stats.donations': { en: 'Total Donations', ne: 'कुल दान' },
  'stats.projects': { en: 'Active Projects', ne: 'सक्रिय परियोजनाहरू' },

  // About
  'about.title': { en: 'About Kumari Trust', ne: 'कुमारी ट्रस्टको बारेमा' },
  'about.story': { en: 'Our Story', ne: 'हाम्रो कथा' },
  'about.mission': { en: 'Mission', ne: 'उद्देश्य' },
  'about.vision': { en: 'Vision', ne: 'दृष्टिकोण' },
  'about.values': { en: 'Core Values', ne: 'मूल मूल्यहरू' },
  'about.leadership': { en: 'Leadership', ne: 'नेतृत्व' },

  // Initiatives
  'initiatives.title': { en: 'Our Initiatives', ne: 'हाम्रो पहलहरू' },
  'initiatives.all': { en: 'All', ne: 'सबै' },
  'initiatives.healthcare': { en: 'Healthcare', ne: 'स्वास्थ्य सेवा' },
  'initiatives.education': { en: 'Education', ne: 'शिक्षा' },
  'initiatives.community': { en: 'Community Development', ne: 'सामुदायिक विकास' },
  'initiatives.viewDetails': { en: 'View Details', ne: 'विवरण हेर्नुहोस्' },

  // Impact
  'impact.title': { en: 'Our Impact', ne: 'हाम्रो प्रभाव' },
  'impact.stories': { en: 'Impact Stories', ne: 'प्रभाव कथाहरू' },
  'impact.testimonials': { en: 'What People Say', ne: 'मानिसहरूले के भन्छन्' },

  // Get Involved
  'getInvolved.title': { en: 'Get Involved', ne: 'सहभागी हुनुहोस्' },
  'getInvolved.donate': { en: 'Donate', ne: 'दान गर्नुहोस्' },
  'getInvolved.volunteer': { en: 'Volunteer', ne: 'स्वयंसेवक' },
  'getInvolved.partner': { en: 'Partner With Us', ne: 'हामीसँग साझेदार' },
  'getInvolved.donateDesc': { en: 'Your contribution makes a real difference', ne: 'तपाईंको योगदानले वास्तविक फरक पार्छ' },
  'getInvolved.volunteerDesc': { en: 'Join our team of changemakers', ne: 'परिवर्तनकारीहरूको हाम्रो टोलीमा सामेल हुनुहोस्' },
  'getInvolved.partnerDesc': { en: 'Collaborate for greater impact', ne: 'बढी प्रभावको लागि सहयोग गर्नुहोस्' },

  // Forms
  'form.name': { en: 'Full Name', ne: 'पूरा नाम' },
  'form.email': { en: 'Email Address', ne: 'इमेल ठेगाना' },
  'form.phone': { en: 'Phone Number', ne: 'फोन नम्बर' },
  'form.message': { en: 'Message', ne: 'सन्देश' },
  'form.amount': { en: 'Donation Amount', ne: 'दान रकम' },
  'form.submit': { en: 'Submit', ne: 'पेश गर्नुहोस्' },

  // Contact
  'contact.title': { en: 'Contact Us', ne: 'सम्पर्क गर्नुहोस्' },
  'contact.address': { en: 'Address', ne: 'ठेगाना' },
  'contact.phone': { en: 'Phone', ne: 'फोन' },
  'contact.email': { en: 'Email', ne: 'इमेल' },

  // Footer
  'footer.about': { en: 'About Kumari Trust', ne: 'कुमारी ट्रस्टको बारेमा' },
  'footer.quickLinks': { en: 'Quick Links', ne: 'द्रुत लिङ्कहरू' },
  'footer.connect': { en: 'Connect With Us', ne: 'हामीसँग जोडिनुहोस्' },
  'footer.copyright': { en: '© 2025 Kumari Trust. All rights reserved.', ne: '© २०२५ कुमारी ट्रस्ट। सर्वाधिकार सुरक्षित।' },
  'footer.founder': { en: 'Founded by Rajeev Bikram Shah', ne: 'राजीव बिक्रम शाहद्वारा स्थापित' },

  // News
  'news.title': { en: 'News & Media', ne: 'समाचार र मिडिया' },
  'news.latest': { en: 'Latest Updates', ne: 'नवीनतम अपडेटहरू' },
  'news.readMore': { en: 'Read More', ne: 'थप पढ्नुहोस्' },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
