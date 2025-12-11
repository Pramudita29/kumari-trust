import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { gradients } from '../../lib/styles';
import { CounterAnimation } from '../CounterAnimation';
import ImageWithFallback from '../figma/ImageWithFallback';
import { Card } from '../ui/card';

export function ImpactPage() {
    const { t } = useLanguage();

    const impactNumbers = [
        { value: 50000, suffix: '+', label: 'Lives Touched', color: gradients.red },
        { value: 12, suffix: '+', label: 'Districts Reached', color: gradients.gold },
        { value: 25, suffix: '+', label: 'Health Facilities Supported', color: gradients.redGold },
        { value: 5000, suffix: '+', label: 'Students Educated', color: gradients.goldRed },
        { value: 500, suffix: '+', label: 'Emergency Responses', color: gradients.red },
        { value: 20, suffix: '+', label: 'Water Systems Built', color: gradients.gold },
    ];

    const impactStories = [
        {
            title: 'Life-Saving Ambulance Service',
            location: 'Jajarkot District',
            description: 'When Sita Devi went into labor complications in a remote village, our ambulance team responded within 15 minutes, transporting her safely to the nearest hospital. Today, both mother and child are healthy.',
            image: 'https://images.unsplash.com/photo-1597188558265-f0fb7428a243?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWJ1bGFuY2UlMjBlbWVyZ2VuY3klMjB2ZWhpY2xlfGVufDF8fHx8MTc2Mjg0NjgwMnww&ixlib=rb-4.1.0&q=80&w=1080',
            stats: ['15-minute response time', 'Over 500 emergencies handled', '24/7 availability'],
        },
        {
            title: 'Transforming Rural Healthcare',
            location: 'Karnali Province',
            description: 'Our NPR 10 million donation equipped 12 health posts with essential medical supplies and equipment. Healthcare workers now have the tools they need to serve their communities effectively.',
            image: 'https://images.unsplash.com/photo-1563233269-7e86880558a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaG9zcGl0YWwlMjBtZWRpY2FsfGVufDF8fHx8MTc2Mjg0NjgwMHww&ixlib=rb-4.1.0&q=80&w=1080',
            stats: ['12 health posts equipped', '25,000+ beneficiaries', '50 health workers trained'],
        },
        {
            title: 'Education for Rural Children',
            location: 'Multiple Districts',
            description: 'Children in remote areas now have access to books, computers, and quality education. Our scholarship program has enabled hundreds of students to continue their studies.',
            image: 'https://images.unsplash.com/photo-1666281269793-da06484657e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjaGlsZHJlbiUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NjI3NjI1OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
            stats: ['25 schools supported', '500+ computers donated', '100+ scholarships'],
        },
        {
            title: 'Clean Water for Communities',
            location: 'Remote Villages',
            description: 'Building sustainable water systems has transformed daily life for thousands. Families no longer walk hours for clean water, and waterborne diseases have decreased significantly.',
            image: 'https://images.unsplash.com/photo-1580921130259-5048f1409ace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXBhbCUyMHJ1cmFsJTIwdmlsbGFnZXxlbnwxfHx8fDE3NjI3NjU1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
            stats: ['20+ water systems built', '10,000+ people served', '80% reduction in waterborne illness'],
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
                        <h1 className="text-3xl md:text-5xl font-bold text-[#800000] mb-6">{t('impact.title')}</h1>
                        <div className="gold-divider mx-auto" />
                        <p className="text-base md:text-xl text-gray-700 max-w-3xl mx-auto mt-6 px-2">
                            Measuring success through lives transformed and communities empowered
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Impact Numbers */}
            <section className="py-12 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    {/* Adjusted grid for better mobile spacing */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                        {impactNumbers.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div
                                    className="text-3xl md:text-5xl text-deep-maroon mb-2"
                                    style={{ fontFamily: "'Playfair Display', serif" }}
                                >
                                    <CounterAnimation end={item.value} suffix={item.suffix} />
                                </div>
                                <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Stories */}
            <section className="py-16 md:py-20 bg-gradient-to-b from-[#FDFBF7] to-white mandala-bg">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#800000] mb-4">{t('impact.stories')}</h2>
                        <div className="gold-divider mx-auto" />
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {impactStories.map((story, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="overflow-hidden hover-glow h-full border-none shadow-lg flex flex-col">
                                    <div className="relative h-56 md:h-72">
                                        <ImageWithFallback
                                            src={story.image}
                                            alt={story.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-white text-xl md:text-2xl font-semibold mb-1">{story.title}</h3>
                                            <p className="text-[#D4AF37] text-sm md:text-base font-medium">{story.location}</p>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                                        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed flex-grow">{story.description}</p>
                                        <div className="grid grid-cols-1 gap-3 mt-auto">
                                            {story.stats.map((stat, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <div className="w-2 h-2 rounded-full bg-[#D4AF37] mr-3 shrink-0" />
                                                    <span className="text-sm text-gray-600">{stat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Regional Impact Map Section */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#800000] mb-4">Where We Work</h2>
                        <div className="gold-divider mx-auto" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            { province: 'Karnali Province', districts: 5, programs: 12 },
                            { province: 'Sudurpashchim Province', districts: 3, programs: 8 },
                            { province: 'Bagmati Province', districts: 2, programs: 6 },
                            { province: 'Lumbini Province', districts: 1, programs: 4 },
                            { province: 'Gandaki Province', districts: 1, programs: 3 },
                        ].map((region, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="h-full"
                            >
                                <Card className="p-6 text-center hover-glow border-t-4 border-t-[#D4AF37] h-full flex flex-col justify-center">
                                    <h4 className="text-lg md:text-xl font-semibold text-[#800000] mb-4">{region.province}</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="text-3xl md:text-4xl text-[#800000]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                                {region.districts}
                                            </div>
                                            <div className="text-sm text-gray-600 font-medium">Districts</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl md:text-3xl text-[#D4AF37]" style={{ fontFamily: 'Playfair Display, serif' }}>
                                                {region.programs}
                                            </div>
                                            <div className="text-sm text-gray-600 font-medium">Active Programs</div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}