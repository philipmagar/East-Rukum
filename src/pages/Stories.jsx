import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Stories = () => {
    const { t } = useLanguage();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
    };

    return (
        <main>
            <section className="hero">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1>{t('Community Stories', 'सामुदायिक कथा')}</h1>
                    <p>{t('Highlighting youth, women, and local development in Eastern Rukum', 'पूर्वी रुकुममा युवा, महिला र स्थानीय विकासको प्रकाश पार्दै')}</p>
                </motion.div>
            </section>

            <section className="stories">
                <motion.div
                    className="container"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="story-card" variants={cardVariants} whileHover={{ scale: 1.02 }}>
                        <img src="/images/youth.jpg" alt="Youth Leadership" className="no-watermark" />
                        <div className="story-card-content">
                            <h3>{t('Youth Leadership & Education', 'युवा नेतृत्व र शिक्षा')}</h3>
                            <p>
                                {t(
                                    "Local youth initiatives have empowered education and vocational skills in rural communities, improving opportunities and connectivity.",
                                    "स्थानीय युवा पहलहरूले ग्रामीण समुदायमा शिक्षा र व्यावसायिक कौशलको सशक्तिकरण गरेका छन्, अवसर र सम्पर्क सुधार गर्दै।"
                                )}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className="story-card" variants={cardVariants} whileHover={{ scale: 1.02 }}>
                        <img src="/images/women.jpg" alt="Women & Community" />
                        <div className="story-card-content">
                            <h3>{t('Women & Community Development', 'महिला र सामुदायिक विकास')}</h3>
                            <p>
                                {t(
                                    "Women-led cooperatives and skill-building programs have strengthened community resilience and local economies.",
                                    "महिला नेतृत्वको सहकारी र सीप विकास कार्यक्रमहरूले समुदायको लचिलोपन र स्थानीय अर्थतन्त्र मजबुत पारेका छन्।"
                                )}
                            </p>
                        </div>
                    </motion.div>
                    <motion.div className="story-card" variants={cardVariants} whileHover={{ scale: 1.02 }}>
                        <img src="/images/tourism.jpg" alt="Sustainable Tourism" />
                        <div className="story-card-content">
                            <h3>{t('Sustainable Tourism', 'सतत पर्यटन')}</h3>
                            <p>
                                {t(
                                    "Community-based tourism initiatives preserve culture, environment, and provide income for local families.",
                                    "सामुदायिक पर्यटन पहलहरूले संस्कृति, वातावरण संरक्षण गर्दै स्थानीय परिवारका लागि आम्दानी प्रदान गर्छन्।"
                                )}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </main>
    );
};

export default Stories;

