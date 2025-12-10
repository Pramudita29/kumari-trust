import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import Textarea from '../ui/textarea';

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        'service_dy119bm',       // Your EmailJS service ID
        'template_7uw8cep',      // Your EmailJS template ID
        formData,                // Data object matching your template variables
        'eLSS6yfCI1KMt15yh'     // Your EmailJS public key
      )
      .then(() => {
        toast.success('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error(error);
        toast.error('Something went wrong! Please try again later.');
      })
      .finally(() => {
        setSending(false);
      });
  };

  const contactInfo = [
    { icon: MapPin, title: t('contact.address'), details: ['Kumari House, Thapathali, Kathmandu, Nepal', 'Bagmati Province'] },
    { icon: Phone, title: t('contact.phone'), details: ['+977-9813516571'] },
    { icon: Mail, title: t('contact.email'), details: ['kumari.trust25@gmail.com'] },
    { icon: Clock, title: 'Office Hours', details: ['Sunday - Friday: 10:00 AM - 5:00 PM', 'Saturday: Closed'] },
  ];

  const googleMapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyCZeGTccheRDRrX5Ns_Z4g0KMZxUbD4D1s&q=M8V9+5FX+Kia,+Thapathali,+Bus+Stop,+थापाथली+सडक,+Kathmandu+44600&zoom=17`;

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/10 to-[#D4AF37]/10" />
        <div className="absolute inset-0 mandala-bg" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-[#800000] mb-6">{t('contact.title')}</h1>
            <div className="gold-divider mx-auto" />
            <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 px-2">
              We would love to hear from you. Reach out to us for any inquiries, partnerships, or support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="p-6 text-center h-full hover-glow border-t-4 border-t-[#D4AF37] flex flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#800000] to-[#D4AF37] mb-4">
                    <info.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <h4 className="text-lg md:text-xl font-semibold text-[#800000] mb-3">{info.title}</h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm mb-1">{detail}</p>
                  ))}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="p-6 md:p-8 border-t-4 border-t-[#800000] shadow-lg h-full">
                <h3 className="text-2xl md:text-3xl font-semibold text-[#800000] mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <Label htmlFor="name">{t('form.name')}</Label>
                    <Input id="name" value={formData.name} onChange={handleChange} required className="border-gray-300 h-10 md:h-11" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t('form.email')}</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="border-gray-300 h-10 md:h-11" />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t('form.phone')}</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} className="border-gray-300 h-10 md:h-11" />
                  </div>
                  <div>
                    <Label htmlFor="message">{t('form.message')}</Label>
                    <Textarea id="message" value={formData.message} onChange={handleChange} required rows={5} className="border-gray-300" placeholder="Tell us how we can help you..." />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full bg-[#800000] text-white hover:bg-[#D4AF37] hover:text-[#800000] transition-colors py-6 text-lg" size="lg">
                    <Send className="w-5 h-5 mr-2" />
                    {sending ? 'Sending...' : t('form.submit')}
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6 flex flex-col h-full">
              {/* Map */}
              <Card className="overflow-hidden border-none shadow-lg flex-grow flex flex-col">
                <div className="relative w-full h-64 md:h-full min-h-[300px] flex-grow">
                  <iframe title="Kumari Trust Location" src={googleMapSrc} className="absolute inset-0 w-full h-full" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ border: 0 }} />
                </div>
                <div className="p-6 bg-gradient-to-br from-[#FDFBF7] to-white">
                  <h4 className="text-lg font-semibold text-[#800000] mb-2">Visit Our Office</h4>
                  <p className="text-gray-700 text-sm mb-4">We welcome visitors to our office. Please call ahead to schedule an appointment.</p>
                  <a href="https://www.google.com/maps/dir/?api=1&destination=M8V9+5FX+Kia,+Thapathali,+Bus+Stop,+थापाथली+सडक,+Kathmandu+44600" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-[#800000] text-white hover:bg-[#D4AF37] hover:text-[#800000]">Get Directions</Button>
                  </a>
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="p-6 bg-gradient-to-r from-[#800000] to-[#600000] text-white border-none shadow-lg">
                <h4 className="text-lg font-semibold text-white mb-2">Emergency Contact</h4>
                <p className="text-gray-200 text-sm mb-0">For urgent matters or emergency assistance, please call <strong>+977-9813516571</strong>.</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
