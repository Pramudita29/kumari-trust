import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Calendar, Newspaper } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ImageWithFallback from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

export function NewsPage() {
  const { t, language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const newsArticles = [
    {
      id: 1,
      title: 'Kumari Trust Donates NPR 10 Million in Medical Supplies to Karnali',
      titleNe: 'कुमारी ट्रस्टले कर्णालीमा १ करोड रुपैयाँको चिकित्सा सामग्री दान गर्यो',
      excerpt: 'Major healthcare initiative brings essential medical equipment to 12 health posts',
      excerptNe: '१२ वटा स्वास्थ्य चौकीहरूमा आवश्यक चिकित्सा उपकरण',
      content: 'In a significant step towards improving healthcare access in remote areas, Kumari Trust has donated medical equipment and supplies worth NPR 10 million to health facilities across Karnali Province. This initiative will benefit over 25,000 residents and includes diagnostic equipment, essential medicines, and training for healthcare workers.',
      contentNe: 'दुर्गम क्षेत्रमा स्वास्थ्य सेवा पहुँच सुधार गर्ने महत्त्वपूर्ण कदममा कुमारी ट्रस्टले कर्णाली प्रदेशका स्वास्थ्य सुविधाहरूलाई १ करोड रुपैयाँ बराबरको चिकित्सा उपकरण र आपूर्ति दान गरेको छ।',
      date: '2025-10-15',
      category: 'press',
      image: 'https://images.unsplash.com/photo-1563233269-7e86880558a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaG9zcGl0YWwlMjBtZWRpY2FsfGVufDF8fHx8MTc2Mjg0NjgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Free Ambulance Service Saves Over 500 Lives in Jajarkot',
      titleNe: 'निःशुल्क एम्बुलेन्स सेवाले जाजरकोटमा ५०० भन्दा बढी जीवन बचायो',
      excerpt: 'Emergency medical transportation reaches milestone in rural healthcare',
      excerptNe: 'ग्रामीण स्वास्थ्य सेवामा आपतकालीन यातायात माइलस्टोन',
      content: 'The free ambulance service launched by Kumari Trust has successfully responded to over 500 emergencies in Jajarkot District. Operating 24/7 with trained paramedics, the service has dramatically reduced emergency response times in remote areas.',
      contentNe: 'कुमारी ट्रस्टद्वारा सुरु गरिएको निःशुल्क एम्बुलेन्स सेवाले जाजरकोट जिल्लामा ५०० भन्दा बढी आपतकालीन अवस्थामा सफलतापूर्वक प्रतिक्रिया दिएको छ।',
      date: '2025-09-20',
      category: 'achievement',
      image: 'https://images.unsplash.com/photo-1597188558265-f0fb7428a243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjB2ZWhpY2xlfGVufDF8fHx8MTc2Mjg0NjgwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'New Education Initiative Launches Across 25 Rural Schools',
      titleNe: '२५ ग्रामीण विद्यालयहरूमा नयाँ शिक्षा पहल सुरु',
      excerpt: 'Digital learning tools and scholarships bring quality education to remote areas',
      excerptNe: 'डिजिटल सिकाइ उपकरण र छात्रवृत्तिले दुर्गम क्षेत्रमा गुणस्तरीय शिक्षा',
      content: 'Kumari Trust has expanded its education program to 25 schools across 8 districts, providing computers, books, and scholarship opportunities to over 5,000 students. The initiative includes teacher training and infrastructure improvements.',
      contentNe: 'कुमारी ट्रस्टले आफ्नो शिक्षा कार्यक्रम ८ जिल्लाका २५ विद्यालयहरूमा विस्तार गरेको छ।',
      date: '2025-08-10',
      category: 'event',
      image: 'https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjI3NjI1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Community Health Centers Serve 30,000 Residents',
      titleNe: 'सामुदायिक स्वास्थ्य केन्द्रहरूले ३०,००० बासिन्दाहरूलाई सेवा',
      excerpt: 'Five new health centers operational in underserved districts',
      excerptNe: 'अल्पसेवा प्राप्त जिल्लाहरूमा पाँच नयाँ स्वास्थ्य केन्द्र सञ्चालनमा',
      content: 'Our community health centers have now served over 30,000 people with preventive care, maternal health services, and regular health camps. The centers operate with fully trained staff and modern equipment.',
      contentNe: 'हाम्रो सामुदायिक स्वास्थ्य केन्द्रहरूले अब ३०,००० भन्दा बढी मानिसहरूलाई निवारक हेरचाह सेवा दिएका छन्।',
      date: '2025-07-05',
      category: 'update',
      image: 'https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMGNvbW11bml0eSUyMHBlb3BsZXxlbnwxfHx8fDE3NjI3NjM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Rajeev Bikram Shah Honored for Philanthropic Work',
      titleNe: 'राजीव बिक्रम शाह परोपकारी कार्यको लागि सम्मानित',
      excerpt: 'Kumari Trust founder receives national recognition for social impact',
      excerptNe: 'सामाजिक प्रभावको लागि राष्ट्रिय मान्यता',
      content: 'Rajeev Bikram Shah, founder of Kumari Trust, has been recognized at the National Philanthropy Awards for his exceptional contributions to healthcare and education in Nepal. His vision continues to transform lives across the nation.',
      contentNe: 'कुमारी ट्रस्टका संस्थापक राजीव बिक्रम शाहलाई नेपालमा स्वास्थ्य र शिक्षामा असाधारण योगदानको लागि राष्ट्रिय परोपकार पुरस्कारमा सम्मानित गरिएको छ।',
      date: '2025-06-15',
      category: 'achievement',
      image: 'https://images.unsplash.com/photo-1665394183024-7a95b156d427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHRlbXBsZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjI4NDI5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Water Systems Bring Clean Water to 20 Villages',
      titleNe: '२० गाउँहरूमा सफा पानी ल्याउने जल प्रणाली',
      excerpt: 'Infrastructure development transforms rural communities',
      excerptNe: 'पूर्वाधार विकासले ग्रामीण समुदायहरूलाई रूपान्तरण',
      content: 'Kumari Trust has completed the construction of 20 sustainable water systems in remote villages, providing clean drinking water to over 10,000 people. The initiative has significantly reduced waterborne diseases.',
      contentNe: 'कुमारी ट्रस्टले दुर्गम गाउँहरूमा २० दिगो जल प्रणालीहरूको निर्माण पूरा गरेको छ।',
      date: '2025-05-01',
      category: 'update',
      image: 'https://images.unsplash.com/photo-1580921130259-5048f1409ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHJ1cmFsJTIwdmlsbGFnZXxlbnwxfHx8fDE3NjI3NjU1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const years = ['all', '2025', '2024', '2023'];
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'press', label: 'Press Release' },
    { key: 'event', label: 'Events' },
    { key: 'achievement', label: 'Achievements' },
    { key: 'update', label: 'Updates' },
  ];

  const filteredArticles = newsArticles.filter(article => {
    const yearMatch = selectedYear === 'all' || article.date.startsWith(selectedYear);
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    return yearMatch && categoryMatch;
  });

  const getCategoryColor = category => {
    switch (category) {
      case 'press': return 'bg-blue-100 text-blue-800';
      case 'event': return 'bg-green-100 text-green-800';
      case 'achievement': return 'bg-yellow-100 text-yellow-800';
      case 'update': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/10 to-[#D4AF37]/10" />
        <div className="absolute inset-0 mandala-bg" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-12">
            {/* Responsive Typography */}
            <h1 className="text-3xl md:text-5xl font-bold text-[#800000] mb-6">{t('news.title')}</h1>
            <div className="gold-divider mx-auto" />
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 px-4">
              Stay updated with our latest initiatives, achievements, and community impact stories
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8 md:mt-12"
          >
            <div className="flex flex-wrap gap-2 justify-center">
              {years.map(year => (
                <Button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  variant={selectedYear === year ? 'default' : 'outline'}
                  size="sm"
                  className={
                    selectedYear === year
                      ? 'bg-[#800000] text-white hover:bg-[#600000]'
                      : 'border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white'
                  }
                >
                  {year === 'all' ? 'All Years' : year}
                </Button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <Button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  variant={selectedCategory === cat.key ? 'default' : 'outline'}
                  size="sm"
                  className={
                    selectedCategory === cat.key
                      ? 'bg-[#D4AF37] text-white hover:bg-[#B8941F]'
                      : 'border-[#D4AF37] text-[#800000] hover:bg-[#D4AF37] hover:text-white'
                  }
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div key={`${selectedYear}-${selectedCategory}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article, index) => (
                <motion.div key={article.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                  <Card className="overflow-hidden hover-glow cursor-pointer h-full flex flex-col border-none shadow-lg" onClick={() => setSelectedArticle(article)}>
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <ImageWithFallback src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                      <div className="absolute top-4 right-4">
                        <Badge className={getCategoryColor(article.category)}>
                          {categories.find(c => c.key === article.category)?.label}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Calendar className="w-4 h-4 mr-2 text-[#D4AF37]" />
                        {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      {/* Added line-clamp and responsive font size */}
                      <h3 className="text-xl md:text-2xl font-semibold text-[#800000] mb-3 flex-1 line-clamp-2">
                        {language === 'en' ? article.title : article.titleNe}
                      </h3>
                      {/* Added line-clamp and responsive font size */}
                      <p className="text-gray-600 mb-4 text-sm md:text-base line-clamp-3">
                        {language === 'en' ? article.excerpt : article.excerptNe}
                      </p>
                      <Button variant="outline" className="w-full border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white mt-auto">
                        {t('news.readMore')} <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No articles found for the selected filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Article Details Modal */}
      <Dialog open={selectedArticle !== null} onOpenChange={() => setSelectedArticle(null)}>
        {/* Added bg-white and padding to DialogContent to fix transparency issue */}
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-6 md:p-8 rounded-xl">
          {selectedArticle && (
            <>
              <DialogHeader className="mb-4">
                <DialogTitle className="text-2xl md:text-4xl font-bold text-[#800000] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {language === 'en' ? selectedArticle.title : selectedArticle.titleNe}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="relative h-56 md:h-96 rounded-lg overflow-hidden shadow-md">
                  <ImageWithFallback src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
                  <div className="flex items-center text-sm md:text-base text-gray-600">
                    <Calendar className="w-5 h-5 mr-2 text-[#D4AF37]" />
                    {new Date(selectedArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </div>
                  <Badge className={`${getCategoryColor(selectedArticle.category)} text-sm px-3 py-1`}>
                    {categories.find(c => c.key === selectedArticle.category)?.label}
                  </Badge>
                </div>
                <div className="prose max-w-none text-base md:text-lg text-gray-700 leading-relaxed">
                  <p>{language === 'en' ? selectedArticle.content : selectedArticle.contentNe}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}