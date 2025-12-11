'use client';

import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Handshake, Users } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
// I removed the unused 'Label' import here to fix the build warning
import Textarea from '../ui/textarea';

export function GetInvolvedPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('volunteer');

  const [formData, setFormData] = useState({
    tab: 'volunteer',
    name: '',
    email: '',
    phone: '',
    skills: '',
    availability: '',
    organization: '',
    website: '',
    proposal: ''
  });

  const tabs = [
    { key: 'volunteer', label: t('getInvolved.volunteer'), icon: Users, color: 'from-[#D4AF37] to-[#FFD700]' },
    { key: 'partner', label: t('getInvolved.partner'), icon: Handshake, color: 'from-[#800000] to-[#D4AF37]' },
  ];

  const SERVICE_ID = 'service_dy119bm';
  const TEMPLATE_ID = 'template_wyq0iqd';
  const PUBLIC_KEY = 'eLSS6yfCI1KMt15yh';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let dynamicDetails = '';

    if (activeTab === 'volunteer') {
      dynamicDetails = `Skills & Expertise: ${formData.skills}\nAvailability: ${formData.availability}`;
    } else if (activeTab === 'partner') {
      dynamicDetails = `Organization Name: ${formData.organization}\nWebsite: ${formData.website || 'N/A'}\nPartnership Proposal: ${formData.proposal}`;
    }

    const templateParams = {
      tab: activeTab.toUpperCase(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone || 'Not provided',
      dynamic_details: dynamicDetails,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        toast.success('Thank you! The owner has been notified.');

        setFormData({
          tab: activeTab,
          name: '',
          email: '',
          phone: '',
          skills: '',
          availability: '',
          organization: '',
          website: '',
          proposal: ''
        });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        toast.error('Oops! Something went wrong. Please try again.');
      });
  };

  const selectTab = (tabKey) => {
    setActiveTab(tabKey);
    setFormData((prev) => ({ ...prev, tab: tabKey }));
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/10 to-[#D4AF37]/10" />
        <div className="absolute inset-0 mandala-bg" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-[#800000] mb-6">{t('getInvolved.title')}</h1>
            <div className="gold-divider mx-auto" />
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 px-2">
              Your support creates lasting change. Join us in building a brighter future for Nepal.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto px-2"
          >
            {tabs.map((tab) => (
              <Button
                key={tab.key}
                onClick={() => selectTab(tab.key)}
                variant={activeTab === tab.key ? 'default' : 'outline'}
                size="lg"
                className={`flex items-center justify-center space-x-2 w-full sm:w-auto py-6 md:py-4 ${activeTab === tab.key
                  ? `bg-gradient-to-r ${tab.color} text-white hover:opacity-90`
                  : 'border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white'
                  }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">

          {/* VOLUNTEER TAB */}
          {activeTab === 'volunteer' && (
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 md:p-8 border-t-4 border-t-[#D4AF37] shadow-lg">
                <h3 className="text-2xl font-semibold text-[#800000] mb-6">Volunteer With Us</h3>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <Input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                  <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                  <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                  <Textarea name="skills" placeholder="Skills & Expertise" rows={3} value={formData.skills} onChange={handleChange} required />
                  <Input name="availability" placeholder="Availability" value={formData.availability} onChange={handleChange} required />
                  <Button type="submit" className="w-full bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-[#800000] py-4">
                    <Users className="w-5 h-5 mr-2" /> Submit Application
                  </Button>
                </form>
              </Card>

              {/* Right Column */}
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-[#FDFBF7] to-white shadow-lg">
                  <h4 className="text-xl font-semibold text-[#800000] mb-4">Volunteer Opportunities</h4>
                  <ul className="space-y-2">
                    {['Healthcare Support', 'Education Mentoring', 'Community Development', 'Administrative Support'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Users className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6 border-l-4 border-l-[#800000] shadow-lg">
                  <h4 className="text-lg font-semibold text-[#800000] mb-3">Why Volunteer?</h4>
                  <ul className="space-y-2 text-sm">
                    {['Make a real difference in communities', 'Gain valuable experience and skills', 'Meet like-minded changemakers', 'Contribute to meaningful causes'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          )}

          {/* PARTNER TAB */}
          {activeTab === 'partner' && (
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="p-6 md:p-8 border-t-4 border-t-[#800000] shadow-lg">
                <h3 className="text-2xl font-semibold text-[#800000] mb-6">Partner With Us</h3>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <Input name="organization" placeholder="Organization Name" value={formData.organization} onChange={handleChange} required />
                  <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                  <Input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                  <Input name="website" type="url" placeholder="Website" value={formData.website} onChange={handleChange} />
                  <Textarea name="proposal" placeholder="Partnership Proposal" rows={4} value={formData.proposal} onChange={handleChange} required />
                  <Button type="submit" className="w-full bg-gradient-to-r from-[#800000] to-[#D4AF37] text-white py-4">
                    <Handshake className="w-5 h-5 mr-2" /> Submit Partnership Inquiry
                  </Button>
                </form>
              </Card>

              {/* Right Column */}
              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-[#FDFBF7] to-white shadow-lg">
                  <h4 className="text-xl font-semibold text-[#800000] mb-4">Partnership Opportunities</h4>
                  <ul className="space-y-2">
                    {['Corporate Partnership', 'NGO Collaboration', 'Government Partnerships', 'Academic Partnerships'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Handshake className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6 bg-gradient-to-r from-[#800000] to-[#600000] text-white shadow-lg">
                  <h4 className="text-lg font-semibold mb-3 text-white">Benefits of Partnership</h4>
                  <ul className="space-y-2 text-sm">
                    {['Amplify social impact', 'Build brand credibility', 'Access community networks', 'Collaborate on meaningful projects'].map((item, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className="w-2 h-2 rounded-full bg-[#FFD700] mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}