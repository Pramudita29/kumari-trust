import { AnimatePresence, motion } from 'framer-motion';
import { Building2, GraduationCap, Heart, MapPin, TrendingUp, Users } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import ImageWithFallback from '../figma/ImageWithFallback';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';

export function InitiativesPage() {
    const { t, language } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedInitiative, setSelectedInitiative] = useState(null);

    const initiatives = [
        {
            id: 1,
            title: 'Free Ambulance Service',
            titleNe: 'निःशुल्क एम्बुलेन्स सेवा',
            category: 'healthcare',
            description: 'Emergency medical transportation serving remote districts',
            descriptionNe: 'दुर्गम जिल्लाहरूमा आपतकालीन चिकित्सा यातायात सेवा',
            location: 'Jajarkot District',
            beneficiaries: '15,000+ people',
            investment: 'NPR 2.5 Million',
            image: 'https://images.unsplash.com/photo-1597188558265-f0fb7428a243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
            details: 'Our free ambulance service provides 24/7 emergency medical transportation to rural communities in Jajarkot. Equipped with modern medical equipment and trained paramedics, we ensure timely access to healthcare facilities.',
            detailsNe: 'हाम्रो निःशुल्क एम्बुलेन्स सेवाले जाजरकोटका ग्रामीण समुदायहरूलाई २४/७ आपतकालीन चिकित्सा यातायात प्रदान गर्दछ।',
            impact: ['500+ emergency responses', 'Average response time: 15 minutes', '24/7 availability'],
        },
        {
            id: 2,
            title: 'Health Materials Donation',
            titleNe: 'स्वास्थ्य सामग्री दान',
            category: 'healthcare',
            description: 'Medical supplies and equipment for rural health facilities',
            descriptionNe: 'ग्रामीण स्वास्थ्य सुविधाहरूका लागि चिकित्सा आपूर्ति र उपकरण',
            location: 'Karnali Province',
            beneficiaries: '25,000+ people',
            investment: 'NPR 10 Million',
            image: 'https://images.unsplash.com/photo-1563233269-7e86880558a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaG9zcGl0YWwlMjBtZWRpY2FsfGVufDF8fHx8MTc2Mjg0NjgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
            details: 'A comprehensive donation program providing essential medical supplies, diagnostic equipment, and medicines to underserved health facilities across Karnali Province.',
            detailsNe: 'कर्णाली प्रदेशभरका अल्पसेवा प्राप्त स्वास्थ्य सुविधाहरूलाई आवश्यक चिकित्सा आपूर्ति प्रदान गर्ने कार्यक्रम।',
            impact: ['12 health posts equipped', 'Essential medicines for 1 year', 'Training for 50+ health workers'],
        },
        {
            id: 3,
            title: 'Rural Education Program',
            titleNe: 'ग्रामीण शिक्षा कार्यक्रम',
            category: 'education',
            description: 'Quality education and learning materials for rural schools',
            descriptionNe: 'ग्रामीण विद्यालयहरूका लागि गुणस्तरीय शिक्षा र सिकाइ सामग्री',
            location: '8 Districts',
            beneficiaries: '5,000+ students',
            investment: 'NPR 3 Million',
            image: 'https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjI3NjI1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
            details: 'Providing books, digital learning tools, and infrastructure support to rural schools. Our program includes teacher training and student scholarship opportunities.',
            detailsNe: 'ग्रामीण विद्यालयहरूलाई पुस्तक, डिजिटल सिकाइ उपकरण र पूर्वाधार सहयोग प्रदान गर्दै।',
            impact: ['25 schools supported', '500+ computers donated', '100+ scholarships awarded'],
        },
        {
            id: 4,
            title: 'Community Health Centers',
            titleNe: 'सामुदायिक स्वास्थ्य केन्द्रहरू',
            category: 'community',
            description: 'Building and operating primary healthcare facilities',
            descriptionNe: 'प्राथमिक स्वास्थ्य सुविधाहरू निर्माण र सञ्चालन',
            location: 'Multiple Districts',
            beneficiaries: '30,000+ people',
            investment: 'NPR 8 Million',
            image: 'https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMGNvbW11bml0eSUyMHBlb3BsZXxlbnwxfHx8fDE3NjI3NjM2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
            details: 'Establishing fully-equipped community health centers in underserved areas, providing preventive care, maternal health services, and regular health camps.',
            detailsNe: 'अल्पसेवा प्राप्त क्षेत्रहरूमा पूर्ण सुसज्जित सामुदायिक स्वास्थ्य केन्द्रहरू स्थापना गर्दै।',
            impact: ['5 health centers operational', '200+ births assisted', 'Monthly health camps'],
        },
        {
            id: 5,
            title: 'Vocational Training Program',
            titleNe: 'व्यावसायिक तालिम कार्यक्रम',
            category: 'education',
            description: 'Skills development for youth employment',
            descriptionNe: 'युवा रोजगारीका लागि सीप विकास',
            location: 'Kathmandu Valley',
            beneficiaries: '1,200+ youth',
            investment: 'NPR 2 Million',
            image: 'https://images.unsplash.com/photo-1760992003987-efc5259bcfbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjBoZWxwaW5nJTIwY29tbXVuaXR5fGVufDF8fHx8MTc2Mjg0MTA2M3ww&ixlib=rb-4.1.0&q=80&w=1080',
            details: 'Comprehensive vocational training in technology, hospitality, and trades. Includes job placement assistance and entrepreneurship support.',
            detailsNe: 'प्रविधि, आतिथ्य र व्यापारमा व्यापक व्यावसायिक तालिम। रोजगार नियुक्ति सहायता समावेश।',
            impact: ['15 skill tracks offered', '85% job placement rate', '50+ partner employers'],
        },
        {
            id: 6,
            title: 'Rural Infrastructure Development',
            titleNe: 'ग्रामीण पूर्वाधार विकास',
            category: 'community',
            description: 'Clean water, sanitation, and community facilities',
            descriptionNe: 'सफा पानी, सरसफाइ र सामुदायिक सुविधाहरू',
            location: 'Remote Villages',
            beneficiaries: '10,000+ people',
            investment: 'NPR 5 Million',
            image: 'https://images.unsplash.com/photo-1580921130259-5048f1409ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHJ1cmFsJTIwdmlsbGFnZXxlbnwxfHx8fDE3NjI3NjU1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
            details: 'Building sustainable infrastructure including water systems, sanitation facilities, and community centers in remote villages.',
            detailsNe: 'दुर्गम गाउँहरूमा दिगो पूर्वाधार निर्माण गर्दै।',
            impact: ['20+ water systems built', '15 community centers', '100% sanitation coverage'],
        },
    ];

    const categories = [
        { key: 'all', label: t('initiatives.all'), icon: TrendingUp },
        { key: 'healthcare', label: t('initiatives.healthcare'), icon: Heart },
        { key: 'education', label: t('initiatives.education'), icon: GraduationCap },
        { key: 'community', label: t('initiatives.community'), icon: Building2 },
    ];

    const filteredInitiatives =
        selectedCategory === 'all'
            ? initiatives
            : initiatives.filter(i => i.category === selectedCategory);

    const getCategoryColor = category => {
        switch (category) {
            case 'healthcare': return 'bg-red-100 text-red-800';
            case 'education': return 'bg-blue-100 text-blue-800';
            case 'community': return 'bg-green-100 text-green-800';
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
                        <h1 className="text-3xl md:text-5xl font-bold text-[#800000] mb-6">{t('initiatives.title')}</h1>
                        <div className="gold-divider mx-auto" />
                        <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 px-2">
                            Transforming lives through targeted programs in healthcare, education, and community development
                        </p>
                    </motion.div>

                    {/* Category Filter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 md:mt-12"
                    >
                        {categories.map(category => (
                            <Button
                                key={category.key}
                                onClick={() => setSelectedCategory(category.key)}
                                variant={selectedCategory === category.key ? 'default' : 'outline'}
                                className={`flex items-center space-x-2 text-white transition-all ${selectedCategory === category.key
                                    ? 'bg-[#800000] hover:bg-[#600000]'
                                    : 'border-[#800000] bg-[#800000] hover:bg-[#600000]'
                                    }`}
                            >
                                <category.icon className="w-4 h-4" />
                                <span>{category.label}</span>
                            </Button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Initiatives Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <AnimatePresence mode="wait">
                        <motion.div key={selectedCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {filteredInitiatives.map((initiative, index) => (
                                <motion.div key={initiative.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}>
                                    <Card className="overflow-hidden hover-glow cursor-pointer h-full flex flex-col border-none shadow-lg" onClick={() => setSelectedInitiative(initiative)}>
                                        <div className="relative h-48 md:h-56 overflow-hidden">
                                            <ImageWithFallback src={initiative.image} alt={initiative.title}
                                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                                            <div className="absolute top-4 right-4">
                                                <Badge className={getCategoryColor(initiative.category)}>
                                                    {t(`initiatives.${initiative.category}`)}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <h3 className="text-lg md:text-xl font-semibold text-[#800000] mb-2 line-clamp-2">
                                                {language === 'en' ? initiative.title : initiative.titleNe}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-600 mb-4 flex-1 line-clamp-3">
                                                {language === 'en' ? initiative.description : initiative.descriptionNe}
                                            </p>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <MapPin className="w-4 h-4 mr-2 text-[#D4AF37] flex-shrink-0" />
                                                    <span className="truncate">{initiative.location}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Users className="w-4 h-4 mr-2 text-[#D4AF37] flex-shrink-0" />
                                                    <span className="truncate">{initiative.beneficiaries}</span>
                                                </div>
                                            </div>
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedInitiative(initiative);
                                                }}
                                                className="w-full bg-[#800000] text-white hover:bg-[#600000] hover:text-white transition-all duration-200 mt-auto"
                                            >
                                                {t('initiatives.viewDetails')}
                                            </Button>
                                        </div>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Initiative Details Modal */}
            <Dialog open={selectedInitiative !== null} onOpenChange={() => setSelectedInitiative(null)}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#FFFFFF] rounded-lg shadow-xl p-0">
                    {selectedInitiative && (
                        <div className="p-6">
                            <DialogHeader className="mb-4">
                                <DialogTitle className="text-2xl md:text-3xl text-[#800000]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                    {language === 'en' ? selectedInitiative.title : selectedInitiative.titleNe}
                                </DialogTitle>
                            </DialogHeader>
                            <div className="space-y-6">
                                <div className="relative h-48 md:h-72 rounded-lg overflow-hidden">
                                    <ImageWithFallback src={selectedInitiative.image} alt={selectedInitiative.title} className="w-full h-full object-cover" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-3 p-4 bg-[#FDFBF7] rounded-lg">
                                        <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-600 uppercase tracking-wide">Location</p>
                                            <p className="text-[#800000] font-medium">{selectedInitiative.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 p-4 bg-[#FDFBF7] rounded-lg">
                                        <Users className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-600 uppercase tracking-wide">Beneficiaries</p>
                                            <p className="text-[#800000] font-medium">{selectedInitiative.beneficiaries}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 p-4 bg-[#FDFBF7] rounded-lg">
                                        <TrendingUp className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-gray-600 uppercase tracking-wide">Investment</p>
                                            <p className="text-[#800000] font-medium">{selectedInitiative.investment}</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-[#800000] mb-3">About This Initiative</h4>
                                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                                        {language === 'en' ? selectedInitiative.details : selectedInitiative.detailsNe}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-lg font-semibold text-[#800000] mb-3">Key Impact</h4>
                                    <ul className="space-y-2">
                                        {selectedInitiative.impact.map((item, index) => (
                                            <li key={index} className="flex items-start">
                                                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 mr-3 flex-shrink-0" />
                                                <span className="text-gray-700 text-sm md:text-base">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}